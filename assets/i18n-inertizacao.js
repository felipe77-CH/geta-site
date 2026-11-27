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

    // ---- Solução GETA
    [`Solução GETA`, `GETA solution`, `Solución GETA`],
    [`Desaguar e inertizar na mesma etapa`, `Dewatering and inertization in a single step`, `Deshidratar e inertizar en la misma etapa`],
    [`1 de 4 · Como funciona`, `1 of 4 · How it works`, `1 de 4 · Cómo funciona`],
    [`Polímeros que prendem os metais e soltam a água`, `Polymers that lock in metals and release water`, `Polímeros que atrapan los metales y sueltan el agua`],
    [`Um mix proprietário de polímeros é dosado no lodo antes do desaguamento. Ele envolve os metais em uma matriz que repele a água e, ao mesmo tempo, libera a água que estava presa nos flocos.`,
     `A proprietary polymer blend is dosed into the sludge before dewatering. It wraps the metals in a water-repellent matrix and, at the same time, releases the water that was trapped in the flocs.`,
     `Una mezcla propietaria de polímeros se dosifica en el lodo antes de la deshidratación. Envuelve los metales en una matriz que repele el agua y, al mismo tiempo, libera el agua que estaba atrapada en los flóculos.`],
    [`O que acontece`, `What happens`, `Qué ocurre`],
    [`Neutraliza as cargas e agrega as partículas`, `Neutralizes charges and aggregates particles`, `Neutraliza las cargas y agrega las partículas`],
    [`Encapsula os metais e reduz a sua mobilidade`, `Encapsulates metals and reduces their mobility`, `Encapsula los metales y reduce su movilidad`],
    [`Expulsa a água presa nos poros dos flocos`, `Expels the water trapped in the floc pores`, `Expulsa el agua atrapada en los poros de los flóculos`],
    [`Forma flocos densos, coesos e estáveis`, `Forms dense, cohesive and stable flocs`, `Forma flóculos densos, cohesivos y estables`],
    [`Em resumo`, `In short`, `En resumen`],
    [`Uma única etapa melhora o desaguamento e torna o lodo inerte.`, `A single step improves dewatering and makes the sludge inert.`, `Una sola etapa mejora la deshidratación y vuelve inerte el lodo.`],
    [`2 de 4 · O processo`, `2 of 4 · The process`, `2 de 4 · El proceso`],
    [`Do lodo úmido ao sólido seguro`, `From wet sludge to a safe solid`, `Del lodo húmedo al sólido seguro`],
    [`A tecnologia entra na linha de lodo que a estação já tem. O lodo é condicionado com o mix, adensa, passa pelo desaguamento e sai como um sólido com menos água e sem liberar poluentes.`,
     `The technology fits into the plant's existing sludge line. The sludge is conditioned with the blend, thickens, goes through dewatering and comes out as a solid with less water that does not release pollutants.`,
     `La tecnología se integra en la línea de lodos que la planta ya tiene. El lodo se acondiciona con la mezcla, se espesa, pasa por la deshidratación y sale como un sólido con menos agua y sin liberar contaminantes.`],
    [`Etapas`, `Steps`, `Etapas`],
    [`Acondicionamento com dosagem controlada do mix`, `Conditioning with controlled dosing of the blend`, `Acondicionamiento con dosificación controlada de la mezcla`],
    [`Adensamento e liberação da água dos flocos`, `Thickening and release of water from the flocs`, `Espesamiento y liberación del agua de los flóculos`],
    [`Desaguamento em filtro de discos ou prensa`, `Dewatering in a disc filter or press`, `Deshidratación en filtro de discos o prensa`],
    [`Sólido pronto para disposição ou valorização`, `A solid ready for disposal or beneficial use`, `Sólido listo para disposición o valorización`],
    [`Integração`, `Integration`, `Integración`],
    [`Aproveita os equipamentos de desaguamento que a estação já usa.`, `Uses the dewatering equipment the plant already has.`, `Aprovecha los equipos de deshidratación que la planta ya usa.`],
    [`3 de 4 · Vantagens`, `3 of 4 · Advantages`, `3 de 4 · Ventajas`],
    [`Menos volume, menos custo, mais segurança`, `Less volume, lower cost, more safety`, `Menos volumen, menos costo, más seguridad`],
    [`O ganho não está só no volume: o metal fica preso no sólido. Por isso o lodo tratado pode seguir para destinações que o lodo bruto não permite.`,
     `The gain is not only in volume: the metal stays locked in the solid. That is why treated sludge can go to destinations that raw sludge cannot.`,
     `La ganancia no está solo en el volumen: el metal queda atrapado en el sólido. Por eso el lodo tratado puede ir a destinos que el lodo crudo no permite.`],
    [`Vantagens`, `Advantages`, `Ventajas`],
    [`Redução de pelo menos 50% na umidade, esperada no piloto`, `At least 50% less moisture, expected in the pilot`, `Reducción de al menos 50% en la humedad, esperada en el piloto`],
    [`Sólido não lixiviável (ABNT NBR 10004)`, `Non-leachable solid (ABNT NBR 10004)`, `Sólido no lixiviable (ABNT NBR 10004)`],
    [`Dosagem média de cerca de 3 mL/L`, `Average dose of about 3 mL/L`, `Dosis media de cerca de 3 mL/L`],
    [`Derivada de uma tecnologia já em escala industrial`, `Derived from a technology already at industrial scale`, `Derivada de una tecnología ya a escala industrial`],
    [`Resultado`, `Result`, `Resultado`],
    [`Menos caminhões, menos aterro e um resíduo que não contamina.`, `Fewer trucks, less landfill and a waste that does not pollute.`, `Menos camiones, menos relleno y un residuo que no contamina.`],
    [`4 de 4 · O piloto`, `4 of 4 · The pilot`, `4 de 4 · El piloto`],
    [`Pronto para testar em campo`, `Ready for field testing`, `Listo para probar en campo`],
    [`Um sistema de desidratação de lodos de até 20 m³/h, em operação contínua, valida a tecnologia nas condições reais de cada estação antes da escala definitiva.`,
     `A sludge dewatering system of up to 20 m³/h, in continuous operation, validates the technology under each plant's real conditions before full scale.`,
     `Un sistema de deshidratación de lodos de hasta 20 m³/h, en operación continua, valida la tecnología en las condiciones reales de cada planta antes de la escala definitiva.`],
    [`Componentes`, `Components`, `Componentes`],
    [`Bombas helicoidais para lodos viscosos`, `Progressive cavity pumps for viscous sludge`, `Bombas helicoidales para lodos viscosos`],
    [`Preparo e dosagem automática do polímero`, `Automatic polymer preparation and dosing`, `Preparación y dosificación automática del polímero`],
    [`Prensa desidratadora ou filtro de discos`, `Dewatering press or disc filter`, `Prensa deshidratadora o filtro de discos`],
    [`Painel de controle automatizado`, `Automated control panel`, `Panel de control automatizado`],
    [`Escala`, `Scale`, `Escala`],
    [`O piloto pode ser redimensionado para vazões menores ou maiores.`, `The pilot can be resized for smaller or larger flows.`, `El piloto puede redimensionarse para caudales menores o mayores.`],
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
    '.tp-imp-list li', '.tp-mapas-src', '.cx .eyebrow', '.cx h3', '.cx h4', '.cx .btn', '.cx-head p', '.cx-tag',
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
})();
