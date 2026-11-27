/* =====================================================================
   GETA – Traduções (EN/ES) da página tecnologia-inertizacao.html
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
    [`Tecnologia 02`, `Technology 02`, `Tecnología 02`],
    [`<strong>Do lodo a um sólido seguro.</strong> Um <strong>mix proprietário de polímeros</strong>, aplicado na etapa de desaguamento, encapsula os metais do lodo e expulsa a água presa nos flocos. O resultado é <strong>menos volume, desaguamento mais rápido e um sólido que não lixivia</strong>, pronto para uma destinação mais barata e segura.`,
     `<strong>From sludge to a safe solid.</strong> A <strong>proprietary polymer blend</strong>, applied at the dewatering stage, encapsulates the metals in the sludge and expels the water trapped in the flocs. The result is <strong>less volume, faster dewatering and a solid that does not leach</strong>, ready for cheaper and safer disposal.`,
     `<strong>Del lodo a un sólido seguro.</strong> Una <strong>mezcla propietaria de polímeros</strong>, aplicada en la etapa de deshidratación, encapsula los metales del lodo y expulsa el agua atrapada en los flóculos. El resultado es <strong>menos volumen, deshidratación más rápida y un sólido que no lixivia</strong>, listo para una disposición más barata y segura.`],
    [`Sólido não lixiviável · ABNT NBR 10004`, `Non-leachable solid · ABNT NBR 10004`, `Sólido no lixiviable · ABNT NBR 10004`],
    [`Spin-off da tecnologia de chorume GETA`, `Spin-off of GETA's leachate technology`, `Derivada de la tecnología de lixiviados de GETA`],
    [`Testada com lodo da ETE Barueri (SABESP)`, `Tested with sludge from the Barueri WWTP (SABESP)`, `Probada con lodo de la PTAR Barueri (SABESP)`],

    // ---- O problema do lodo
    [`O problema do lodo`, `The sludge problem`, `El problema del lodo`],
    [`Um resíduo pesado, úmido e difícil de destinar`, `A heavy, wet waste that is hard to dispose of`, `Un residuo pesado, húmedo y difícil de disponer`],
    [`1 de 3 · Volume`, `1 of 3 · Volume`, `1 de 3 · Volumen`],
    [`Um resíduo feito, em grande parte, de água`, `A waste made mostly of water`, `Un residuo hecho, en gran parte, de agua`],
    [`O lodo das estações de tratamento sai com muita água presa entre as partículas. Mesmo depois do desaguamento convencional, a maior parte do que vai para o caminhão ainda é água. Na prática, paga-se para transportar e aterrar água.`,
     `Sludge leaves treatment plants with a lot of water trapped between its particles. Even after conventional dewatering, most of what goes onto the truck is still water. In practice, you pay to haul and landfill water.`,
     `El lodo de las plantas de tratamiento sale con mucha agua atrapada entre las partículas. Incluso después de la deshidratación convencional, la mayor parte de lo que va al camión sigue siendo agua. En la práctica, se paga por transportar y enterrar agua.`],
    [`Grandes volumes para manejar e transportar`, `Large volumes to handle and haul`, `Grandes volúmenes para manejar y transportar`],
    [`Frete e aterro cobrados por tonelada`, `Freight and landfill charged per tonne`, `Flete y relleno cobrados por tonelada`],
    [`Desaguamento lento, com muito polímero e energia`, `Slow dewatering, with a lot of polymer and energy`, `Deshidratación lenta, con mucho polímero y energía`],
    [`Ocupa rápido a capacidade dos aterros`, `Quickly uses up landfill capacity`, `Ocupa rápido la capacidad de los rellenos`],
    [`Por que importa`, `Why it matters`, `Por qué importa`],
    [`Cada ponto de umidade a menos significa menos caminhões na estrada e menos custo por tonelada.`,
     `Every point of moisture removed means fewer trucks on the road and a lower cost per tonne.`,
     `Cada punto de humedad menos significa menos camiones en la carretera y menos costo por tonelada.`],
    [`2 de 3 · Contaminantes`, `2 of 3 · Contaminants`, `2 de 3 · Contaminantes`],
    [`Metais e poluentes que se concentram no lodo`, `Metals and pollutants that concentrate in the sludge`, `Metales y contaminantes que se concentran en el lodo`],
    [`Tudo o que o tratamento retira da água acaba no lodo. Metais pesados e outros contaminantes se acumulam na fase sólida e, com a chuva, podem ser lixiviados de volta para o solo e para a água subterrânea.`,
     `Everything the treatment removes from the water ends up in the sludge. Heavy metals and other contaminants build up in the solid phase and, with rain, can leach back into the soil and groundwater.`,
     `Todo lo que el tratamiento retira del agua termina en el lodo. Los metales pesados y otros contaminantes se acumulan en la fase sólida y, con la lluvia, pueden lixiviarse de vuelta al suelo y al agua subterránea.`],
    [`Cádmio, chumbo, mercúrio, cromo, cobre e zinco`, `Cadmium, lead, mercury, chromium, copper and zinc`, `Cadmio, plomo, mercurio, cromo, cobre y zinc`],
    [`Fármacos, PFAS e microplásticos`, `Pharmaceuticals, PFAS and microplastics`, `Fármacos, PFAS y microplásticos`],
    [`Risco de lixiviação no aterro e no solo`, `Risk of leaching in the landfill and the soil`, `Riesgo de lixiviación en el relleno y en el suelo`],
    [`Composição que varia de um dia para o outro`, `A composition that changes from day to day`, `Una composición que varía de un día a otro`],
    [`Um lodo que libera metais exige mais controle e limita as opções de destinação.`,
     `Sludge that releases metals requires more control and limits the disposal options.`,
     `Un lodo que libera metales exige más control y limita las opciones de disposición.`],
    [`3 de 3 · Destinação`, `3 of 3 · Disposal`, `3 de 3 · Disposición`],
    [`Poucas saídas, e todas caras`, `Few options, and all of them expensive`, `Pocas salidas, y todas caras`],
    [`Hoje, o destino mais comum do lodo é o aterro. Usos mais sustentáveis, como biossólido para a agricultura ou recuperação de áreas degradadas, só são possíveis se o lodo for estável e não liberar metais. Sem isso, as portas se fecham e o custo só cresce.`,
     `Today, landfill is the most common destination for sludge. More sustainable uses, such as biosolids for agriculture or the recovery of degraded land, are only possible if the sludge is stable and does not release metals. Without that, the doors close and the cost keeps rising.`,
     `Hoy, el destino más común del lodo es el relleno sanitario. Usos más sostenibles, como biosólido para la agricultura o recuperación de áreas degradadas, solo son posibles si el lodo es estable y no libera metales. Sin eso, las puertas se cierran y el costo no deja de crecer.`],
    [`Aterro como destino quase único`, `Landfill as almost the only destination`, `El relleno como destino casi único`],
    [`Uso agrícola sujeito à CONAMA 498/2020`, `Agricultural use subject to CONAMA 498/2020`, `Uso agrícola sujeto a la CONAMA 498/2020`],
    [`Lodo instável gera odor e passivo ambiental`, `Unstable sludge creates odour and environmental liability`, `El lodo inestable genera olor y pasivo ambiental`],
    [`Custo de destinação que só aumenta`, `A disposal cost that keeps rising`, `Un costo de disposición que no deja de aumentar`],
    [`Tornar o lodo inerte é o que abre destinações mais baratas e seguras.`,
     `Making the sludge inert is what opens up cheaper and safer destinations.`,
     `Volver inerte el lodo es lo que abre destinos más baratos y seguros.`],
    [`Imagens ilustrativas.`, `Illustrative images.`, `Imágenes ilustrativas.`],

    // ---- Vídeo explicativo
    [`Nossa rota tecnológica`, `Our technology route`, `Nuestra ruta tecnológica`],
    [`A inertização de lodos em 1 minuto`, `Sludge inertization in 1 minute`, `La inertización de lodos en 1 minuto`],
    [`Do desafio do lodo de ETE ao sólido não lixiviável: veja como os polímeros GETA atuam no floco, as etapas do processo e os testes com lodo real.`,
     `From the challenge of WWTP sludge to a non-leachable solid: see how GETA polymers act on the floc, the process steps and the tests with real sludge.`,
     `Del desafío del lodo de PTAR al sólido no lixiviable: vea cómo actúan los polímeros GETA en el flóculo, las etapas del proceso y las pruebas con lodo real.`],
    [`Assistir ao vídeo`, `Watch the video`, `Ver el video`],

    // ---- Solução GETA
    [`Solução GETA`, `GETA solution`, `Solución GETA`],
    [`Lodo mais seco e mais seguro, em uma só etapa`, `Drier, safer sludge in a single step`, `Lodo más seco y más seguro, en una sola etapa`],
    [`1 de 4 · Como funciona`, `1 of 4 · How it works`, `1 de 4 · Cómo funciona`],
    [`Um produto que prende os metais e solta a água`, `A product that locks in metals and releases water`, `Un producto que atrapa los metales y suelta el agua`],
    [`Antes de secar o lodo, misturamos a ele um produto próprio da GETA, feito de polímeros. Ele faz duas coisas ao mesmo tempo: segura os metais dentro do lodo e deixa a água sair com facilidade.`, `Before drying the sludge, we mix in GETA's own polymer-based product. It does two things at once: it holds the metals inside the sludge and lets the water drain out easily.`, `Antes de secar el lodo, le mezclamos un producto propio de GETA, hecho de polímeros. Hace dos cosas al mismo tiempo: retiene los metales dentro del lodo y deja salir el agua con facilidad.`],
    [`O que acontece`, `What happens`, `Qué ocurre`],
    [`As partículas do lodo se juntam`, `The sludge particles clump together`, `Las partículas del lodo se juntan`],
    [`Os metais ficam presos`, `The metals stay locked in`, `Los metales quedan atrapados`],
    [`A água sai com mais facilidade`, `The water drains out more easily`, `El agua sale con más facilidad`],
    [`O lodo fica firme e estável`, `The sludge becomes firm and stable`, `El lodo queda firme y estable`],
    [`Em resumo`, `In short`, `En resumen`],
    [`Em uma só etapa, o lodo fica mais seco e deixa de contaminar.`, `In a single step, the sludge becomes drier and stops polluting.`, `En una sola etapa, el lodo queda más seco y deja de contaminar.`],
    [`2 de 4 · O processo`, `2 of 4 · The process`, `2 de 4 · El proceso`],
    [`Quatro etapas simples`, `Four simple steps`, `Cuatro etapas simples`],
    [`A tecnologia se encaixa na estação que já existe. O lodo passa por quatro etapas e sai pronto para ser destinado.`, `The technology fits into the existing plant. The sludge goes through four steps and comes out ready for disposal.`, `La tecnología se adapta a la planta que ya existe. El lodo pasa por cuatro etapas y sale listo para su destino.`],
    [`Etapas`, `Steps`, `Etapas`],
    [`Misturar: o lodo recebe os polímeros`, `Mix: the sludge receives the polymers`, `Mezclar: el lodo recibe los polímeros`],
    [`Adensar: os flocos ficam mais firmes`, `Thicken: the flocs become firmer`, `Espesar: los flóculos quedan más firmes`],
    [`Desaguar: a água sai mais rápido`, `Dewater: the water drains faster`, `Deshidratar: el agua sale más rápido`],
    [`Destinar: sai um sólido seguro e menor`, `Dispose: a smaller, safe solid comes out`, `Disponer: sale un sólido seguro y más pequeño`],
    [`Na prática`, `In practice`, `En la práctica`],
    [`Usa os equipamentos que a estação já tem.`, `Uses the equipment the plant already has.`, `Usa los equipos que la planta ya tiene.`],
    [`3 de 4 · Antes e depois`, `3 of 4 · Before and after`, `3 de 4 · Antes y después`],
    [`Menos volume, menos custo, mais segurança`, `Less volume, lower cost, more safety`, `Menos volumen, menos costo, más seguridad`],
    [`Com menos água, o lodo pesa menos e ocupa menos espaço. E, como os metais ficam presos, ele pode ter destinos que antes não eram possíveis.`, `With less water, the sludge weighs less and takes up less space. And because the metals stay locked in, it can go to destinations that were not possible before.`, `Con menos agua, el lodo pesa menos y ocupa menos espacio. Y, como los metales quedan atrapados, puede tener destinos que antes no eran posibles.`],
    [`Vantagens`, `Advantages`, `Ventajas`],
    [`Pelo menos 50% menos umidade (esperado no piloto)`, `At least 50% less moisture (expected in the pilot)`, `Al menos 50% menos humedad (esperado en el piloto)`],
    [`Não solta poluentes em contato com a água`, `Releases no pollutants in contact with water`, `No suelta contaminantes en contacto con el agua`],
    [`Pouco produto: cerca de 3 mL por litro de lodo`, `Little product: about 3 mL per litre of sludge`, `Poco producto: cerca de 3 mL por litro de lodo`],
    [`Vem de uma tecnologia que já funciona em grande escala`, `Comes from a technology already working at large scale`, `Viene de una tecnología que ya funciona a gran escala`],
    [`Resultado`, `Result`, `Resultado`],
    [`Menos caminhões, menos aterro e um resíduo que não contamina.`, `Fewer trucks, less landfill and a waste that does not pollute.`, `Menos camiones, menos relleno y un residuo que no contamina.`],
    [`4 de 4 · O piloto`, `4 of 4 · The pilot`, `4 de 4 · El piloto`],
    [`Pronto para testar na sua estação`, `Ready to test at your plant`, `Listo para probar en su planta`],
    [`Antes de levar a tecnologia para a escala real, instalamos um piloto na própria estação. Ele trata até 20 m³ de lodo por hora e mostra o resultado com o lodo de verdade.`, `Before taking the technology to full scale, we install a pilot at the plant itself. It treats up to 20 m³ of sludge per hour and shows the result with the real sludge.`, `Antes de llevar la tecnología a la escala real, instalamos un piloto en la propia planta. Trata hasta 20 m³ de lodo por hora y muestra el resultado con el lodo real.`],
    [`Como funciona o piloto`, `How the pilot works`, `Cómo funciona el piloto`],
    [`Uma bomba leva o lodo para o sistema`, `A pump carries the sludge into the system`, `Una bomba lleva el lodo al sistema`],
    [`O polímero é misturado de forma automática`, `The polymer is mixed in automatically`, `El polímero se mezcla de forma automática`],
    [`A prensa separa a água do lodo`, `The press separates the water from the sludge`, `La prensa separa el agua del lodo`],
    [`A água volta para a estação`, `The water returns to the plant`, `El agua vuelve a la planta`],
    [`Escala`, `Scale`, `Escala`],
    [`O piloto pode ser ajustado para estações menores ou maiores.`, `The pilot can be adjusted for smaller or larger plants.`, `El piloto puede ajustarse a plantas más pequeñas o más grandes.`],
    [`Sólido não lixiviável (ABNT NBR 10004)`, `Non-leachable solid (ABNT NBR 10004)`, `Sólido no lixiviable (ABNT NBR 10004)`],
    [`Tecnologia derivada da rota de chorume da GETA, com pedido de patente BR 10 2026 020875 2 (INPI).`,
     `Technology derived from GETA's leachate route, under patent application BR 10 2026 020875 2 (INPI).`,
     `Tecnología derivada de la ruta de lixiviados de GETA, con solicitud de patente BR 10 2026 020875 2 (INPI).`],

    // ---- Na prática (vídeo)
    [`Na prática`, `In practice`, `En la práctica`],
    [`O lodo inertizado <span class="cx-hl3">não lixivia</span>`, `Inertized sludge <span class="cx-hl3">does not leach</span>`, `El lodo inertizado <span class="cx-hl3">no lixivia</span>`],
    [`Ensaio em laboratório com lodo da ETE Barueri (SABESP). Colocado em água limpa, o lodo inertizado permanece íntegro, sem turvar a água nem liberar os poluentes.`,
     `Laboratory test with sludge from the Barueri WWTP (SABESP). Placed in clean water, the inertized sludge stays intact, without clouding the water or releasing pollutants.`,
     `Ensayo de laboratorio con lodo de la PTAR Barueri (SABESP). Colocado en agua limpia, el lodo inertizado permanece íntegro, sin enturbiar el agua ni liberar los contaminantes.`],
    [`<i></i>Lodo inertizado em água`, `<i></i>Inertized sludge in water`, `<i></i>Lodo inertizado en agua`],
    [`Lodo bruto + água (esquerda) e lodo inertizado + água (direita).`, `Raw sludge + water (left) and inertized sludge + water (right).`, `Lodo crudo + agua (izquierda) y lodo inertizado + agua (derecha).`],
    [`A diferença aparece em minutos`, `The difference shows within minutes`, `La diferencia aparece en minutos`],
    [`O lodo bruto se dispersa e deixa a água escura. O lodo inertizado se separa: os sólidos ficam no fundo e a água permanece clara.`,
     `Raw sludge disperses and turns the water dark. Inertized sludge separates: the solids settle at the bottom and the water stays clear.`,
     `El lodo crudo se dispersa y oscurece el agua. El lodo inertizado se separa: los sólidos quedan en el fondo y el agua permanece clara.`],
    [`Sólido íntegro em contato com a água`, `The solid stays intact in contact with water`, `Sólido íntegro en contacto con el agua`],
    [`Metais presos na matriz de polímeros`, `Metals locked in the polymer matrix`, `Metales atrapados en la matriz de polímeros`],

    // ---- Potencial
    [`Potencial`, `Potential`, `Potencial`],
    [`De passivo a recurso`, `From liability to resource`, `De pasivo a recurso`],
    [`Inerte e com menos água, o lodo deixa de ser apenas um custo de aterro e passa a ter novas destinações.`,
     `Inert and with less water, sludge stops being just a landfill cost and gains new destinations.`,
     `Inerte y con menos agua, el lodo deja de ser solo un costo de relleno y gana nuevos destinos.`],
    [`Aterro mais barato e seguro`, `Cheaper, safer landfilling`, `Relleno más barato y seguro`],
    [`Menos volume para transportar e um resíduo que não contamina, inclusive como cobertura diária das células.`,
     `Less volume to haul and a waste that does not pollute, including as daily cover for landfill cells.`,
     `Menos volumen para transportar y un residuo que no contamina, incluso como cobertura diaria de las celdas.`],
    [`Biossólido agrícola e florestal`, `Agricultural and forestry biosolids`, `Biosólido agrícola y forestal`],
    [`Uso no solo dentro da CONAMA 498/2020, quando o lodo atende aos critérios de qualidade.`,
     `Land application under CONAMA 498/2020, when the sludge meets the quality criteria.`,
     `Uso en el suelo dentro de la CONAMA 498/2020, cuando el lodo cumple los criterios de calidad.`],
    [`Recuperação de áreas degradadas`, `Recovery of degraded land`, `Recuperación de áreas degradadas`],
    [`Material estável para recompor solos de áreas mineradas ou degradadas.`, `A stable material to rebuild soils in mined or degraded areas.`, `Material estable para recomponer suelos de áreas mineras o degradadas.`],
    [`Aproveitamento energético`, `Energy recovery`, `Aprovechamiento energético`],
    [`Com menos umidade, o lodo ganha poder calorífico para coprocessamento ou CDR.`, `With less moisture, the sludge gains calorific value for co-processing or RDF.`, `Con menos humedad, el lodo gana poder calorífico para coprocesamiento o CDR.`],

    // ---- Traga o seu lodo
    [`Traga o seu lodo`, `Bring us your sludge`, `Tráiganos su lodo`],
    [`Nós definimos a rota de ação`, `We define the course of action`, `Nosotros definimos la ruta de acción`],
    [`Cada lodo é diferente. Envie uma amostra: testamos em laboratório, medimos o ganho no desaguamento e a lixiviação e propomos a rota e a dosagem certas para a sua estação.`,
     `Every sludge is different. Send us a sample: we test it in the laboratory, measure the dewatering gain and the leaching, and propose the right route and dose for your plant.`,
     `Cada lodo es diferente. Envíenos una muestra: la probamos en laboratorio, medimos la mejora en la deshidratación y la lixiviación y proponemos la ruta y la dosis adecuadas para su planta.`],
    [`Análise da amostra e ensaio de bancada`, `Sample analysis and bench test`, `Análisis de la muestra y ensayo de laboratorio`],
    [`Rota e dosagem definidas para o seu lodo`, `Route and dose defined for your sludge`, `Ruta y dosis definidas para su lodo`],
    [`Piloto em campo antes da escala real`, `Field pilot before full scale`, `Piloto en campo antes de la escala real`],
    [`Fale com um especialista`, `Talk to a specialist`, `Hable con un especialista`],
    [`Cases relacionados`, `Related cases`, `Casos relacionados`],
  ];

  // Onde procurar os textos (sem tocar no que já tem data-i18n)
  const SEL = ['.tp-hero .eyebrow', '.tp-hero .lead', '.tp-badges>span', '.tp-mapas-head .eyebrow', '.tp-mapas-head h2',
    '.tp-mapas-tag', '.tp-mapas-txt h3', '.tp-mapas-txt article>p', '.tp-mapas-geta>b', '.tp-mapas-geta>p', '.tp-list-t',
    '.tp-imp-list li', '.tp-mapas-src', '.tp-video-head>p', '.tp-play span','.cx .eyebrow', '.cx h3', '.cx h4', '.cx .btn', '.cx-head p', '.cx-tag',
    '.cx-checks li', '.cx-proof-txt p', '.cx-proof-fig figcaption', '.cx-pot-c p', '.cx-cta p', '.tp-strip h3'].join(',');
  const norm = s => s.replace(/\s+/g, ' ').trim();
  const map = new Map(T.map(r => [norm(r[0]), r]));
  const en = {}, es = {}, falta = [];
  let n = 0;
  document.querySelectorAll(SEL).forEach(el => {
    if (el.dataset.i18n) return;
    const pt = norm(el.innerHTML), r = map.get(pt);
    if (!r) { if (/[A-Za-zÀ-ú]{3}/.test(pt)) falta.push(pt); return; }
    const k = 'inp.' + (n++);
    el.dataset.i18n = k; en[k] = r[1]; es[k] = r[2];
  });
  I18N.extend({ en, es });
  if (falta.length && /[?&]editar/.test(location.search)) console.warn('Sem tradução (tecnologia-inertizacao):', falta);

  // Diagramas com texto na imagem: versões -en.jpg e -es.jpg
  const diag = [...document.querySelectorAll('.tp-rotas .tp-mapas-fig img')].map(img => [img, img.getAttribute('src')]);
  I18N.onChange(lang => {
    diag.forEach(([img, src]) => { img.src = lang === 'pt' ? src : src.replace(/\.jpg/, '-' + lang + '.jpg'); });
  });
})();
