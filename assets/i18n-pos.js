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
    [`<strong>Mais biometano a partir da mesma vinhaça.</strong> O POS usa o <strong>CO₂ da própria usina</strong>, ativado em um reator de plasma, para quebrar só os compostos que travam a biodigestão e <strong>preservar a matéria orgânica que vira metano</strong>.`,
     `<strong>More biomethane from the same vinasse.</strong> The SOP uses <strong>the plant's own CO₂</strong>, activated in a plasma reactor, to break down only the compounds that block anaerobic digestion and <strong>keep the organic matter that becomes methane</strong>.`,
     `<strong>Más biometano a partir de la misma vinaza.</strong> El POS usa el <strong>CO₂ de la propia planta</strong>, activado en un reactor de plasma, para romper solo los compuestos que traban la biodigestión y <strong>preservar la materia orgánica que se vuelve metano</strong>.`],
    [`Patente de invenção depositada · 10 reivindicações`, `Invention patent filed · 10 claims`, `Patente de invención presentada · 10 reivindicaciones`],
    [`CO₂ como insumo do processo`, `CO₂ as a process input`, `CO₂ como insumo del proceso`],
    [`Pré-tratamento antes do biodigestor`, `Pre-treatment before the digester`, `Pretratamiento antes del biodigestor`],

    // ---- O problema da vinhaça
    [`O problema da vinhaça`, `The vinasse problem`, `El problema de la vinaza`],
    [`Muita energia que a biodigestão não consegue aproveitar`, `A lot of energy that digestion cannot capture`, `Mucha energía que la biodigestión no logra aprovechar`],
    [`1 de 3 · Volume`, `1 of 3 · Volume`, `1 de 3 · Volumen`],
    [`Um resíduo gerado em grande escala`, `A waste generated on a large scale`, `Un residuo generado a gran escala`],
    [`Para cada litro de etanol, a destilação gera vários litros de vinhaça, um líquido escuro e rico em matéria orgânica. Ela pode virar biogás e biometano em biodigestores, mas o aproveitamento costuma ficar abaixo do possível.`,
     `For every litre of ethanol, distillation produces several litres of vinasse, a dark liquid rich in organic matter. It can be turned into biogas and biomethane in digesters, but the yield usually falls short of what is possible.`,
     `Por cada litro de etanol, la destilación genera varios litros de vinaza, un líquido oscuro y rico en materia orgánica. Puede convertirse en biogás y biometano en biodigestores, pero el aprovechamiento suele quedar por debajo de lo posible.`],
    [`Grandes volumes em toda safra`, `Large volumes every harvest`, `Grandes volúmenes en cada zafra`],
    [`Alta carga orgânica`, `High organic load`, `Alta carga orgánica`],
    [`Matéria-prima para biogás e biometano`, `Feedstock for biogas and biomethane`, `Materia prima para biogás y biometano`],
    [`Potencial energético desperdiçado`, `Wasted energy potential`, `Potencial energético desperdiciado`],
    [`Por que importa`, `Why it matters`, `Por qué importa`],
    [`Cada metro cúbico de vinhaça que não vira metano é energia que a usina deixa de gerar.`,
     `Every cubic metre of vinasse that does not become methane is energy the plant fails to generate.`,
     `Cada metro cúbico de vinaza que no se vuelve metano es energía que la planta deja de generar.`],
    [`2 de 3 · Inibidores`, `2 of 3 · Inhibitors`, `2 de 3 · Inhibidores`],
    [`Compostos escuros que travam a biodigestão`, `Dark compounds that block digestion`, `Compuestos oscuros que traban la biodigestión`],
    [`O calor da destilação forma as melanoidinas, que dão a cor escura à vinhaça. Elas e as fibras da cana são difíceis de degradar e atrapalham os microrganismos que produzem o metano.`,
     `The heat of distillation forms melanoidins, which give vinasse its dark colour. They and the cane fibres are hard to degrade and hinder the microorganisms that produce methane.`,
     `El calor de la destilación forma las melanoidinas, que dan el color oscuro a la vinaza. Ellas y las fibras de la caña son difíciles de degradar y entorpecen a los microorganismos que producen el metano.`],
    [`Melanoidinas formadas no calor da destilação`, `Melanoidins formed by distillation heat`, `Melanoidinas formadas por el calor de la destilación`],
    [`Fibras difíceis de quebrar`, `Fibres that are hard to break down`, `Fibras difíciles de romper`],
    [`Microrganismos inibidos`, `Inhibited microorganisms`, `Microorganismos inhibidos`],
    [`Menos metano por metro cúbico`, `Less methane per cubic metre`, `Menos metano por metro cúbico`],
    [`Remover esse freio é o que libera o potencial da vinhaça.`, `Removing this brake is what unlocks the vinasse's potential.`, `Quitar ese freno es lo que libera el potencial de la vinaza.`],
    [`3 de 3 · Tratamentos atuais`, `3 of 3 · Current treatments`, `3 de 3 · Tratamientos actuales`],
    [`Oxidar tudo custa caro e desperdiça`, `Oxidizing everything is costly and wasteful`, `Oxidar todo es caro y desperdicia`],
    [`Os pré-tratamentos comuns, como ozônio, persulfato e peróxido, oxidam sem escolher: consomem muito reagente e destroem também a matéria orgânica que viraria metano.`,
     `Common pre-treatments, such as ozone, persulfate and peroxide, oxidize indiscriminately: they consume a lot of reagent and also destroy the organic matter that would become methane.`,
     `Los pretratamientos comunes, como ozono, persulfato y peróxido, oxidan sin elegir: consumen mucho reactivo y destruyen también la materia orgánica que se volvería metano.`],
    [`Alto consumo de reagentes`, `High reagent consumption`, `Alto consumo de reactivos`],
    [`Destroem parte do substrato`, `They destroy part of the substrate`, `Destruyen parte del sustrato`],
    [`Custo operacional elevado`, `High operating cost`, `Costo operativo elevado`],
    [`Ganho de metano limitado`, `Limited methane gain`, `Ganancia de metano limitada`],
    [`É preciso oxidar só o que atrapalha.`, `Only what gets in the way should be oxidized.`, `Hay que oxidar solo lo que estorba.`],
    [`Imagens ilustrativas.`, `Illustrative images.`, `Imágenes ilustrativas.`],

    // ---- Solução GETA
    [`Solução GETA`, `GETA solution`, `Solución GETA`],
    [`Oxidar só o que atrapalha, com o CO₂ da própria usina`, `Oxidize only what gets in the way, with the plant's own CO₂`, `Oxidar solo lo que estorba, con el CO₂ de la propia planta`],
    [`1 de 4 · Como funciona`, `1 of 4 · How it works`, `1 de 4 · Cómo funciona`],
    [`Uma oxidação que escolhe o alvo`, `An oxidation that picks its target`, `Una oxidación que elige el objetivo`],
    [`O CO₂ é ativado em um reator de plasma e, em contato com a vinhaça, forma radicais carbonato. Eles atacam os compostos escuros que travam a digestão e deixam de lado a matéria orgânica simples.`,
     `CO₂ is activated in a plasma reactor and, in contact with the vinasse, forms carbonate radicals. They attack the dark compounds that block digestion and leave the simple organic matter alone.`,
     `El CO₂ se activa en un reactor de plasma y, en contacto con la vinaza, forma radicales carbonato. Atacan los compuestos oscuros que traban la digestión y dejan de lado la materia orgánica simple.`],
    [`O que acontece`, `What happens`, `Qué ocurre`],
    [`O CO₂ é ativado no plasma`, `CO₂ is activated in the plasma`, `El CO₂ se activa en el plasma`],
    [`Formam-se radicais carbonato`, `Carbonate radicals form`, `Se forman radicales carbonato`],
    [`As melanoidinas e as fibras são quebradas`, `Melanoidins and fibres are broken down`, `Las melanoidinas y las fibras se rompen`],
    [`A matéria orgânica fica preservada`, `The organic matter is preserved`, `La materia orgánica queda preservada`],
    [`Em resumo`, `In short`, `En resumen`],
    [`A vinhaça chega ao biodigestor sem o freio dos inibidores.`, `The vinasse reaches the digester without the inhibitors' brake.`, `La vinaza llega al biodigestor sin el freno de los inhibidores.`],
    [`2 de 4 · O processo`, `2 of 4 · The process`, `2 de 4 · El proceso`],
    [`Quatro etapas simples`, `Four simple steps`, `Cuatro etapas simples`],
    [`O POS entra antes do biodigestor e usa um insumo que a usina já tem: o CO₂ do biogás.`, `The SOP comes before the digester and uses an input the plant already has: the CO₂ from the biogas.`, `El POS entra antes del biodigestor y usa un insumo que la planta ya tiene: el CO₂ del biogás.`],
    [`Etapas`, `Steps`, `Etapas`],
    [`Capturar: o CO₂ separado no biogás`, `Capture: the CO₂ separated from the biogas`, `Capturar: el CO₂ separado en el biogás`],
    [`Ativar: o CO₂ em um reator de plasma`, `Activate: the CO₂ in a plasma reactor`, `Activar: el CO₂ en un reactor de plasma`],
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
    [`CO₂ reaproveitado, em vez de descartado`, `CO₂ reused instead of discarded`, `CO₂ reaprovechado, en lugar de descartado`],
    [`Mais biometano e menos emissões.`, `More biomethane and fewer emissions.`, `Más biometano y menos emisiones.`],
    [`4 de 4 · Integração à usina`, `4 of 4 · Integration into the plant`, `4 de 4 · Integración a la planta`],
    [`Um circuito fechado de CO₂`, `A closed CO₂ loop`, `Un circuito cerrado de CO₂`],
    [`O reator POS fica antes do biodigestor. O CO₂ separado no upgrading do biogás, que antes era descartado, volta ao processo como insumo.`,
     `The SOP reactor sits before the digester. The CO₂ separated in biogas upgrading, which used to be discarded, returns to the process as an input.`,
     `El reactor POS está antes del biodigestor. El CO₂ separado en el upgrading del biogás, que antes se descartaba, vuelve al proceso como insumo.`],
    [`Como se integra`, `How it fits in`, `Cómo se integra`],
    [`A vinhaça passa pelo reator POS`, `The vinasse goes through the SOP reactor`, `La vinaza pasa por el reactor POS`],
    [`Segue para o biodigestor`, `It moves on to the digester`, `Sigue al biodigestor`],
    [`O biogás é purificado em biometano`, `The biogas is upgraded to biomethane`, `El biogás se purifica en biometano`],
    [`O CO₂ separado volta ao reator`, `The separated CO₂ returns to the reactor`, `El CO₂ separado vuelve al reactor`],
    [`Economia circular`, `Circular economy`, `Economía circular`],
    [`O próprio CO₂ da usina vira insumo do tratamento.`, `The plant's own CO₂ becomes a treatment input.`, `El propio CO₂ de la planta se vuelve insumo del tratamiento.`],
    [`Tecnologia protegida por patente de invenção depositada (10 reivindicações).`, `Technology protected by a filed invention patent (10 claims).`, `Tecnología protegida por patente de invención presentada (10 reivindicaciones).`],

    // ---- Na prática (vídeo)
    [`Na prática`, `In practice`, `En la práctica`],
    [`A vinhaça <span class="cx-hl3">perde a cor escura</span>`, `The vinasse <span class="cx-hl3">loses its dark colour</span>`, `La vinaza <span class="cx-hl3">pierde el color oscuro</span>`],
    [`Ensaio de oxidação seletiva: à esquerda, a vinhaça em tratamento clareia; à direita, a mesma vinhaça sem tratamento continua escura.`,
     `Selective oxidation test: on the left, the vinasse under treatment turns lighter; on the right, the same untreated vinasse stays dark.`,
     `Ensayo de oxidación selectiva: a la izquierda, la vinaza en tratamiento se aclara; a la derecha, la misma vinaza sin tratamiento sigue oscura.`],
    [`<i></i>Vinhaça em tratamento`, `<i></i>Vinasse under treatment`, `<i></i>Vinaza en tratamiento`],
    [`A cor escura vem das melanoidinas`, `The dark colour comes from melanoidins`, `El color oscuro viene de las melanoidinas`],
    [`São os compostos que travam a biodigestão. Quando a cor some, é sinal de que eles foram quebrados, e a vinhaça chega ao biodigestor sem esse freio.`,
     `They are the compounds that block digestion. When the colour fades, it means they have been broken down, and the vinasse reaches the digester without that brake.`,
     `Son los compuestos que traban la biodigestión. Cuando el color desaparece, es señal de que se rompieron, y la vinaza llega al biodigestor sin ese freno.`],
    [`Ataque seletivo às melanoidinas`, `Selective attack on melanoidins`, `Ataque selectivo a las melanoidinas`],
    [`Matéria orgânica preservada`, `Organic matter preserved`, `Materia orgánica preservada`],

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
    [`CO₂ reaproveitado`, `CO₂ reused`, `CO₂ reaprovechado`],
    [`O CO₂ do upgrading volta ao processo, em vez de ir para a atmosfera.`, `The CO₂ from upgrading returns to the process instead of going into the atmosphere.`, `El CO₂ del upgrading vuelve al proceso, en lugar de ir a la atmósfera.`],
    [`Menos reagente`, `Less reagent`, `Menos reactivo`],
    [`A oxidação acontece só onde é necessária.`, `Oxidation happens only where it is needed.`, `La oxidación ocurre solo donde es necesaria.`],

    // ---- Traga a sua vinhaça
    [`Traga a sua vinhaça`, `Bring us your vinasse`, `Tráiganos su vinaza`],
    [`Nós definimos a rota de ação`, `We define the course of action`, `Nosotros definimos la ruta de acción`],
    [`Cada vinhaça é diferente. Envie uma amostra: avaliamos em laboratório o potencial de metano antes e depois do POS e propomos a configuração certa para a sua usina.`,
     `Every vinasse is different. Send us a sample: we assess its methane potential in the laboratory before and after the SOP and propose the right setup for your plant.`,
     `Cada vinaza es diferente. Envíenos una muestra: evaluamos en laboratorio el potencial de metano antes y después del POS y proponemos la configuración adecuada para su planta.`],
    [`Análise da amostra e ensaio de bancada`, `Sample analysis and bench test`, `Análisis de la muestra y ensayo de laboratorio`],
    [`Potencial de metano antes e depois`, `Methane potential before and after`, `Potencial de metano antes y después`],
    [`Piloto antes da escala real`, `Pilot before full scale`, `Piloto antes de la escala real`],
    [`Fale com um especialista`, `Talk to a specialist`, `Hable con un especialista`],
    [`Cases relacionados`, `Related cases`, `Casos relacionados`],
  ];

  // Onde procurar os textos (sem tocar no que já tem data-i18n)
  const SEL = ['.tp-hero .eyebrow', '.tp-hero .lead', '.tp-badges>span', '.tp-mapas-head .eyebrow', '.tp-mapas-head h2',
    '.tp-mapas-tag', '.tp-mapas-txt h3', '.tp-mapas-txt article>p', '.tp-mapas-geta>b', '.tp-mapas-geta>p', '.tp-list-t',
    '.tp-imp-list li', '.tp-mapas-src', '.cx .eyebrow', '.cx h3', '.cx h4', '.cx .btn', '.cx-head p', '.cx-tag',
    '.cx-checks li', '.cx-proof-txt p', '.cx-pot-c p', '.cx-cta p', '.tp-strip h3'].join(',');
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
