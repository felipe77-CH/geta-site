/* =====================================================================
   GETA – Páginas de tecnologia (tecnologia.html e tecnologia-<id>.html)
   - Esconde as partes ainda vazias (class="tbd"); com ?editar=1 elas
     aparecem marcadas, para saber o que falta preencher.
   - Monta "Cases relacionados" a partir de data-cases="slug1,slug2"
     (só os cases publicados em cases/cases.js).
   Carregar depois de assets/portfolio.js.
   ===================================================================== */
(function () {
  'use strict';
  const $$ = (s, el) => [...(el || document).querySelectorAll(s)];
  const B = document.body;
  const ROOT = B.dataset.root || '';

  if (new URL(location.href).searchParams.has('editar')) B.classList.add('editar');

  $$('.tp-block').forEach(b => {
    const kids = [...b.children].filter(c => c.tagName !== 'H3');
    const vazio = kids.every(c => c.classList.contains('tbd') ||
      (c.classList.contains('tp-gal') && [...c.children].every(x => x.classList.contains('tbd'))));
    b.classList.toggle('vazia', vazio && !b.querySelector('[data-cases]'));
  });
  $$('.tp-kpis').forEach(k => k.classList.toggle('vazia', $$('.kpi', k).every(x => x.classList.contains('tbd'))));
  $$('.tp-badges').forEach(k => k.classList.toggle('vazia', [...k.children].every(x => x.classList.contains('tbd'))));

  const CASES = window.GETA_CASES || [];
  function cases() {
    const L = I18N.lang, pick = o => (!o ? '' : (o[L] || o.pt || ''));
    $$('[data-cases]').forEach(box => {
      const list = box.dataset.cases.split(',')
        .map(s => CASES.find(c => c.slug === s.trim()))
        .filter(c => c && c.status === 'publicado');
      box.innerHTML = list.map(c => `<a class="pcard" href="${ROOT}cases/${c.slug}.html"><div class="thumb" style="background-image:url('${ROOT + c.capa}')"></div><div class="b"><h3>${pick(c.titulo)}</h3><p>${pick(c.resumo)}</p><span class="more">${I18N.t('pf.read')}</span></div></a>`).join('');
      const blk = box.closest('.tp-block'); if (blk) blk.classList.toggle('vazia', !list.length);
    });
  }
  if (window.I18N) { I18N.onChange(cases); cases(); }
})();
