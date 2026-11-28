/* =====================================================================
   GETA – Serviço do formulário de contato (Cloudflare Worker)
   ---------------------------------------------------------------------
   Recebe o formulário do site (POST /api/contato) e:
   1. confere a origem, o anti-spam e os campos;
   2. guarda o contato no banco D1 (tabela "contatos", ver schema.sql);
   3. envia um aviso por e-mail para CONTACT_TO (se o envio estiver ativo);
   4. envia à pessoa uma confirmação de recebimento no idioma dela (Resend).
   Mesmo se os e-mails falharem, o contato fica guardado no banco.
   Configuração em wrangler.toml. Instruções em README.md.
   ===================================================================== */

const LIMITES = { nome: 120, empresa: 160, email: 200, telefone: 40, area: 120, mensagem: 5000, idioma: 5, pagina: 300 };
const EMAIL_OK = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default {
  async fetch(request, env, ctx) {
    const origem = request.headers.get('Origin') || '';
    const permitidas = (env.ALLOWED_ORIGINS || '').split(',').map(s => s.trim()).filter(Boolean);
    const cors = permitidas.includes(origem)
      ? { 'Access-Control-Allow-Origin': origem, 'Access-Control-Allow-Methods': 'POST, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type, Accept', 'Vary': 'Origin' }
      : {};
    const resposta = (status, corpo) => new Response(JSON.stringify(corpo), { status, headers: { 'Content-Type': 'application/json; charset=utf-8', ...cors } });

    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors });
    if (request.method !== 'POST') return resposta(405, { ok: false, erro: 'metodo' });
    if (!permitidas.includes(origem)) return resposta(403, { ok: false, erro: 'origem' });

    // Lê o formulário (FormData ou JSON)
    let dados = {};
    try {
      const tipo = request.headers.get('Content-Type') || '';
      if (tipo.includes('application/json')) dados = await request.json();
      else dados = Object.fromEntries(await request.formData());
    } catch { return resposta(400, { ok: false, erro: 'formato' }); }

    // Anti-spam 1: campo invisível preenchido = robô (responde "ok" sem guardar)
    if (dados.botcheck) return resposta(200, { ok: true });

    // Anti-spam 2: Cloudflare Turnstile (só se a chave secreta estiver configurada)
    if (env.TURNSTILE_SECRET) {
      const token = String(dados['cf-turnstile-response'] || '');
      const ip = request.headers.get('CF-Connecting-IP') || '';
      const v = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST', body: new URLSearchParams({ secret: env.TURNSTILE_SECRET, response: token, remoteip: ip })
      }).then(r => r.json()).catch(() => ({ success: false }));
      if (!v.success) return resposta(400, { ok: false, erro: 'antispam' });
    }

    // Limpa e valida os campos
    const c = {};
    for (const [campo, max] of Object.entries(LIMITES)) c[campo] = String(dados[campo] || '').trim().slice(0, max);
    if (!c.nome || !c.mensagem || !EMAIL_OK.test(c.email)) return resposta(400, { ok: false, erro: 'campos' });
    const pais = (request.cf && request.cf.country) || '';

    // Guarda no banco
    let id;
    try {
      const r = await env.DB.prepare(
        `INSERT INTO contatos (nome, empresa, email, telefone, area, mensagem, idioma, pagina, pais)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`
      ).bind(c.nome, c.empresa, c.email, c.telefone, c.area, c.mensagem, c.idioma, c.pagina, pais).run();
      id = r.meta && r.meta.last_row_id;
    } catch (e) {
      console.error('Erro ao guardar o contato:', e);
      return resposta(500, { ok: false, erro: 'banco' });
    }

    // Os e-mails saem depois da resposta ao site (a pessoa não espera por eles)
    const emails = enviarEmails(env, c, id, pais);
    if (ctx && ctx.waitUntil) ctx.waitUntil(emails); else await emails;
    return resposta(200, { ok: true });
  }
};

