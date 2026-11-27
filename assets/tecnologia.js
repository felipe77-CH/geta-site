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

  // Carrossel de mapas (bloco "O chorume no Brasil"): a imagem e o texto passam juntos
  $$('[data-slides]').forEach(box => {
    const imgs = $$('.tp-mapas-fig img', box), txts = $$('.tp-mapas-txt article', box), dots = $$('.tp-dots button', box), legs = $$('.tp-mapas-leg .leg', box);
    if (imgs.length < 2) return;
    const calmo = matchMedia('(prefers-reduced-motion: reduce)').matches;
    let i = 0, timer = null;
    const go = n => {
      i = (n + imgs.length) % imgs.length;
      [imgs, txts, dots, legs].forEach(list => list.forEach((el, k) => el.classList.toggle('on', k === i)));
      dots.forEach((d, k) => d.setAttribute('aria-current', k === i ? 'true' : 'false'));
    };
    const play = () => { clearInterval(timer); if (!calmo) timer = setInterval(() => go(i + 1), 8000); };
    const stop = () => clearInterval(timer);
    box.querySelector('.tp-prev').addEventListener('click', () => { go(i - 1); play(); });
    box.querySelector('.tp-next').addEventListener('click', () => { go(i + 1); play(); });
    dots.forEach((d, k) => d.addEventListener('click', () => { go(k); play(); }));
    box.addEventListener('mouseenter', stop);
    box.addEventListener('mouseleave', play);
    box.addEventListener('focusin', stop);
    go(0); play();
  });

  // Vídeo explicativo: o botão grande dá o play e libera os controles do vídeo
  $$('.tp-video-box').forEach(box => {
    const v = box.querySelector('video'), b = box.querySelector('.tp-play');
    if (!v || !b) return;
    b.addEventListener('click', () => { box.classList.add('playing'); v.controls = true; v.play().catch(() => {}); v.focus(); });
    v.addEventListener('ended', () => { box.classList.remove('playing'); v.controls = false; v.load(); });
  });

  // ===== Case de sucesso (Fazenda Rio Grande) =====
  $$('.cx').forEach(cx => {
    const calmo = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const fmt = n => n.toLocaleString(window.I18N && I18N.lang === 'en' ? 'en-US' : 'pt-BR');
    // ao trocar de idioma, os números já contados mudam o separador (1.000 / 1,000)
    if (window.I18N) I18N.onChange(() => $$('[data-count]', cx).forEach(el => { if (el.dataset.ok) el.textContent = fmt(+el.dataset.count); }));

    // Números que contam ao aparecer na tela
    const cio = new IntersectionObserver(es => es.forEach(e => {
      if (!e.isIntersecting) return;
      cio.unobserve(e.target);
      const el = e.target, fim = +el.dataset.count;
      if (calmo) { el.textContent = fmt(fim); el.dataset.ok = '1'; return; }
      const t0 = performance.now(), dur = 1800;
      const passo = t => {
        const p = Math.min(1, (t - t0) / dur);
        el.textContent = fmt(Math.round(fim * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(passo); else el.dataset.ok = '1';
      };
      el.textContent = '0'; requestAnimationFrame(passo);
    }), { threshold: 0.5 });
    $$('[data-count]', cx).forEach(el => cio.observe(el));

    // Vídeos: tocam quando aparecem e pausam fora da tela
    const vio = new IntersectionObserver(es => es.forEach(e => {
      const v = e.target;
      if (e.isIntersecting && !calmo) v.play().catch(() => {}); else v.pause();
    }), { threshold: 0.3 });
    $$('video', cx).forEach(v => { vio.observe(v); if (calmo) v.controls = true; });

    // Galeria: foto ampliada com setas e teclado
    const lb = cx.querySelector('.cx-lb'), itens = $$('.cx-gal button', cx);
    if (lb && itens.length) {
      const img = lb.querySelector('img'), cap = lb.querySelector('figcaption');
      let j = 0;
      const mostra = n => { j = (n + itens.length) % itens.length; img.src = itens[j].dataset.full; img.alt = itens[j].dataset.cap; cap.textContent = itens[j].dataset.cap; };
      const abre = n => { mostra(n); lb.hidden = false; document.body.style.overflow = 'hidden'; lb.querySelector('.cx-lb-x').focus(); };
      const fecha = () => { lb.hidden = true; document.body.style.overflow = ''; itens[j].focus(); };
      itens.forEach((b, k) => b.addEventListener('click', () => abre(k)));
      lb.querySelector('.cx-lb-x').addEventListener('click', fecha);
      lb.querySelector('.cx-lb-prev').addEventListener('click', () => mostra(j - 1));
      lb.querySelector('.cx-lb-next').addEventListener('click', () => mostra(j + 1));
      lb.addEventListener('click', e => { if (e.target === lb) fecha(); });
      document.addEventListener('keydown', e => {
        if (lb.hidden) return;
        if (e.key === 'Escape') fecha();
        if (e.key === 'ArrowLeft') mostra(j - 1);
        if (e.key === 'ArrowRight') mostra(j + 1);
      });
    }
  });

  // Faixa de cases: anda sozinha, para com o mouse em cima, tem setas e pode ser arrastada
  function faixa(box, lang) {
    const ARIA = { pt: ['Case anterior', 'Próximo case'], en: ['Previous case', 'Next case'], es: ['Caso anterior', 'Caso siguiente'] }[lang] || ['‹', '›'];
    let S = box._mq;
    if (!S) {
      S = box._mq = { x: 0, alvo: null, pausa: false, drag: null, last: 0 };
      const wrap = document.createElement('div'); wrap.className = 'mq-wrap';
      box.parentNode.insertBefore(wrap, box); wrap.appendChild(box);
      S.prev = Object.assign(document.createElement('button'), { type: 'button', className: 'mq-btn mq-prev', textContent: '‹' });
      S.next = Object.assign(document.createElement('button'), { type: 'button', className: 'mq-btn mq-next', textContent: '›' });
      wrap.append(S.prev, S.next);
      const passo = () => { const c = box.querySelector('.mq-card'); return c ? c.offsetWidth + parseFloat(getComputedStyle(c).marginRight) : 360; };
      const vai = dir => { S.alvo = (S.alvo !== null ? S.alvo : S.x) - dir * passo(); };
      S.prev.addEventListener('click', () => vai(-1));
      S.next.addEventListener('click', () => vai(1));
      wrap.addEventListener('mouseenter', () => { S.pausa = true; });
      wrap.addEventListener('mouseleave', () => { S.pausa = false; });
      box.addEventListener('focusin', () => { S.pausa = true; });
      box.addEventListener('focusout', () => { S.pausa = false; });
      // arrastar com o dedo ou o mouse
      box.addEventListener('pointerdown', e => { S.drag = { x0: e.clientX, base: S.x, moveu: false, id: e.pointerId }; S.alvo = null; });
      box.addEventListener('pointermove', e => {
        if (!S.drag) return;
        const dx = e.clientX - S.drag.x0;
        if (!S.drag.moveu && Math.abs(dx) > 6) { S.drag.moveu = true; box.classList.add('arrasta'); box.setPointerCapture(S.drag.id); }
        if (S.drag.moveu) S.x = S.drag.base + dx;
      });
      const solta = () => { if (S.drag && S.drag.moveu) setTimeout(() => box.classList.remove('arrasta'), 0); S.drag = null; };
      box.addEventListener('pointerup', solta);
      box.addEventListener('pointercancel', solta);
      const calmo = matchMedia('(prefers-reduced-motion: reduce)').matches;
      const VEL = 38; // px por segundo
      const tick = t => {
        const dt = Math.min(64, t - (S.last || t)); S.last = t;
        const track = box.querySelector('.mq-track');
        if (track) {
          if (S.alvo !== null) { const d = S.alvo - S.x; S.x += d * Math.min(1, dt / 110); if (Math.abs(d) < 0.5) { S.x = S.alvo; S.alvo = null; } }
          else if (!S.pausa && !S.drag && !calmo) S.x -= VEL * dt / 1000;
          const meio = track.scrollWidth / 2;
          if (meio) {
            while (S.x <= -meio) { S.x += meio; if (S.alvo !== null) S.alvo += meio; if (S.drag) S.drag.base += meio; }
            while (S.x > 0) { S.x -= meio; if (S.alvo !== null) S.alvo -= meio; if (S.drag) S.drag.base -= meio; }
          }
          track.style.transform = `translateX(${S.x}px)`;
        }
        requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }
    S.prev.setAttribute('aria-label', ARIA[0]);
    S.next.setAttribute('aria-label', ARIA[1]);
  }

  const CASES = window.GETA_CASES || [];
  function cases() {
    const L = I18N.lang, pick = o => (!o ? '' : (o[L] || o.pt || ''));
    $$('[data-cases]').forEach(box => {
      const list = box.dataset.cases.split(',')
        .map(s => CASES.find(c => c.slug === s.trim()))
        .filter(c => c && c.status === 'publicado');
      if (box.classList.contains('tp-marquee')) {
        // Faixa que corre na horizontal: a lista é repetida para o movimento não ter emenda
        const card = c => `<a class="mq-card" href="${ROOT}cases/${c.slug}.html"><img src="${ROOT + c.capa}" alt="" loading="lazy"><span>${pick(c.titulo)}</span></a>`;
        let row = list.map(card).join('');
        while (list.length && row.split('mq-card').length - 1 < 8) row += list.map(card).join('');
        box.innerHTML = list.length ? `<div class="mq-track">${row}${row.replace(/<a /g, '<a tabindex="-1" aria-hidden="true" ')}</div>` : '';
        const strip = box.closest('.tp-strip'); if (strip) strip.hidden = !list.length;
        if (list.length) faixa(box, L);
        return;
      }
      box.innerHTML = list.map(c => `<a class="pcard" href="${ROOT}cases/${c.slug}.html"><div class="thumb" style="background-image:url('${ROOT + c.capa}')"></div><div class="b"><h3>${pick(c.titulo)}</h3><p>${pick(c.resumo)}</p><span class="more">${I18N.t('pf.read')}</span></div></a>`).join('');
      const blk = box.closest('.tp-block'); if (blk) blk.classList.toggle('vazia', !list.length);
    });
  }
  if (window.I18N) { I18N.onChange(cases); cases(); }
})();
