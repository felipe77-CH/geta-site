/* =====================================================================
   GETA – Serviço do formulário de contato (Cloudflare Worker)
   ---------------------------------------------------------------------
   Recebe o formulário do site (POST /api/contato) e:
   1. confere a origem, o anti-spam e os campos;
   2. guarda o contato no banco D1 (tabela "contatos", ver schema.sql);
   3. envia um aviso por e-mail para CONTACT_TO (se o envio estiver ativo).
   Mesmo se o e-mail falhar, o contato fica guardado no banco.
   Configuração em wrangler.toml. Instruções em README.md.
   ===================================================================== */

const LIMITES = { nome: 120, empresa: 160, email: 200, telefone: 40, area: 120, mensagem: 5000, idioma: 5, pagina: 300 };
const EMAIL_OK = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default {
  async fetch(request, env) {
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

    // Aviso por e-mail (opcional: precisa do binding EMAIL e de CONTACT_TO / CONTACT_FROM)
    if (env.EMAIL && env.CONTACT_TO && env.CONTACT_FROM) {
      try {
        await enviarAviso(env, c, id, pais);
        await env.DB.prepare('UPDATE contatos SET email_enviado = 1 WHERE id = ?').bind(id).run();
      } catch (e) {
        console.error('Contato guardado, mas o e-mail falhou:', e);
      }
    }
    return resposta(200, { ok: true });
  }
};

// ---------------------------------------------------------------------
// E-mail de aviso (texto simples, UTF-8), enviado pelo Cloudflare Email Routing
async function enviarAviso(env, c, id, pais) {
  const { EmailMessage } = await import('cloudflare:email');
  const umaLinha = s => String(s).replace(/[\r\n]+/g, ' ').trim();
  const assunto = `Novo contato pelo site GETA${c.area ? ' – ' + c.area : ''}`;
  const corpo = [
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
