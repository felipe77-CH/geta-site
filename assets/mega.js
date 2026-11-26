/* =====================================================================
   GETA – Menu "Áreas de atuação"
   Ao clicar, mostra as 6 áreas. Cada uma abre area.html?eixo=<código>
   (o que fazemos, por que fazemos e cases principais).
   Uso: GETAMenu.init('') na home ou GETAMenu.init('../') em cases/.
   ===================================================================== */
(function () {
  'use strict';
  const AXES = ['amb', 'proc', 'res', 'dig', 'mod'];
  // Tecnologias GETA (ordem do menu = chaves tp.tab1 … tp.tab4 em i18n.js)
  const TECHS = ['chorume', 'inertizacao', 'cdr', 'pos'];

  function init(root) {
    root = root || '';
    document.querySelectorAll('[data-mega]').forEach(box => {
      const li = box.closest('li');
      const toggle = li.querySelector('.mega-toggle');
      const close = () => { li.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); };

      function render() {
        const t = k => I18N.t(k);
        if (box.dataset.mega === 'tech') {
          // Menu "Tecnologia": cada tecnologia abre a sua própria página
          box.innerHTML = `<div class="mega-in">${TECHS.map((id, i) =>
            `<a class="mega-cat" href="${root}tecnologia-${id}.html">${t('tp.tab' + (i + 1))}</a>`).join('')}
            <a class="mega-cat mega-all" href="${root}tecnologia.html">${t('tp.all')}</a></div>`;
          return;
        }
        box.innerHTML = `<div class="mega-in">${AXES.map(a =>
          `<a class="mega-cat" href="${root}area.html?eixo=${a}">${t('ax.' + a)}</a>`).join('')}</div>`;
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
