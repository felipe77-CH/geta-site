/* =====================================================================
   GETA – Menu "Áreas de atuação"
   Ao clicar, mostra as categorias (eixos) com os estudos de caso de cada
   uma. A categoria abre area.html?eixo=<código> (o que fazemos, por que
   fazemos e cases principais). Gerado a partir de cases/cases.js: cada case aparece na categoria
   do seu eixo principal (o primeiro da lista "eixos").
   Uso: GETAMenu.init('') na home ou GETAMenu.init('../') em cases/.
   ===================================================================== */
(function () {
  'use strict';
  const AXES = ['amb', 'proc', 'res', 'dig', 'mod', 'rd'];

  function init(root) {
    root = root || '';
    const home = root + 'index.html';
    document.querySelectorAll('[data-mega]').forEach(box => {
      const li = box.closest('li');
      const toggle = li.querySelector('.mega-toggle');
      const close = () => { li.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); };

      function render(lang) {
        const C = window.GETA_CASES || [];
        const t = k => I18N.t(k);
        box.innerHTML = `<div class="mega-in">
  <div class="mega-head"><h4>${t('nav.areas')}</h4><p>${t('mega.text')}</p><a class="mega-all" href="${home}#solucoes">${t('mega.all')}</a></div>
  <div class="mega-grid">${AXES.map(a => {
    const list = C.filter(c => c.eixos[0] === a);
    const total = C.filter(c => c.eixos.includes(a)).length;
    return `<div class="mega-col ax-${a}">
      <a class="mega-cat" data-f="${a}" href="${root}area.html?eixo=${a}"><span class="dot"></span><span>${t('ax.' + a)}</span><small>${total}</small></a>
      <ul>${list.map(c => `<li><a href="${root}cases/${c.slug}.html">${c.titulo[lang] || c.titulo.pt}</a></li>`).join('')}</ul>
    </div>`;
  }).join('')}</div>
</div>`;
      }
      I18N.onChange(render);

      toggle.addEventListener('click', e => {
        e.preventDefault();
        const open = li.classList.toggle('open');
        toggle.setAttribute('aria-expanded', open);
      });
      box.addEventListener('click', e => {
        if (e.target.closest('a')) { close(); document.getElementById('header')?.classList.remove('menu-open'); }
      });
      document.addEventListener('click', e => { if (!li.contains(e.target)) close(); });
      document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
    });
  }

  window.GETAMenu = { init };
})();
