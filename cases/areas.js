/* =====================================================================
   ÁREAS DE ATUAÇÃO – textos da página area.html?eixo=<código>
   ---------------------------------------------------------------------
   Cada área tem: capa, chamada (lead), "o que fazemos", serviços
   principais e "por que fazemos", em pt, en e es.
   Os cases mostrados embaixo vêm de cases/cases.js (campo "eixos").
   O nome de cada área fica em i18n.js (chaves ax.amb, ax.proc …).
   ===================================================================== */
window.GETA_AREAS = {
  "amb": {
    "capa": "img/area-engenharia-ambiental.jpg",
    "lead": {
      "pt": "Diagnóstico, remediação e monitoramento para proteger o meio ambiente e a saúde pública.",
      "en": "Diagnosis, remediation and monitoring to protect the environment and public health.",
      "es": "Diagnóstico, remediación y monitoreo para proteger el medio ambiente y la salud pública."
    },
    "oque": {
      "pt": "Avaliamos impactos, investigamos áreas contaminadas e definimos estratégias de remediação e monitoramento — do levantamento de campo à proposta técnica apresentada aos órgãos ambientais.",
      "en": "We assess impacts, investigate contaminated sites and define remediation and monitoring strategies — from field surveys to the technical proposal submitted to environmental agencies.",
      "es": "Evaluamos impactos, investigamos áreas contaminadas y definimos estrategias de remediación y monitoreo — desde el levantamiento de campo hasta la propuesta técnica presentada a los organismos ambientales."
    },
    "servicos": {
      "pt": ["Investigação e diagnóstico ambiental", "Recuperação de áreas contaminadas", "Análise e mapeamento de odores", "Monitoramento de ar, água e solo"],
      "en": ["Environmental investigation and diagnosis", "Remediation of contaminated sites", "Odor analysis and mapping", "Air, water and soil monitoring"],
      "es": ["Investigación y diagnóstico ambiental", "Recuperación de áreas contaminadas", "Análisis y mapeo de olores", "Monitoreo de aire, agua y suelo"]
    },
    "porque": {
      "pt": "Passivos e impactos ambientais geram riscos legais, financeiros e à saúde. Um diagnóstico bem feito permite agir na causa, priorizar investimentos e demonstrar conformidade com segurança técnica.",
      "en": "Environmental liabilities and impacts create legal, financial and health risks. A sound diagnosis makes it possible to act on the root cause, prioritize investments and demonstrate compliance with technical confidence.",
      "es": "Los pasivos e impactos ambientales generan riesgos legales, financieros y para la salud. Un buen diagnóstico permite actuar sobre la causa, priorizar inversiones y demostrar cumplimiento con seguridad técnica."
    }
  },
  "proc": {
    "capa": "img/area-engenharia-inovacao.jpg",
    "lead": {
      "pt": "Processos industriais mais eficientes, estáveis e econômicos.",
      "en": "More efficient, stable and cost-effective industrial processes.",
      "es": "Procesos industriales más eficientes, estables y económicos."
    },
    "oque": {
      "pt": "Analisamos a operação de plantas e unidades industriais, identificamos gargalos e implementamos melhorias de desempenho, consumo de energia e reagentes e controle de processo.",
      "en": "We analyze the operation of plants and industrial units, identify bottlenecks and implement improvements in performance, energy and reagent consumption and process control.",
      "es": "Analizamos la operación de plantas y unidades industriales, identificamos cuellos de botella e implementamos mejoras de desempeño, consumo de energía y reactivos y control de proceso."
    },
    "servicos": {
      "pt": ["Otimização operacional de ETEs e plantas", "Eficiência energética", "Diagnóstico de gargalos e controle de processo", "Balanços de massa e energia", "Estudos de viabilidade técnico-econômica (CAPEX/OPEX)"],
      "en": ["Operational optimization of WWTPs and plants", "Energy efficiency", "Bottleneck diagnosis and process control", "Mass and energy balances", "Technical and economic feasibility studies (CAPEX/OPEX)"],
      "es": ["Optimización operacional de PTAR y plantas", "Eficiencia energética", "Diagnóstico de cuellos de botella y control de proceso", "Balances de masa y energía"]
    },
    "porque": {
      "pt": "Pequenas ineficiências se transformam em grandes custos ao longo do tempo. Entender o processo a fundo permite produzir mais, gastar menos energia e reagentes e reduzir emissões.",
      "en": "Small inefficiencies turn into large costs over time. Understanding the process in depth makes it possible to produce more, use less energy and reagents and cut emissions.",
      "es": "Las pequeñas ineficiencias se convierten en grandes costos con el tiempo. Entender el proceso a fondo permite producir más, gastar menos energía y reactivos y reducir emisiones."
    }
  },
  "res": {
    "capa": "img/area-tratamento-efluentes.jpg",
    "lead": {
      "pt": "Rotas de tratamento para efluentes, lixiviados, lodos e resíduos complexos.",
      "en": "Treatment routes for complex effluents, leachate, sludge and waste.",
      "es": "Rutas de tratamiento para efluentes, lixiviados, lodos y residuos complejos."
    },
    "oque": {
      "pt": "Selecionamos e desenvolvemos a rota tecnológica mais adequada para cada efluente ou resíduo, com estudos de tratabilidade, projeto e supervisão da operação.",
      "en": "We select and develop the most suitable technology route for each effluent or waste, with treatability studies, design and operational supervision.",
      "es": "Seleccionamos y desarrollamos la ruta tecnológica más adecuada para cada efluente o residuo, con estudios de tratabilidad, proyecto y supervisión de la operación."
    },
    "servicos": {
      "pt": ["Tratamento de lixiviado de aterro", "Efluentes industriais e processos oxidativos avançados", "Estudos de tratabilidade e jar tests", "Inertização de lodos e resíduos", "Tecnologias próprias e patentes"],
      "en": ["Landfill leachate treatment", "Industrial effluents and advanced oxidation processes", "Treatability studies and jar tests", "Sludge and waste inertization", "Proprietary technologies and patents"],
      "es": ["Tratamiento de lixiviado de relleno", "Efluentes industriales y procesos de oxidación avanzada", "Estudios de tratabilidad y jar tests", "Inertización de lodos y residuos", "Tecnologías propias y patentes"]
    },
    "porque": {
      "pt": "Efluentes e resíduos complexos não se resolvem com soluções padrão. Uma rota bem definida garante o atendimento aos limites legais com o menor custo de implantação e de operação.",
      "en": "Complex effluents and waste cannot be solved with off-the-shelf solutions. A well-defined route ensures compliance with legal limits at the lowest installation and operating cost.",
      "es": "Los efluentes y residuos complejos no se resuelven con soluciones estándar. Una ruta bien definida garantiza el cumplimiento de los límites legales con el menor costo de implantación y operación."
    }
  },
  "dig": {
    "capa": "img/area-analises-remotas.jpg",
    "lead": {
      "pt": "Sensores, dados e inteligência artificial para decidir em tempo real.",
      "en": "Sensors, data and artificial intelligence for real-time decisions.",
      "es": "Sensores, datos e inteligencia artificial para decidir en tiempo real."
    },
    "oque": {
      "pt": "Desenvolvemos sensores, sistemas de telemetria, dashboards e modelos de IA que transformam dados de campo e de operação em informação para a tomada de decisão.",
      "en": "We develop sensors, telemetry systems, dashboards and AI models that turn field and operational data into information for decision-making.",
      "es": "Desarrollamos sensores, sistemas de telemetría, dashboards y modelos de IA que transforman datos de campo y de operación en información para la toma de decisiones."
    },
    "servicos": {
      "pt": ["Sensores e monitoramento de odores", "Telemetria por radiofrequência", "Dashboards e indicadores (KPIs)", "Modelos de IA e automação de dados"],
      "en": ["Sensors and odor monitoring", "Radio-frequency telemetry", "Dashboards and indicators (KPIs)", "AI models and data automation"],
      "es": ["Sensores y monitoreo de olores", "Telemetría por radiofrecuencia", "Dashboards e indicadores (KPI)", "Modelos de IA y automatización de datos"]
    },
    "porque": {
      "pt": "Sem dados confiáveis, a operação reage tarde. O monitoramento contínuo e os modelos preditivos antecipam problemas, reduzem custos e dão transparência aos resultados.",
      "en": "Without reliable data, operations react too late. Continuous monitoring and predictive models anticipate problems, reduce costs and make results transparent.",
      "es": "Sin datos confiables, la operación reacciona tarde. El monitoreo continuo y los modelos predictivos anticipan problemas, reducen costos y dan transparencia a los resultados."
    }
  },
  "mod": {
    "capa": "img/cases/capa-cfd-simulacao.jpg",
    "lead": {
      "pt": "Modelos e simulações para projetar e operar com precisão.",
      "en": "Models and simulations to design and operate with precision.",
      "es": "Modelos y simulaciones para proyectar y operar con precisión."
    },
    "oque": {
      "pt": "Construímos modelos de processo, simulações CFD e modelos de ordem reduzida para prever o comportamento de sistemas, dimensionar equipamentos e comparar cenários antes de investir.",
      "en": "We build process models, CFD simulations and reduced-order models to predict system behavior, size equipment and compare scenarios before investing.",
      "es": "Construimos modelos de proceso, simulaciones CFD y modelos de orden reducido para predecir el comportamiento de sistemas, dimensionar equipos y comparar escenarios antes de invertir."
    },
    "servicos": {
      "pt": ["Modelagem e simulação de processos", "CFD e simulação computacional", "Redução de ordem de modelos (DMD)", "Scientific Machine Learning"],
      "en": ["Process modeling and simulation", "CFD and computational simulation", "Reduced-order modeling (DMD)", "Scientific Machine Learning"],
      "es": ["Modelado y simulación de procesos", "CFD y simulación computacional", "Reducción de orden de modelos (DMD)", "Scientific Machine Learning"]
    },
    "porque": {
      "pt": "Testar no modelo é mais rápido e barato do que testar na planta. A simulação reduz incertezas de projeto, evita superdimensionamento e acelera a otimização.",
      "en": "Testing in a model is faster and cheaper than testing in the plant. Simulation reduces design uncertainty, avoids oversizing and speeds up optimization.",
      "es": "Probar en el modelo es más rápido y barato que probar en la planta. La simulación reduce incertidumbres de proyecto, evita el sobredimensionamiento y acelera la optimización."
    }
  }
};
