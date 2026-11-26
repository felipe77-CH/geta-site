/* =====================================================================
   GETA – Páginas internas: cases (cases/*.html), áreas (area.html) e
   Quem somos (quem-somos.html). Monta header/rodapé e o conteúdo a partir
   de cases/cases.js e cases/areas.js.
   Não é preciso editar este arquivo para preencher um case.
   ===================================================================== */
(function () {
  'use strict';
  const B = document.body;
  const ROOT = B.dataset.root || '';
  const PAGE = B.dataset.page;
  const CASES = window.GETA_CASES || [];
  const $ = (s, el) => (el || document).querySelector(s);
  const $$ = (s, el) => [...(el || document).querySelectorAll(s)];
  const t = k => I18N.t(k);
  const pick = o => (!o ? '' : (o[I18N.lang] || o.pt || ''));
  const caseURL = c => ROOT + 'cases/' + c.slug + '.html';
  const isDraft = c => (c.status || 'rascunho') !== 'publicado';
  const AXES = ['amb', 'proc', 'res', 'dig', 'mod'];


  function card(c) {
    return `<a class="pcard" href="${caseURL(c)}" data-ax="${c.eixos.join(' ')}">
      <div class="thumb" style="background-image:url('${ROOT + c.capa}')">${isDraft(c) ? `<span class="badge">${t('pf.draft')}</span>` : ''}${c.cliente ? `<span class="client">${c.cliente}</span>` : ''}</div>
      <div class="b"><h3>${pick(c.titulo)}</h3><p>${pick(c.resumo)}</p><span class="more">${t('pf.read')}</span></div></a>`;
  }

  /* ---------- Header e rodapé (iguais aos da home) ---------- */
  function chrome() {
    const r = ROOT + 'index.html', qs = ROOT + 'quem-somos.html', tec = ROOT + 'tecnologia.html';
    const here = PAGE === 'about' ? 'about' : PAGE === 'tech' ? 'tech' : 'areas';
    const cur = k => (k === here ? ' cur' : '');
    B.insertAdjacentHTML('afterbegin', `
<header class="header" id="header"><div class="wrap bar">
  <a class="brand" href="${r}" aria-label="GETA"><img class="logo-white" src="${ROOT}img/logo-geta-white.png" alt="GETA"><img class="logo-color" src="${ROOT}img/logo-geta.png" alt="GETA"><span class="brand-text" data-i18n="brand.text">Grupo de Especialistas em Tecnologias Ambientais</span></a>
  <ul class="nav">
    <li><a href="${qs}" class="${cur('about')}" data-i18n="nav.about">A GETA</a>
      <div class="dropdown"><a href="${qs}" data-i18n="nav.who">Quem somos</a><a href="${r}#parceiro" data-i18n="nav.how">Como trabalhamos</a><a href="${r}#tecnologia" data-i18n="nav.diff">Diferencial tecnológico</a></div></li>
    <li class="has-mega"><a href="${tec}" class="mega-toggle${cur('tech')}" aria-expanded="false" data-i18n="nav.tech">Tecnologia</a><div class="mega" data-mega="tech"></div></li>
    <li class="has-mega"><a href="${r}#areas" class="mega-toggle${cur('areas')}" aria-expanded="false" data-i18n="nav.areas">Áreas de atuação</a><div class="mega" data-mega></div></li>
    <li><a href="${r}#contato" data-i18n="nav.contact">Contato</a></li>
  </ul>
  <div class="utility">
    <div class="lang" role="group" aria-label="Idioma / Language / Idioma"><button type="button" data-lang="pt" class="on" title="Português">PT</button><button type="button" data-lang="en" title="English">EN</button><button type="button" data-lang="es" title="Español">ES</button></div>
    <a class="btn" href="${r}#contato" data-i18n="cta.specialist">Fale com um especialista</a>
  </div>
  <button class="burger" data-i18n-aria="aria.menu" aria-label="Abrir menu" id="burger"><i></i></button>
</div></header>`);
    B.insertAdjacentHTML('beforeend', `
<footer class="footer"><div class="wrap">
  <div class="foot-grid">
    <div><img class="flogo" src="${ROOT}img/logo-geta-white.png" alt="GETA"><p data-i18n="ft.desc">Grupo de Especialistas em Tecnologias Ambientais.<br>Inovação a Serviço da Sustentabilidade.</p></div>
    <div><h4 data-i18n="nav.about">A GETA</h4><ul><li><a href="${qs}" data-i18n="nav.who">Quem somos</a></li><li><a href="${r}#parceiro" data-i18n="nav.how">Como trabalhamos</a></li><li><a href="${r}#tecnologia" data-i18n="nav.diff">Diferencial tecnológico</a></li><li><a href="${r}#solucoes" data-i18n="nav.solutions">Soluções</a></li></ul></div>
    <div><h4 data-i18n="nav.tech">Tecnologia</h4><ul><li><a href="${ROOT}tecnologia-chorume.html" data-i18n="tp.tab1">Tratamento de Chorume</a></li><li><a href="${ROOT}tecnologia-inertizacao.html" data-i18n="tp.tab2">Inertização de Lodos</a></li><li><a href="${ROOT}tecnologia-cdr.html" data-i18n="tp.tab3">CDR de Alta Performance</a></li><li><a href="${ROOT}tecnologia-pos.html" data-i18n="tp.tab4">Oxidação Seletiva (POS)</a></li><li><a href="${ROOT}tecnologia.html" data-i18n="tp.all">Ver todas as tecnologias →</a></li></ul></div>
    <div><h4 data-i18n="nav.areas">Áreas de atuação</h4><ul><li><a href="${ROOT}area.html?eixo=amb" data-i18n="ax.amb">Engenharia Ambiental</a></li><li><a href="${ROOT}area.html?eixo=proc" data-i18n="ax.proc">Engenharia de Processos</a></li><li><a href="${ROOT}area.html?eixo=res" data-i18n="ax.res">Tratamento de Resíduos e Efluentes</a></li><li><a href="${ROOT}area.html?eixo=dig" data-i18n="ax.dig">Engenharia Digital e IA</a></li><li><a href="${ROOT}area.html?eixo=mod" data-i18n="ax.mod">Modelagem e Otimização</a></li></ul></div>
    <div><h4 data-i18n="nav.contact">Contato</h4><ul><li><a href="${r}#contato" data-i18n="cta.specialist">Fale com um especialista</a></li><li><a href="#" data-i18n="ft.privacy">Política de privacidade</a></li><li><a href="#" data-i18n="ft.cookies">Declaração de cookies</a></li></ul></div>
  </div>
  <div class="legal"><span data-i18n="ft.copy">© 2026 GETA – Grupo de Especialistas em Tecnologias Ambientais.</span><span data-i18n="ft.photos">Fotos: Pexels</span></div>
</div></footer>`);
    const header = $('#header');
    const onScroll = () => header.classList.toggle('scrolled', scrollY > 40);
    addEventListener('scroll', onScroll); onScroll();
    $('#burger').onclick = () => header.classList.toggle('menu-open');
    $$('.nav a:not(.mega-toggle)', header).forEach(a => a.addEventListener('click', () => header.classList.remove('menu-open')));
    if (window.GETAMenu) GETAMenu.init(ROOT);
  }

  /* ---------- cases/<slug>.html ---------- */
  let cur = null;
  const ptBlock = el => $(':scope > [data-l="pt"]', el) || el;
  const onlyTbd = el => [...el.children].every(ch => ch.classList.contains('tbd') || ch.classList.contains('ptonly'));

  // Marca o que ainda está vazio (com status "publicado" isso some da página)
  function markEmpty() {
    $$('.cs-sec').forEach(sec => {
      const body = $('.cs-body', sec);
      const hasTags = $('.cs-tags li', sec);
      sec.classList.toggle('vazia', !!body && onlyTbd(ptBlock(body)) && !hasTags);
    });
    $$('.cs-facts dl > div').forEach(d => { const v = ($('dd', d) || {}).textContent || ''; d.classList.toggle('vazia', !v.trim() || v.trim() === '—'); });
    const k = $('.cs-kpis'); if (k) k.classList.toggle('vazia', $$('.kpi', k).every(x => x.classList.contains('tbd')));
    const g = $('.cs-gallery'); if (g) g.classList.toggle('vazia', $$('.gal figure', g).every(f => $('.tbd', f)));
  }

  // Mostra o bloco do idioma atual (data-l="pt|en|es"); se faltar, usa o português
  function langBlocks(lang) {
    const groups = new Set($$('[data-l]').map(e => e.parentElement));
    groups.forEach(p => {
      const blocks = $$(':scope > [data-l]', p);
      const show = blocks.find(b => b.dataset.l === lang) || blocks.find(b => b.dataset.l === 'pt') || blocks[0];
      blocks.forEach(b => { b.hidden = b !== show; });
      const old = $(':scope > .ptonly', p); if (old) old.remove();
      if (lang !== 'pt' && show.dataset.l === 'pt' && p.classList.contains('cs-body') && !onlyTbd(show)) {
        p.insertAdjacentHTML('afterbegin', `<span class="ptonly">${t('cs.ptonly')}</span>`);
      }
    });
    $$('.tbd').forEach(e => e.setAttribute('data-label', t('cs.tbd')));
  }

  function renderCase() {
    const c = CASES[cur], lang = I18N.lang;
    document.title = pick(c.titulo).replace(/<[^>]+>/g, '') + ' | GETA';
    const md = $('meta[name="description"]'); if (md) md.setAttribute('content', pick(c.resumo));
    const ax0 = c.eixos[0];
    $('#cs-hero').innerHTML = `
<section class="cs-hero on-dark"><div class="bg" style="background-image:url('${ROOT + c.capa}')"></div><div class="wrap">
  <nav class="crumb" aria-label="breadcrumb"><a href="${ROOT}index.html">GETA</a><span>/</span><a href="${ROOT}index.html#solucoes">${t('nav.solutions')}</a></nav>
  <h1>${pick(c.titulo)}</h1>
  <p>${pick(c.resumo)}</p>
  <div class="cs-meta">${c.cliente ? `<span>${t('cs.client')}: <b>${c.cliente}</b></span>` : ''}${c.ano ? `<span>${t('cs.year')}: <b>${c.ano}</b></span>` : ''}${isDraft(c) ? `<span class="badge">${t('pf.draft')}</span>` : ''}</div>
</div></section>
${isDraft(c) ? `<div class="cs-banner"><div class="wrap"><span>${t('cs.banner')}</span></div></div>` : ''}`;

    // Cliente e ano vêm do registro
    const dl = $('.cs-facts dl');
    if (dl) {
      $$('[data-auto]', dl).forEach(e => e.remove());
      const rows = [[t('cs.client'), c.cliente], [t('cs.year'), c.ano]].filter(r => r[1]);
      dl.insertAdjacentHTML('afterbegin', rows.map(r => `<div data-auto><dt>${r[0]}</dt><dd>${r[1]}</dd></div>`).join(''));
    }
    langBlocks(lang);

    // Sumário lateral
    const secs = $$('.cs-sec').filter(s => getComputedStyle(s).display !== 'none');
    $('#cs-toc').innerHTML = `<h4>${t('cs.toc')}</h4><ol>${secs.map((s, i) => `<li><a href="#${s.id}"><i>${String(i + 1).padStart(2, '0')}</i><span>${$('h2', s).textContent}</span></a></li>`).join('')}</ol>`;
    spy(secs);

    // Anterior / próximo / relacionados
    const prev = CASES[(cur - 1 + CASES.length) % CASES.length], next = CASES[(cur + 1) % CASES.length];
    const others = CASES.filter(x => x !== c);
    const rel = others.filter(x => x.eixos.includes(ax0)).concat(others.filter(x => !x.eixos.includes(ax0) && x.eixos.some(a => c.eixos.includes(a)))).slice(0, 3);
    $('#cs-more').innerHTML = `<div class="wrap">
  <div class="pn"><a href="${caseURL(prev)}"><small>← ${t('cs.prev')}</small><b>${pick(prev.titulo)}</b></a><a class="nx" href="${caseURL(next)}"><small>${t('cs.next')} →</small><b>${pick(next.titulo)}</b></a></div>
  <h2>${t('cs.related')}</h2>
  <div class="pgrid">${rel.map(card).join('')}</div>
  <a class="backlink" href="${ROOT}index.html#solucoes">${t('cs.back')}</a>
</div>`;
  }

  let spyObs = null;
  function spy(secs) {
    if (spyObs) spyObs.disconnect();
    const links = $$('#cs-toc a');
    spyObs = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) links.forEach(a => a.classList.toggle('on', a.getAttribute('href') === '#' + e.target.id));
    }), { rootMargin: '-35% 0px -60% 0px' });
    secs.forEach(s => spyObs.observe(s));
  }

  /* ---------- area.html?eixo=<código> ---------- */
  function renderArea() {
    const A = window.GETA_AREAS || {};
    let ax = new URL(location.href).searchParams.get('eixo');
    if (!A[ax]) ax = 'amb';
    const a = A[ax], L = I18N.lang;
    const name = t('ax.' + ax);
    document.title = name.replace(/&amp;/g, '&') + ' | GETA';
    const md = $('meta[name="description"]'); if (md) md.setAttribute('content', pick(a.lead));
    // Cases da área: primeiro os que têm esta área como eixo principal
    const list = CASES.filter(c => c.eixos.includes(ax)).sort((x, y) => (x.eixos[0] === ax ? 0 : 1) - (y.eixos[0] === ax ? 0 : 1));
    const serv = a.servicos[L] || a.servicos.pt;
    $('#area').innerHTML = `
<section class="cs-hero on-dark ar-hero"><div class="bg" style="background-image:url('${ROOT + a.capa}')"></div><div class="wrap">
  <nav class="crumb" aria-label="breadcrumb"><a href="${ROOT}index.html">GETA</a><span>/</span><span>${t('nav.areas')}</span></nav>
  <span class="eyebrow">${t('ar.eyebrow')}</span>
  <h1>${name}</h1>
  <p>${pick(a.lead)}</p>
  <div class="cs-meta"><a class="btn" href="#ar-cases">${t('ar.seecases')}</a><span><b>${list.length}</b> ${t('ar.count')}</span></div>
</div></section>
<section class="ar-intro"><div class="wrap ar-grid">
  <div class="ar-card"><span class="eyebrow">${t('ar.what')}</span><h2>${t('ar.what.t')}</h2><p>${pick(a.oque)}</p>
    <ul class="ar-list">${serv.map(x => `<li>${x}</li>`).join('')}</ul></div>
  <div class="ar-card ar-why"><span class="eyebrow">${t('ar.why')}</span><h2>${t('ar.why.t')}</h2><p>${pick(a.porque)}</p></div>
</div></section>
<section class="cs-more ar-cases" id="ar-cases"><div class="wrap">
  <div class="head"><span class="eyebrow">${t('ar.cases')}</span><h2>${t('ar.cases.t')}</h2></div>
  <div class="pgrid">${list.map(card).join('')}</div>
  <h3 class="ar-others-t">${t('ar.others')}</h3>
  <div class="ar-others">${AXES.filter(x => x !== ax).map(x => `<a class="ax ax-${x}" href="${ROOT}area.html?eixo=${x}">${t('ax.' + x)}</a>`).join('')}</div>
</div></section>`;
  }

  /* ---------- Início ---------- */
  chrome();
  if (PAGE === 'case') {
    cur = CASES.findIndex(c => c.slug === B.dataset.case);
    if (cur < 0) { console.warn('Case não encontrado em cases/cases.js:', B.dataset.case); }
    else {
      B.dataset.status = CASES[cur].status || 'rascunho';
      // Etiquetas de tecnologia (seção 06) vêm do registro
      const tags = $('.cs-tags[data-from="tags"]');
      if (tags) tags.innerHTML = (CASES[cur].tags || []).map(x => `<li>${x}</li>`).join('');
      markEmpty();
      I18N.onChange(renderCase);
    }
  }
  if (PAGE === 'area') I18N.onChange(renderArea);
  $$('[data-cases-count]').forEach(e => { e.textContent = CASES.length; });
  I18N.init();

  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .12 });
  $$('.reveal').forEach(el => io.observe(el));
})();
