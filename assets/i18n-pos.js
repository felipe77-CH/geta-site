/* =====================================================================
   GETA – Traduções (EN/ES) da página tecnologia-pos.html
   Cada linha é [português, inglês, espanhol]. O texto em português é
   reconhecido no próprio HTML, então as seções podem ser refeitas sem
   perder a tradução, desde que o texto em português continue igual.
   Se mudar um texto em português, mude também aqui. Para ver o que
   ficou sem tradução: ?editar=1 (console).
   Carregar depois de i18n.js e antes de assets/portfolio.js.
   ===================================================================== */
(function () {
  'use strict';
  if (!window.I18N) return;

  const T = [
    // ---- Topo
    [`Tecnologia 04`, `Technology 04`, `Tecnología 04`],
    [`<strong>Plasma frio para tratar efluentes industriais.</strong> Desenvolvemos uma tecnologia de <strong>plasma frio</strong> que gera espécies radicais capazes de quebrar só os compostos difíceis de degradar. Ela trata <strong>efluentes lignocelulósicos e vinhaça</strong>, e hoje está em <strong>implantação em escala industrial</strong> para a vinhaça.`, `<strong>Cold plasma to treat industrial effluents.</strong> We developed a <strong>cold plasma</strong> technology that generates radical species able to break down only the hard-to-degrade compounds. It treats <strong>lignocellulosic effluents and vinasse</strong>, and is now being <strong>implemented at industrial scale</strong> for vinasse.`, `<strong>Plasma frío para tratar efluentes industriales.</strong> Desarrollamos una tecnología de <strong>plasma frío</strong> que genera especies radicales capaces de romper solo los compuestos difíciles de degradar. Trata <strong>efluentes lignocelulósicos y vinaza</strong>, y hoy está en <strong>implantación a escala industrial</strong> para la vinaza.`],
    [`Patente de invenção depositada · 10 reivindicações`, `Invention patent filed · 10 claims`, `Patente de invención presentada · 10 reivindicaciones`],
    [`Agente oxidativo gasoso desenvolvido pela GETA`, `Gaseous oxidizing agent developed by GETA`, `Agente oxidativo gaseoso desarrollado por GETA`],
    [`Pré-tratamento antes do biodigestor`, `Pre-treatment before the digester`, `Pretratamiento antes del biodigestor`],

    // ---- Nossa motivação
    [`Nossa motivação`, `Our motivation`, `Nuestra motivación`],
    [`Oxidar compostos persistentes com mais seletividade`, `Oxidizing persistent compounds with greater selectivity`, `Oxidar compuestos persistentes con más selectividad`],
    [`1 de 3 · O desafio`, `1 of 3 · The challenge`, `1 de 3 · El desafío`],
    [`Compostos que resistem ao tratamento`, `Compounds that resist treatment`, `Compuestos que resisten al tratamiento`],
    [`Muitos efluentes industriais, como os lignocelulósicos e a vinhaça, carregam compostos persistentes: estruturas aromáticas da lignina, melanoidinas e outros compostos escuros. Eles resistem ao tratamento biológico, dão cor ao efluente e travam processos como a biodigestão.`, `Many industrial effluents, such as lignocellulosic effluents and vinasse, carry persistent compounds: aromatic lignin structures, melanoidins and other dark compounds. They resist biological treatment, colour the effluent and block processes such as anaerobic digestion.`, `Muchos efluentes industriales, como los lignocelulósicos y la vinaza, contienen compuestos persistentes: estructuras aromáticas de la lignina, melanoidinas y otros compuestos oscuros. Resisten al tratamiento biológico, dan color al efluente y traban procesos como la biodigestión.`],
    [`Estruturas aromáticas e coloridas`, `Aromatic, coloured structures`, `Estructuras aromáticas y coloreadas`],
    [`Resistem à degradação biológica`, `They resist biological degradation`, `Resisten a la degradación biológica`],
    [`Inibem a biodigestão`, `They inhibit anaerobic digestion`, `Inhiben la biodigestión`],
    [`Presentes em efluentes de várias indústrias`, `Present in effluents from many industries`, `Presentes en efluentes de varias industrias`],
    [`Por que importa`, `Why it matters`, `Por qué importa`],
    [`Sem quebrar esses compostos, o tratamento rende menos e custa mais.`, `Without breaking down these compounds, treatment yields less and costs more.`, `Sin romper estos compuestos, el tratamiento rinde menos y cuesta más.`],
    [`2 de 3 · Tecnologias tradicionais`, `2 of 3 · Traditional technologies`, `2 de 3 · Tecnologías tradicionales`],
    [`Ozônio e oxigenação têm limites`, `Ozone and oxygenation have limits`, `El ozono y la oxigenación tienen límites`],
    [`As rotas tradicionais, como a ozonização e a oxigenação, oxidam sem escolher o alvo. Boa parte do oxidante é gasta em compostos simples, e os persistentes continuam no efluente.`, `Traditional routes, such as ozonation and oxygenation, oxidize without choosing a target. Much of the oxidant is spent on simple compounds, and the persistent ones remain in the effluent.`, `Las rutas tradicionales, como la ozonización y la oxigenación, oxidan sin elegir el objetivo. Buena parte del oxidante se gasta en compuestos simples, y los persistentes siguen en el efluente.`],
    [`Baixa seletividade`, `Low selectivity`, `Baja selectividad`],
    [`Alto consumo de oxidante e de energia`, `High oxidant and energy consumption`, `Alto consumo de oxidante y de energía`],
    [`Oxidam também a matéria orgânica útil`, `They also oxidize the useful organic matter`, `Oxidan también la materia orgánica útil`],
    [`Resultado limitado nos compostos persistentes`, `Limited effect on persistent compounds`, `Resultado limitado en los compuestos persistentes`],
    [`Era preciso um oxidante mais forte e, ao mesmo tempo, mais seletivo.`, `A stronger and, at the same time, more selective oxidant was needed.`, `Hacía falta un oxidante más fuerte y, al mismo tiempo, más selectivo.`],
    [`3 de 3 · A motivação GETA`, `3 of 3 · GETA's motivation`, `3 de 3 · La motivación de GETA`],
    [`Espécies mais seletivas e mais oxidantes`, `More selective, more oxidizing species`, `Especies más selectivas y más oxidantes`],
    [`Daí nasceu a nossa motivação: gerar espécies químicas com maior seletividade e maior poder de oxidação sobre os compostos persistentes do que o ozônio e a oxigenação. O caminho encontrado foi o plasma frio.`, `That is where our motivation came from: to generate chemical species with greater selectivity and oxidizing power on persistent compounds than ozone and oxygenation. The path we found was cold plasma.`, `De ahí nació nuestra motivación: generar especies químicas con mayor selectividad y mayor poder de oxidación sobre los compuestos persistentes que el ozono y la oxigenación. El camino encontrado fue el plasma frío.`],
    [`Espécies radicais geradas no plasma frio`, `Radical species generated in cold plasma`, `Especies radicales generadas en el plasma frío`],
    [`Alta afinidade pelos compostos persistentes`, `High affinity for persistent compounds`, `Alta afinidad por los compuestos persistentes`],
    [`Menos oxidante desperdiçado`, `Less wasted oxidant`, `Menos oxidante desperdiciado`],
    [`Aplicável a diferentes efluentes industriais`, `Applicable to different industrial effluents`, `Aplicable a distintos efluentes industriales`],
    [`Como a GETA responde`, `How GETA responds`, `Cómo responde GETA`],
    [`Uma tecnologia própria e patenteada, que hoje chega à escala industrial na vinhaça.`, `An in-house, patented technology that is now reaching industrial scale in vinasse.`, `Una tecnología propia y patentada, que hoy llega a la escala industrial en la vinaza.`],

    // ---- Solução GETA
    [`Solução GETA`, `GETA solution`, `Solución GETA`],
    [`Oxidar só o que atrapalha, com um agente oxidativo gasoso próprio`, `Oxidize only what gets in the way, with our own gaseous oxidizing agent`, `Oxidar solo lo que estorba, con un agente oxidativo gaseoso propio`],
    [`1 de 4 · Como funciona`, `1 of 4 · How it works`, `1 de 4 · Cómo funciona`],
    [`Uma oxidação que escolhe o alvo`, `An oxidation that picks its target`, `Una oxidación que elige el objetivo`],
    [`Nossa tecnologia de plasma frio gera um agente oxidativo gasoso e espécies radicais. Em contato com a vinhaça, eles atacam os compostos escuros que travam a digestão e deixam de lado a matéria orgânica simples.`, `Our cold plasma technology generates a gaseous oxidizing agent and radical species. In contact with the vinasse, they attack the dark compounds that block digestion and leave the simple organic matter alone.`, `Nuestra tecnología de plasma frío genera un agente oxidativo gaseoso y especies radicales. En contacto con la vinaza, atacan los compuestos oscuros que traban la digestión y dejan de lado la materia orgánica simple.`],
    [`O que acontece`, `What happens`, `Qué ocurre`],
    [`O plasma frio gera as espécies radicais`, `The cold plasma generates the radical species`, `El plasma frío genera las especies radicales`],
    [`Elas reagem de forma seletiva`, `They react selectively`, `Reaccionan de forma selectiva`],
    [`As melanoidinas e as fibras são quebradas`, `Melanoidins and fibres are broken down`, `Las melanoidinas y las fibras se rompen`],
    [`A matéria orgânica fica preservada`, `The organic matter is preserved`, `La materia orgánica queda preservada`],
    [`Em resumo`, `In short`, `En resumen`],
    [`A vinhaça chega ao biodigestor sem o freio dos inibidores.`, `The vinasse reaches the digester without the inhibitors' brake.`, `La vinaza llega al biodigestor sin el freno de los inhibidores.`],
    [`2 de 4 · O processo`, `2 of 4 · The process`, `2 de 4 · El proceso`],
    [`Quatro etapas simples`, `Four simple steps`, `Cuatro etapas simples`],
    [`O POS entra antes do biodigestor e trata a vinhaça com o agente oxidativo gasoso da GETA.`, `The SOP comes before the digester and treats the vinasse with GETA's gaseous oxidizing agent.`, `El POS entra antes del biodigestor y trata la vinaza con el agente oxidativo gaseoso de GETA.`],
    [`Etapas`, `Steps`, `Etapas`],
    [`Gerar: o agente oxidativo no reator de plasma`, `Generate: the oxidizing agent in the plasma reactor`, `Generar: el agente oxidativo en el reactor de plasma`],
    [`Injetar: o gás na vinhaça`, `Inject: the gas into the vinasse`, `Inyectar: el gas en la vinaza`],
    [`Oxidar: só os compostos que inibem`, `Oxidize: only the compounds that inhibit`, `Oxidar: solo los compuestos que inhiben`],
    [`Biodigerir: a vinhaça rende mais biometano`, `Digest: the vinasse yields more biomethane`, `Biodigerir: la vinaza rinde más biometano`],
    [`Resultado`, `Result`, `Resultado`],
    [`Mais metano a partir da mesma vinhaça.`, `More methane from the same vinasse.`, `Más metano a partir de la misma vinaza.`],
    [`3 de 4 · Convencional × seletiva`, `3 of 4 · Conventional × selective`, `3 de 4 · Convencional × selectiva`],
    [`Menos reagente, mais metano`, `Less reagent, more methane`, `Menos reactivo, más metano`],
    [`Na oxidação convencional, o reagente é gasto em tudo, inclusive no que viraria metano. A oxidação seletiva concentra o efeito nos inibidores.`,
     `In conventional oxidation, the reagent is spent on everything, including what would become methane. Selective oxidation focuses the effect on the inhibitors.`,
     `En la oxidación convencional, el reactivo se gasta en todo, incluso en lo que se volvería metano. La oxidación selectiva concentra el efecto en los inhibidores.`],
    [`Vantagens`, `Advantages`, `Ventajas`],
    [`Ataque focado nos compostos que inibem`, `Attack focused on the compounds that inhibit`, `Ataque enfocado en los compuestos que inhiben`],
    [`Menor consumo de reagente`, `Lower reagent consumption`, `Menor consumo de reactivo`],
    [`Matéria orgânica preservada para o metano`, `Organic matter preserved for methane`, `Materia orgánica preservada para el metano`],
    [`Mais biometano com menos reagente.`, `More biomethane with less reagent.`, `Más biometano con menos reactivo.`],
    [`4 de 4 · Integração à usina`, `4 of 4 · Integration into the plant`, `4 de 4 · Integración a la planta`],
    [`Um passo antes do biodigestor`, `One step before the digester`, `Un paso antes del biodigestor`],
    [`O reator POS fica antes do biodigestor. Nele, a vinhaça recebe o agente oxidativo gasoso e segue para a digestão já sem os compostos que a travavam.`, `The SOP reactor sits before the digester. There, the vinasse receives the gaseous oxidizing agent and moves on to digestion already free of the compounds that blocked it.`, `El reactor POS está antes del biodigestor. En él, la vinaza recibe el agente oxidativo gaseoso y sigue a la digestión ya sin los compuestos que la trababan.`],
    [`Como se integra`, `How it fits in`, `Cómo se integra`],
    [`A vinhaça passa pelo reator POS`, `The vinasse goes through the SOP reactor`, `La vinaza pasa por el reactor POS`],
    [`Segue para o biodigestor`, `It moves on to the digester`, `Sigue al biodigestor`],
    [`O biogás é purificado em biometano`, `The biogas is upgraded to biomethane`, `El biogás se purifica en biometano`],
    [`Na usina`, `At the plant`, `En la planta`],
    [`Mais biometano a partir da mesma vinhaça.`, `More biomethane from the same vinasse.`, `Más biometano a partir de la misma vinaza.`],
    [`Recebe o agente oxidativo gasoso`, `It receives the gaseous oxidizing agent`, `Recibe el agente oxidativo gaseoso`],
    [`Agente gasoso próprio`, `In-house gaseous agent`, `Agente gaseoso propio`],
    [`Desenvolvido pela GETA e gerado no reator de plasma.`, `Developed by GETA and generated in the plasma reactor.`, `Desarrollado por GETA y generado en el reactor de plasma.`],
    [`Tecnologia protegida por patente de invenção depositada (10 reivindicações).`, `Technology protected by a filed invention patent (10 claims).`, `Tecnología protegida por patente de invención presentada (10 reivindicaciones).`],

    // ---- Na prática (vídeo)
    [`Na prática`, `In practice`, `En la práctica`],
    [`O efluente <span class="cx-hl3">perde a cor escura</span>`, `The effluent <span class="cx-hl3">loses its dark colour</span>`, `El efluente <span class="cx-hl3">pierde el color oscuro</span>`],
    [`Ensaio de oxidação seletiva com efluente lignocelulósico: à esquerda, o efluente em tratamento clareia; à direita, o mesmo efluente sem tratamento continua escuro.`, `Selective oxidation test with lignocellulosic effluent: on the left, the effluent under treatment turns lighter; on the right, the same untreated effluent stays dark.`, `Ensayo de oxidación selectiva con efluente lignocelulósico: a la izquierda, el efluente en tratamiento se aclara; a la derecha, el mismo efluente sin tratamiento sigue oscuro.`],
    [`<i></i>Efluente em tratamento`, `<i></i>Effluent under treatment`, `<i></i>Efluente en tratamiento`],
    [`A cor escura vem de compostos difíceis de degradar`, `The dark colour comes from hard-to-degrade compounds`, `El color oscuro viene de compuestos difíciles de degradar`],
    [`Em efluentes lignocelulósicos, a cor vem de estruturas aromáticas da lignina, o mesmo tipo de composto que trava a biodigestão da vinhaça. Quando a cor some, é sinal de que elas foram quebradas.`, `In lignocellulosic effluents, the colour comes from aromatic structures in lignin, the same kind of compound that blocks vinasse digestion. When the colour fades, it means they have been broken down.`, `En efluentes lignocelulósicos, el color viene de estructuras aromáticas de la lignina, el mismo tipo de compuesto que traba la biodigestión de la vinaza. Cuando el color desaparece, es señal de que se rompieron.`],
    [`Ataque seletivo aos compostos aromáticos`, `Selective attack on aromatic compounds`, `Ataque selectivo a los compuestos aromáticos`],
    [`Mesmo princípio aplicado à vinhaça`, `Same principle applied to vinasse`, `Mismo principio aplicado a la vinaza`],

    // ---- Trajetória
    [`Plasma frio · espécies radicais`, `Cold plasma · radical species`, `Plasma frío · especies radicales`],
    [`Sistema industrial em implantação (vinhaça)`, `Industrial system being implemented (vinasse)`, `Sistema industrial en implantación (vinaza)`],
    [`<i></i>Em implantação industrial`, `<i></i>Industrial implementation underway`, `<i></i>En implantación industrial`],
    [`Nossa trajetória`, `Our track record`, `Nuestra trayectoria`],
    [`Do laboratório à escala industrial`, `From the lab to industrial scale`, `Del laboratorio a la escala industrial`],
    [`Desenvolvemos uma tecnologia de plasma frio que gera espécies radicais para tratar diferentes efluentes industriais. Depois dos ensaios, a vinhaça é a primeira aplicação a chegar à escala industrial.`, `We developed a cold plasma technology that generates radical species to treat different industrial effluents. After the tests, vinasse is the first application to reach industrial scale.`, `Desarrollamos una tecnología de plasma frío que genera especies radicales para tratar distintos efluentes industriales. Después de los ensayos, la vinaza es la primera aplicación en llegar a la escala industrial.`],
    [`Desenvolvimento`, `Development`, `Desarrollo`],
    [`Plasma frio`, `Cold plasma`, `Plasma frío`],
    [`Tecnologia própria que gera espécies radicais e um agente oxidativo gasoso.`, `In-house technology that generates radical species and a gaseous oxidizing agent.`, `Tecnología propia que genera especies radicales y un agente oxidativo gaseoso.`],
    [`Proteção`, `Protection`, `Protección`],
    [`Patente depositada`, `Patent filed`, `Patente presentada`],
    [`Patente de invenção com 10 reivindicações.`, `Invention patent with 10 claims.`, `Patente de invención con 10 reivindicaciones.`],
    [`Ensaios`, `Tests`, `Ensayos`],
    [`Diferentes efluentes`, `Different effluents`, `Distintos efluentes`],
    [`Ensaios com efluentes lignocelulósicos e com vinhaça.`, `Tests with lignocellulosic effluents and with vinasse.`, `Ensayos con efluentes lignocelulósicos y con vinaza.`],
    [`Hoje`, `Today`, `Hoy`],
    [`Escala industrial`, `Industrial scale`, `Escala industrial`],
    [`Sistema industrial para tratamento de vinhaça em fase de implantação.`, `Industrial vinasse treatment system in the implementation phase.`, `Sistema industrial para tratamiento de vinaza en fase de implantación.`],

    // ---- Ganhos esperados
    [`Ganhos esperados`, `Expected gains`, `Ganancias esperadas`],
    [`Mais energia da mesma vinhaça`, `More energy from the same vinasse`, `Más energía de la misma vinaza`],
    [`O POS ataca a causa do baixo rendimento da biodigestão. Estes são os ganhos esperados para a usina.`,
     `The SOP tackles the cause of low digestion yield. These are the expected gains for the plant.`,
     `El POS ataca la causa del bajo rendimiento de la biodigestión. Estas son las ganancias esperadas para la planta.`],
    [`Mais biometano`, `More biomethane`, `Más biometano`],
    [`Maior produção de metano a partir do mesmo volume de vinhaça.`, `Higher methane production from the same volume of vinasse.`, `Mayor producción de metano a partir del mismo volumen de vinaza.`],
    [`Biodigestor mais eficiente`, `A more efficient digester`, `Biodigestor más eficiente`],
    [`Menor tempo de retenção para a mesma produção.`, `Shorter retention time for the same output.`, `Menor tiempo de retención para la misma producción.`],
    [`Menos reagente`, `Less reagent`, `Menos reactivo`],
    [`A oxidação acontece só onde é necessária.`, `Oxidation happens only where it is needed.`, `La oxidación ocurre solo donde es necesaria.`],

    // ---- Traga a sua vinhaça
    [`Traga o seu efluente`, `Bring us your effluent`, `Tráiganos su efluente`],
    [`Nós definimos a rota de ação`, `We define the course of action`, `Nosotros definimos la ruta de acción`],
    [`Vinhaça, efluente lignocelulósico ou outro efluente industrial difícil de tratar: envie uma amostra. Avaliamos em laboratório o efeito do POS e propomos a configuração certa para a sua planta.`, `Vinasse, lignocellulosic effluent or another hard-to-treat industrial effluent: send us a sample. We assess the effect of the SOP in the laboratory and propose the right setup for your plant.`, `Vinaza, efluente lignocelulósico u otro efluente industrial difícil de tratar: envíenos una muestra. Evaluamos en laboratorio el efecto del POS y proponemos la configuración adecuada para su planta.`],
    [`Análise da amostra e ensaio de bancada`, `Sample analysis and bench test`, `Análisis de la muestra y ensayo de laboratorio`],
    [`Resultados antes e depois do tratamento`, `Results before and after treatment`, `Resultados antes y después del tratamiento`],
    [`Piloto antes da escala real`, `Pilot before full scale`, `Piloto antes de la escala real`],
    [`Fale com um especialista`, `Talk to a specialist`, `Hable con un especialista`],
    [`Cases relacionados`, `Related cases`, `Casos relacionados`],
  ];

  // Onde procurar os textos (sem tocar no que já tem data-i18n)
  const SEL = ['.tp-hero .eyebrow', '.tp-hero .lead', '.tp-badges>span', '.tp-mapas-head .eyebrow', '.tp-mapas-head h2',
    '.tp-mapas-tag', '.tp-mapas-txt h3', '.tp-mapas-txt article>p', '.tp-mapas-geta>b', '.tp-mapas-geta>p', '.tp-list-t',
    '.tp-imp-list li', '.tp-mapas-src', '.cx .eyebrow', '.cx h3', '.cx h4', '.cx .btn', '.cx-head p', '.cx-tag',
    '.cx-checks li', '.cx-proof-txt p', '.cx-live', '.cx-tl b', '.cx-tl h4', '.cx-tl p', '.cx-pot-c p', '.cx-cta p', '.tp-strip h3'].join(',');
  const norm = s => s.replace(/\s+/g, ' ').trim();
  const map = new Map(T.map(r => [norm(r[0]), r]));
  const en = {}, es = {}, falta = [];
  let n = 0;
  document.querySelectorAll(SEL).forEach(el => {
    if (el.dataset.i18n) return;
    const pt = norm(el.innerHTML), r = map.get(pt);
    if (!r) { if (/[A-Za-zÀ-ú]{3}/.test(pt)) falta.push(pt); return; }
    const k = 'pos.' + (n++);
    el.dataset.i18n = k; en[k] = r[1]; es[k] = r[2];
  });
  I18N.extend({ en, es });
  if (falta.length && /[?&]editar/.test(location.search)) console.warn('Sem tradução (tecnologia-pos):', falta);

  // Diagramas com texto na imagem: versões -en.jpg e -es.jpg
  const diag = [...document.querySelectorAll('.tp-rotas .tp-mapas-fig img')].map(img => [img, img.getAttribute('src')]);
  I18N.onChange(lang => {
    diag.forEach(([img, src]) => { img.src = lang === 'pt' ? src : src.replace(/\.jpg/, '-' + lang + '.jpg'); });
  });
})();
