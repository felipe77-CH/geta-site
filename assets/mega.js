/* =====================================================================
   GETA – Menus do cabeçalho ("A GETA", "Áreas de atuação", "Tecnologia")
   - Computador (mouse): os submenus abrem ao passar o mouse; o clique no
     botão leva à página (Quem somos, seção Áreas, página de Tecnologias).
   - Celular / tela de toque: o clique no botão abre e fecha o submenu.
   - Ao escolher uma opção, o submenu se fecha mesmo com o mouse em cima,
     e ao carregar uma página nenhum submenu abre sozinho até o mouse mexer.
   Áreas: cada uma abre area.html?eixo=<código>.
   Tecnologias: cada uma abre tecnologia-<id>.html.
   Uso: GETAMenu.init('') na home ou GETAMenu.init('../') em cases/.
   ===================================================================== */
(function () {
  'use strict';

  // Página velha no cache do navegador (o GitHub Pages deixa guardar por até 10 min)?
  // Compara a versão desta página (?v= deste script) com version.txt, pedido sempre
  // sem cache. Se já houver uma versão nova publicada, recarrega a página uma vez.
  (function () {
    const me = document.currentScript;
    const mine = me && (me.src.match(/[?&]v=(\w+)/) || [])[1];
    if (!mine || !window.fetch || location.protocol === 'file:') return;
    fetch(new URL('../version.txt', me.src), { cache: 'no-store' })
      .then(r => (r.ok ? r.text() : ''))
      .then(t => {
        const live = t.trim();
        if (!/^\w+$/.test(live) || live === mine) return;
        const key = 'geta-reload-' + live;   // evita recarregar mais de uma vez
        try { if (sessionStorage.getItem(key)) return; sessionStorage.setItem(key, '1'); } catch (e) { return; }
        location.reload();
      })
      .catch(() => {});
  })();

  const AXES = ['amb', 'proc', 'res', 'dig', 'mod'];
  // Tecnologias GETA (ordem do menu = chaves tp.tab1 … tp.tab4 em i18n.js)
  const TECHS = ['chorume', 'inertizacao', 'cdr', 'pos'];
  const DESKTOP = matchMedia('(hover: hover) and (min-width: 1101px)');
  const html = document.documentElement;

  // Ao carregar a página, o mouse parado sobre o menu não abre submenus
  html.classList.add('menu-rest');
  addEventListener('mousemove', () => html.classList.remove('menu-rest'), { once: true });

  function init(root) {
    root = root || '';
    const lis = [];

    document.querySelectorAll('[data-mega]').forEach(box => {
      const li = box.closest('li');
      const toggle = li.querySelector('.mega-toggle');
      lis.push(li);

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
        // No computador o submenu é por hover: o clique segue o link do botão
        if (DESKTOP.matches) { closeAll(); return; }
        e.preventDefault();
        const open = !li.classList.contains('open');
        closeAll();
        li.classList.toggle('open', open);
        toggle.setAttribute('aria-expanded', open);
      });
    });

    function closeAll() {
      lis.forEach(li => {
        li.classList.remove('open');
        const tg = li.querySelector('.mega-toggle'); if (tg) tg.setAttribute('aria-expanded', 'false');
      });
    }

    // Todos os itens do menu (inclusive "A GETA", que só tem hover)
    document.querySelectorAll('.nav > li').forEach(li => {
      li.addEventListener('click', e => {
        if (!e.target.closest('.dropdown a, .mega a')) return;
        // Opção escolhida: fecha o submenu e o menu do celular
        closeAll();
        li.classList.add('closing');
        document.getElementById('header')?.classList.remove('menu-open');
      });
      li.addEventListener('mouseleave', () => li.classList.remove('closing'));
    });

    document.addEventListener('click', e => { if (!lis.some(li => li.contains(e.target))) closeAll(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeAll(); });
    // Ao trocar entre tela larga e estreita, nada fica aberto
    DESKTOP.addEventListener('change', closeAll);
  }

  window.GETAMenu = { init };
})();
