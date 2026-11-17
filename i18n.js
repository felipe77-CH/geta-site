/* Traduções do site GETA.
   O português é o idioma base: é lido do próprio HTML (atributos data-i18n).
   Aqui ficam apenas inglês (en) e espanhol (es), mais algumas chaves que não
   existem no HTML (pt extra). Para editar um texto, procure a chave aqui. */
(function () {
  const extraPT = {
    'meta.title': 'GETA | Tecnologias Ambientais',
    'meta.desc': 'GETA – Grupo de Especialistas em Tecnologias Ambientais. Inovação a serviço da sustentabilidade.',
    'form.sent': 'Mensagem enviada ✓'
  };

  const dict = {
    en: {
      'meta.title': 'GETA | Environmental Technologies',
      'meta.desc': 'GETA – Group of Specialists in Environmental Technologies. Innovation at the service of sustainability.',
      'brand.text': 'Group of Specialists in Environmental Technologies',
      'nav.about': 'About GETA',
      'nav.who': 'Who we are',
      'nav.how': 'How we work',
      'nav.diff': 'Technological edge',
      'nav.areas': 'Areas of expertise',
      'nav.solutions': 'Solutions',
      'nav.tech': 'Technology',
      'nav.contact': 'Contact',
      'nav.talk': 'Contact us',
      'cta.specialist': 'Talk to a specialist',
      'area.1': 'Environmental Engineering',
      'area.2': 'Wastewater Treatment',
      'area.3': 'Remote Analysis',
      'area.4': 'Sanitation Plants',
      'area.5': 'Engineering & Innovation',
      'aria.menu': 'Open menu',
      'aria.prev': 'Previous slide',
      'aria.next': 'Next slide',
      'aria.lab': 'Engineering laboratory',
      'hero1.title': 'Innovation at the service of <mark>sustainability</mark>',
      'hero1.text': 'Engineering, treatment and environmental monitoring solutions for companies and public agencies.',
      'hero1.cta': 'Explore our expertise',
      'hero2.title': 'Complex effluents, <mark>controlled</mark> results',
      'hero2.text': 'Design and supervision of systems with efficiency, operational control and emission reduction.',
      'hero2.cta': 'See solutions',
      'hero3.eyebrow': 'Artificial Intelligence',
      'hero3.title': 'Continuous and <mark>predictive</mark> monitoring',
      'hero3.text': 'Remote sensing and AI building models and dashboards to assess environmental quality in real time.',
      'hero3.cta': 'Our edge',
      'stat.1': 'integrated areas of expertise',
      'stat.2': 'GETA exclusive technologies',
      'stat.3b': 'AI',
      'stat.3': 'continuous and predictive monitoring',
      'stat.4': 'from diagnosis to supervision',
      'areas.title': 'Where GETA turns environmental challenges into solutions',
      'areas.text': 'Technical expertise, tailored solutions and Artificial Intelligence at every stage.',
      'area.1.text': 'Diagnosis, design and supervision of environmental solutions that ensure legal compliance, operational efficiency and the protection of the environment and public health.',
      'area.2.text': 'Complex liquid effluents and landfill leachate: physicochemical technology route selection, detailed design and operational supervision.',
      'area.3.text': 'Online remote sensing and AI to continuously assess the quality of air, surface water and nearby effluents.',
      'area.4.text': 'Design, optimization and supervision of treatment stations and sanitation plants, focused on performance and emission reduction.',
      'area.5.text': 'Chemical and biochemical engineering applied to developing proprietary technologies for challenges without conventional solutions.',
      'more': 'Learn more →',
      'cycle.1': 'Diagnosis',
      'cycle.2': 'Technology route',
      'cycle.3': 'Detailed design',
      'cycle.4': 'Implementation',
      'cycle.5': 'Operational supervision',
      'cycle.6': 'AI monitoring',
      'about.title': 'A strategic partner in environmental management',
      'about.p1': 'GETA positions itself as a strategic partner for companies and public agencies seeking excellence in environmental management.',
      'about.quote': 'Our combination of technical expertise, tailored solutions and the use of Artificial Intelligence allows us to deliver results that ensure legal compliance, operational efficiency and, above all, the protection of the environment and public health.',
      'about.tagline': 'GETA: <em>Innovation at the Service of Sustainability</em>',
      'tech.title': 'Chemical/Biochemical Engineering and AI',
      'tech.text': 'Exclusive tools and proprietary technology routes for the most complex challenges.',
      'mon.title': 'Continuous and predictive monitoring',
      'mon.text': 'Exclusive tools that use AI and remote sensing data (online) to build mathematical and statistical models (dashboards) for continuous assessment of environmental quality.',
      'mon.li1': 'Air and surface water quality',
      'mon.li2': 'Monitoring of nearby effluents',
      'mon.li3': 'Airborne pollutants in indoor environments',
      'excl.title': 'GETA exclusive technologies',
      't1.title': 'Leachate Treatment',
      't1.text': 'Advanced physicochemical processes with no reliance on biological systems.',
      't2.title': 'Sludge Dewatering and Inertization',
      't2.text': 'Technology route based on chemical encapsulation reactions of metals.',
      't3.title': 'Vinasse Pre-digestion',
      't3.text': 'Increased biodegradability for higher biomethane generation.',
      't4.title': 'High-Performance RDF',
      't4.text': 'High calorific value and low moisture in refuse-derived fuel.',
      'sol.eyebrow': 'Fields of work and solutions',
      'sol.title': 'Solutions for every environmental challenge',
      'sol.filter': 'Filter by area',
      'sol.all': 'All',
      'tag.efl': 'Effluents',
      'tag.air': 'Air',
      'tag.sludge': 'Sludge',
      'tag.waste': 'Waste',
      'tag.bio': 'Bioenergy',
      'tag.inno': 'Innovation',
      'tag.san': 'Sanitation',
      'c1.title': 'Complex Liquid Effluents',
      'c1.text': 'Design and supervision of systems with efficiency, operational control and emission reduction.',
      'c2.title': 'Leachate Treatment',
      'c2.text': 'Physicochemical technology route selection, detailed design and operational supervision.',
      'c3.title': 'Odorous Gases and Air Pollutants',
      'c3.text': 'Collection and treatment systems for industrial gaseous emissions.',
      'c4.text': 'Innovative solutions for industrial sludge without conventional technologies.',
      'c5.title': 'Municipal Solid Waste Valorization',
      'c5.text': 'Conversion into high-performance Refuse-Derived Fuel (RDF).',
      'c6.title': 'Use of Industrial By-products',
      'c6.text': 'Vinasse pre-digestion to increase biomethane production.',
      'c7.title': 'AI Remote Monitoring',
      'c7.text': 'Online sensing and predictive dashboards for air, water and effluent quality.',
      'c8.title': 'Custom Solutions',
      'c8.text': 'Development of technologies for emissions without conventional solutions.',
      'c9.title': 'Treatment Plants',
      'c9.text': 'Optimization and operational supervision of sanitation plants and wastewater treatment plants.',
      'ct.title': 'Want to know more? Talk to a GETA specialist',
      'ct.text': 'Tell us about your environmental challenge and our team will get back to you with the best technology route for your case.',
      'ct.li1': 'Serving companies and public agencies',
      'ct.li2': 'Technical diagnosis and technology route selection',
      'ct.li3': 'Detailed design and operational supervision',
      'form.title': 'Send us a message',
      'ph.name': 'Name',
      'ph.company': 'Company / Agency',
      'ph.email': 'Email',
      'ph.phone': 'Phone',
      'ph.msg': 'Describe your challenge',
      'form.area': 'Area of interest',
      'form.send': 'Send message',
      'form.sent': 'Message sent ✓',
      'ft.desc': 'Group of Specialists in Environmental Technologies.<br>Innovation at the Service of Sustainability.',
      'ft.privacy': 'Privacy policy',
      'ft.cookies': 'Cookie statement',
      'ft.copy': '© 2026 GETA – Group of Specialists in Environmental Technologies.',
      'ft.photos': 'Photos: Pexels',
      'cookie.text': 'We use cookies to improve your experience. By continuing, you agree to our Privacy Policy.',
      'cookie.ok': 'Accept',
      'cookie.no': 'Decline'
    },

    es: {
      'meta.title': 'GETA | Tecnologías Ambientales',
      'meta.desc': 'GETA – Grupo de Especialistas en Tecnologías Ambientales. Innovación al servicio de la sostenibilidad.',
      'brand.text': 'Grupo de Especialistas en Tecnologías Ambientales',
      'nav.about': 'La GETA',
      'nav.who': 'Quiénes somos',
      'nav.how': 'Cómo trabajamos',
      'nav.diff': 'Diferencial tecnológico',
      'nav.areas': 'Áreas de actuación',
      'nav.solutions': 'Soluciones',
      'nav.tech': 'Tecnología',
      'nav.contact': 'Contacto',
      'nav.talk': 'Contáctenos',
      'cta.specialist': 'Hable con un especialista',
      'area.1': 'Ingeniería Ambiental',
      'area.2': 'Tratamiento de Efluentes',
      'area.3': 'Análisis Remotos',
      'area.4': 'Plantas de Saneamiento',
      'area.5': 'Ingeniería e Innovación',
      'aria.menu': 'Abrir menú',
      'aria.prev': 'Diapositiva anterior',
      'aria.next': 'Diapositiva siguiente',
      'aria.lab': 'Laboratorio de ingeniería',
      'hero1.title': 'Innovación al servicio de la <mark>sostenibilidad</mark>',
      'hero1.text': 'Soluciones de ingeniería, tratamiento y monitoreo ambiental para empresas y organismos públicos.',
      'hero1.cta': 'Conozca nuestra actuación',
      'hero2.title': 'Efluentes complejos, <mark>resultados</mark> controlados',
      'hero2.text': 'Proyecto y supervisión de sistemas con eficiencia, control operacional y reducción de emisiones.',
      'hero2.cta': 'Ver soluciones',
      'hero3.eyebrow': 'Inteligencia Artificial',
      'hero3.title': 'Monitoreo continuo y <mark>predictivo</mark>',
      'hero3.text': 'Teledetección e IA generando modelos y dashboards para evaluar la calidad ambiental en tiempo real.',
      'hero3.cta': 'Nuestro diferencial',
      'stat.1': 'áreas de actuación integradas',
      'stat.2': 'tecnologías exclusivas GETA',
      'stat.3b': 'IA',
      'stat.3': 'monitoreo continuo y predictivo',
      'stat.4': 'del diagnóstico a la supervisión',
      'areas.title': 'Donde la GETA transforma desafíos ambientales en soluciones',
      'areas.text': 'Experiencia técnica, soluciones a medida e Inteligencia Artificial en cada etapa.',
      'area.1.text': 'Diagnóstico, proyecto y supervisión de soluciones ambientales que garantizan el cumplimiento legal, la eficiencia operacional y la protección del medio ambiente y de la salud pública.',
      'area.2.text': 'Efluentes líquidos complejos y lixiviados: selección de ruta tecnológica fisicoquímica, proyecto ejecutivo y supervisión operacional.',
      'area.3.text': 'Teledetección en línea e IA para evaluar de forma continua la calidad del aire, de las aguas superficiales y de efluentes adyacentes.',
      'area.4.text': 'Concepción, optimización y supervisión de estaciones y plantas de saneamiento, con foco en desempeño y reducción de emisiones.',
      'area.5.text': 'Ingeniería química y bioquímica aplicada al desarrollo de tecnologías propias para desafíos sin soluciones convencionales.',
      'more': 'Saber más →',
      'cycle.1': 'Diagnóstico',
      'cycle.2': 'Ruta tecnológica',
      'cycle.3': 'Proyecto ejecutivo',
      'cycle.4': 'Implantación',
      'cycle.5': 'Supervisión operacional',
      'cycle.6': 'Monitoreo con IA',
      'about.title': 'Socio estratégico en gestión ambiental',
      'about.p1': 'La GETA se posiciona como un socio estratégico para empresas y organismos públicos que buscan la excelencia en la gestión ambiental.',
      'about.quote': 'Nuestra combinación de experiencia técnica, soluciones a medida y el uso de Inteligencia Artificial nos permite entregar resultados que garantizan el cumplimiento legal, la eficiencia operacional y, sobre todo, la protección del medio ambiente y de la salud pública.',
      'about.tagline': 'GETA: <em>Innovación al Servicio de la Sostenibilidad</em>',
      'tech.title': 'Ingeniería Química/Bioquímica e IA',
      'tech.text': 'Herramientas exclusivas y rutas tecnológicas propias para los desafíos más complejos.',
      'mon.title': 'Monitoreo continuo y predictivo',
      'mon.text': 'Herramientas exclusivas que utilizan IA y datos de teledetección (en línea) para generar modelos matemáticos y estadísticos (dashboard) para la evaluación continua de la calidad ambiental.',
      'mon.li1': 'Calidad del aire y de aguas superficiales',
      'mon.li2': 'Monitoreo de efluentes adyacentes',
      'mon.li3': 'Contaminantes aéreos en ambientes interiores',
      'excl.title': 'Tecnologías exclusivas GETA',
      't1.title': 'Tratamiento de Lixiviados',
      't1.text': 'Procesos fisicoquímicos avanzados sin dependencia de sistemas biológicos.',
      't2.title': 'Deshidratación e Inertización de Lodos',
      't2.text': 'Ruta tecnológica basada en reacciones de encapsulamiento químico de metales.',
      't3.title': 'Predigestión de Vinaza',
      't3.text': 'Aumento de la biodegradabilidad para mayor generación de biometano.',
      't4.title': 'CDR de Alto Rendimiento',
      't4.text': 'Elevado poder calorífico y baja humedad en combustible derivado de residuos.',
      'sol.eyebrow': 'Campos de actuación y soluciones',
      'sol.title': 'Soluciones para cada desafío ambiental',
      'sol.filter': 'Filtrar por área',
      'sol.all': 'Todas',
      'tag.efl': 'Efluentes',
      'tag.air': 'Aire',
      'tag.sludge': 'Lodos',
      'tag.waste': 'Residuos',
      'tag.bio': 'Bioenergía',
      'tag.inno': 'Innovación',
      'tag.san': 'Saneamiento',
      'c1.title': 'Efluentes Líquidos Complejos',
      'c1.text': 'Proyectos y supervisión de sistemas con eficiencia, control operacional y reducción de emisiones.',
      'c2.title': 'Tratamiento de Lixiviados',
      'c2.text': 'Selección de ruta tecnológica fisicoquímica, proyecto ejecutivo y supervisión operacional.',
      'c3.title': 'Gases Odoríferos y Contaminantes Atmosféricos',
      'c3.text': 'Sistemas de captación y tratamiento de emisiones gaseosas industriales.',
      'c4.text': 'Soluciones innovadoras para lodos y fangos industriales sin tecnologías convencionales.',
      'c5.title': 'Valorización de Residuos Sólidos Urbanos',
      'c5.text': 'Transformación en Combustible Derivado de Residuos (CDR) de alto rendimiento.',
      'c6.title': 'Aprovechamiento de Subproductos Industriales',
      'c6.text': 'Predigestión de vinaza para aumentar la producción de biometano.',
      'c7.title': 'Monitoreo Remoto con IA',
      'c7.text': 'Sensores en línea y dashboards predictivos de calidad del aire, aguas y efluentes.',
      'c8.title': 'Soluciones a Medida',
      'c8.text': 'Desarrollo de tecnologías para emisiones sin soluciones convencionales.',
      'c9.title': 'Estaciones de Tratamiento',
      'c9.text': 'Optimización y supervisión operacional de plantas de saneamiento y PTAR.',
      'ct.title': '¿Quiere saber más? Hable con un especialista GETA',
      'ct.text': 'Cuéntenos su desafío ambiental y nuestro equipo le responderá con la mejor ruta tecnológica para su caso.',
      'ct.li1': 'Atención a empresas y organismos públicos',
      'ct.li2': 'Diagnóstico técnico y selección de ruta tecnológica',
      'ct.li3': 'Proyecto ejecutivo y supervisión operacional',
      'form.title': 'Envíe su mensaje',
      'ph.name': 'Nombre',
      'ph.company': 'Empresa / Organismo',
      'ph.email': 'Correo electrónico',
      'ph.phone': 'Teléfono',
      'ph.msg': 'Describa su desafío',
      'form.area': 'Área de interés',
      'form.send': 'Enviar mensaje',
      'form.sent': 'Mensaje enviado ✓',
      'ft.desc': 'Grupo de Especialistas en Tecnologías Ambientales.<br>Innovación al Servicio de la Sostenibilidad.',
      'ft.privacy': 'Política de privacidad',
      'ft.cookies': 'Declaración de cookies',
      'ft.copy': '© 2026 GETA – Grupo de Especialistas en Tecnologías Ambientales.',
      'ft.photos': 'Fotos: Pexels',
      'cookie.text': 'Usamos cookies para mejorar su experiencia. Al continuar, acepta nuestra Política de Privacidad.',
      'cookie.ok': 'Aceptar',
      'cookie.no': 'Rechazar'
    }
  };

  const htmlLang = { pt: 'pt-BR', en: 'en', es: 'es' };
  let pt = null;
  let current = 'pt';

  // Lê os textos em português do próprio HTML (uma única vez).
  function capturePT() {
    pt = Object.assign({}, extraPT);
    document.querySelectorAll('[data-i18n]').forEach(el => { if (!(el.dataset.i18n in pt)) pt[el.dataset.i18n] = el.innerHTML; });
    document.querySelectorAll('[data-i18n-ph]').forEach(el => { pt[el.dataset.i18nPh] = el.getAttribute('placeholder'); });
    document.querySelectorAll('[data-i18n-aria]').forEach(el => { pt[el.dataset.i18nAria] = el.getAttribute('aria-label'); });
  }

  function t(key, lang) {
    lang = lang || current;
    const d = lang === 'pt' ? pt : dict[lang];
    return (d && key in d) ? d[key] : pt[key];
  }

  function apply(lang) {
    if (!pt) capturePT();
    if (!(lang in htmlLang)) lang = 'pt';
    current = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n === 'form.send' && el.dataset.sent ? 'form.sent' : el.dataset.i18n;
      el.innerHTML = t(key);
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(el => el.setAttribute('placeholder', t(el.dataset.i18nPh)));
    document.querySelectorAll('[data-i18n-aria]').forEach(el => el.setAttribute('aria-label', t(el.dataset.i18nAria)));
    document.documentElement.lang = htmlLang[lang];
    document.title = t('meta.title');
    const md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute('content', t('meta.desc'));
    document.querySelectorAll('.lang [data-lang]').forEach(b => {
      b.classList.toggle('on', b.dataset.lang === lang);
      b.setAttribute('aria-pressed', b.dataset.lang === lang);
    });
    try { localStorage.setItem('geta-lang', lang); } catch (e) { /* armazenamento indisponível */ }
    const url = new URL(location.href);
    if (lang === 'pt') url.searchParams.delete('lang'); else url.searchParams.set('lang', lang);
    history.replaceState(null, '', url);
  }

  function init() {
    capturePT();
    document.querySelectorAll('.lang [data-lang]').forEach(b => b.addEventListener('click', () => apply(b.dataset.lang)));
    let lang = new URL(location.href).searchParams.get('lang');
    if (!lang) { try { lang = localStorage.getItem('geta-lang'); } catch (e) { lang = null; } }
    apply(lang || 'pt');
  }

  // Lista de chaves sem tradução (útil para conferir): I18N.missing()
  function missing() {
    if (!pt) capturePT();
    const out = {};
    for (const l of Object.keys(dict)) out[l] = Object.keys(pt).filter(k => !(k in dict[l]));
    return out;
  }

  window.I18N = { init, apply, t, missing, get lang() { return current; } };
})();