// ---------------------------------------------------------------------
// 1) Aviso à equipe: pelo Cloudflare Email Routing (binding EMAIL) ou, sem ele, pelo Resend.
// 2) Confirmação à pessoa: pelo Resend (o Email Routing só envia a endereços verificados).
async function enviarEmails(env, c, id, pais) {
  if (env.CONTACT_TO && env.CONTACT_FROM && (env.EMAIL || env.RESEND_API_KEY)) {
    try {
      if (env.EMAIL) await enviarAviso(env, c, id, pais);
      else await enviarResend(env, {
        to: env.CONTACT_TO, reply_to: c.email,
        subject: assuntoAviso(c), text: textoAviso(c, id, pais)
      });
      await env.DB.prepare('UPDATE contatos SET email_enviado = 1 WHERE id = ?').bind(id).run();
    } catch (e) {
      console.error('Contato guardado, mas o aviso falhou:', e);
    }
  }

  if (env.RESEND_API_KEY && env.CONTACT_FROM) {
    try {
      // Contra abuso (alguém usando o formulário para mandar e-mails a terceiros):
      // no máximo uma confirmação por endereço a cada 24 h, e sem repetir a mensagem recebida.
      const recente = await env.DB.prepare(
        `SELECT 1 FROM contatos WHERE email = ? AND id <> ? AND confirmacao_enviada = 1
           AND criado_em > datetime('now', '-1 day') LIMIT 1`
      ).bind(c.email, id).first();
      if (recente) return;
      const m = confirmacao(c);
      // Remetente da confirmação: CONFIRM_FROM (segredo, ex.: "Nome – GETA Engenharia <nome@geta.eng.br>").
      // As respostas da pessoa vão para esse mesmo endereço. Sem ele: CONTACT_FROM, respondendo a CONTACT_TO.
      const de = (env.CONFIRM_FROM || '').trim();
      const endereco = (de.match(/<([^<>\s]+@[^<>\s]+)>/) || [, de])[1];
      const from = !de ? undefined : de.includes('<') ? de : `GETA Engenharia <${de}>`;
      await enviarResend(env, {
        from, to: c.email, reply_to: from ? endereco : env.CONTACT_TO,
        subject: m.assunto, text: m.texto, html: m.html
      });
      await env.DB.prepare('UPDATE contatos SET confirmacao_enviada = 1 WHERE id = ?').bind(id).run();
    } catch (e) {
      console.error('Contato guardado, mas a confirmação falhou:', e);
    }
  }
}

// Envio pela API do Resend (https://resend.com/docs/api-reference/emails/send-email)
async function enviarResend(env, { from, to, reply_to, subject, text, html }) {
  const corpo = { from: from || `GETA Engenharia <${env.CONTACT_FROM}>`, to: [to], subject, text };
  if (html) corpo.html = html;
  if (reply_to) corpo.reply_to = reply_to;
  const r = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(corpo)
  });
  if (!r.ok) throw new Error(`Resend ${r.status}: ${(await r.text()).slice(0, 300)}`);
}

// ---------------------------------------------------------------------
// Confirmação de recebimento, no idioma do site em que a pessoa escreveu (pt / en / es)
const CONFIRMACAO = {
  pt: {
    assunto: 'Recebemos a sua mensagem – GETA Engenharia',
    ola: n => n ? `Olá, ${n},` : 'Olá,',
    corpo: [
      'Obrigado pelo contato. Recebemos a sua mensagem pelo site da GETA Engenharia.',
      'Um especialista da nossa equipe já foi avisado e vai responder o mais rápido possível.',
      'Se quiser complementar alguma informação, basta responder este e-mail.'
    ],
    fim: 'Atenciosamente,', aviso: 'Você recebeu este e-mail porque preencheu o formulário de contato em getaengenharia.com.br. Se não foi você, pode ignorá-lo.'
  },
  en: {
    assunto: 'We received your message – GETA Engenharia',
    ola: n => n ? `Hello ${n},` : 'Hello,',
    corpo: [
      'Thank you for getting in touch. We received your message through the GETA Engenharia website.',
      'A specialist from our team has already been notified and will reply as soon as possible.',
      'If you would like to add any information, simply reply to this email.'
    ],
    fim: 'Best regards,', aviso: 'You received this email because you filled in the contact form at getaengenharia.com.br. If this was not you, you can ignore it.'
  },
  es: {
    assunto: 'Recibimos su mensaje – GETA Engenharia',
    ola: n => n ? `Hola, ${n}:` : 'Hola:',
    corpo: [
      'Gracias por contactarnos. Recibimos su mensaje a través del sitio de GETA Engenharia.',
      'Un especialista de nuestro equipo ya fue avisado y le responderá lo antes posible.',
      'Si desea agregar alguna información, basta con responder este correo.'
    ],
    fim: 'Saludos cordiales,', aviso: 'Recibió este correo porque completó el formulario de contacto en getaengenharia.com.br. Si no fue usted, puede ignorarlo.'
  }
};

function confirmacao(c) {
  const t = CONFIRMACAO[(c.idioma || '').slice(0, 2).toLowerCase()] || CONFIRMACAO.pt;
  // Só o primeiro nome, e nada que pareça link (evita que o formulário vire envio de spam)
  const primeiro = c.nome.split(/\s+/)[0].slice(0, 40);
  const nome = /[:/@.<>]|www/i.test(primeiro) ? '' : primeiro;
  const assinatura = ['GETA Engenharia', 'https://getaengenharia.com.br'];
  const texto = [t.ola(nome), '', ...t.corpo.flatMap(p => [p, '']), t.fim, ...assinatura, '', '—', t.aviso].join('\n');
  const p = s => `<p style="margin:0 0 14px">${esc(s)}</p>`;
  const html = `<!doctype html><html><body style="margin:0;padding:24px;background:#f4f6f5;font-family:Arial,Helvetica,sans-serif;color:#1f2a27">
<div style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:8px;padding:28px 28px 20px;font-size:15px;line-height:1.55">
${p(t.ola(nome))}${t.corpo.map(p).join('')}
<p style="margin:22px 0 0">${esc(t.fim)}<br><strong>GETA Engenharia</strong><br><a href="https://getaengenharia.com.br" style="color:#1d7a5f">getaengenharia.com.br</a></p>
</div>
<p style="max-width:560px;margin:14px auto 0;font-size:12px;color:#6b7773">${esc(t.aviso)}</p>
</body></html>`;
  return { assunto: t.assunto, texto, html };
}

function esc(s) {
  return String(s).replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
}

// ---------------------------------------------------------------------
// E-mail de aviso à equipe (texto simples, UTF-8)
function assuntoAviso(c) {
  return `Novo contato pelo site GETA${c.area ? ' – ' + c.area : ''}`;
}
function textoAviso(c, id, pais) {
  return [
    `Novo contato recebido pelo site (nº ${id}).`,
    '',
    `Nome:      ${c.nome}`,
    `Empresa:   ${c.empresa || '—'}`,
    `E-mail:    ${c.email}`,
    `Telefone:  ${c.telefone || '—'}`,
    `Área:      ${c.area || '—'}`,
    `Idioma:    ${c.idioma || '—'}   País: ${pais || '—'}`,
    `Página:    ${c.pagina || '—'}`,
    '',
    'Mensagem:',
    c.mensagem,
    '',
    '—',
    'Responda este e-mail para falar direto com a pessoa.'
  ].join('\n');
}

// Aviso pelo Cloudflare Email Routing (mensagem MIME montada à mão)
async function enviarAviso(env, c, id, pais) {
  const { EmailMessage } = await import('cloudflare:email');
  const umaLinha = s => String(s).replace(/[\r\n]+/g, ' ').trim();
  const assunto = assuntoAviso(c);
  const corpo = textoAviso(c, id, pais);
  const dominio = env.CONTACT_FROM.split('@')[1];
  const raw = [
    `From: Site GETA <${env.CONTACT_FROM}>`,
    `To: <${env.CONTACT_TO}>`,
    `Reply-To: ${cabecalho(umaLinha(c.nome))} <${umaLinha(c.email)}>`,
    `Subject: ${cabecalho(assunto)}`,
    `Message-ID: <${crypto.randomUUID()}@${dominio}>`,
    `Date: ${new Date().toUTCString()}`,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: base64',
    '',
    base64(corpo).replace(/.{1,76}/g, '$&\r\n').trim()
  ].join('\r\n');
  await env.EMAIL.send(new EmailMessage(env.CONTACT_FROM, env.CONTACT_TO, raw));
}

function base64(texto) {
  const bytes = new TextEncoder().encode(texto);
  let bin = '';
  for (let i = 0; i < bytes.length; i += 0x8000) bin += String.fromCharCode(...bytes.subarray(i, i + 0x8000));
  return btoa(bin);
}
// Cabeçalho com acentos (RFC 2047)
function cabecalho(texto) {
  return /^[\x20-\x7e]*$/.test(texto) ? texto : `=?UTF-8?B?${base64(texto)}?=`;
}
