/* =====================================================================
   REGISTRO DOS CASES – GETA (seção Soluções da home)
   ---------------------------------------------------------------------
   Cada case tem uma página própria em cases/<slug>.html.
   Aqui ficam os dados usados nos cards da seção Soluções e no topo da página:

     slug     nome do arquivo (cases/<slug>.html) – sem acentos nem espaços
     eixos    1 a 4 eixos; o primeiro é o principal
              amb  = Engenharia Ambiental
              proc = Engenharia de Processos
              res  = Tratamento de Resíduos e Efluentes
              dig  = Engenharia Digital e IA
              mod  = Modelagem e Otimização
              rd   = Estudos Técnico-Econômicos e P&D
     capa     imagem de capa (caminho a partir da raiz do site)
     cliente  nome do cliente ("" = não exibir / confidencial)
     ano      ano ou período ("" = não exibir)
     status   "rascunho"  -> mostra a estrutura completa com os campos a preencher
              "publicado" -> esconde seções e campos que ainda estiverem vazios
     titulo / resumo   textos em pt, en e es (se faltar en/es, usa o pt)
     tags     tecnologias e processos (aparecem na seção 06 e nos cards)

   Novo case: copie um bloco, mude o slug e rode
       python tools/novo_case.py
   para criar a página a partir do modelo (cases/_modelo.html).
   Atenção: o conteúdo entre [ e ] precisa ser JSON válido
   (aspas duplas, sem vírgula depois do último item).
   ===================================================================== */
window.GETA_CASES =
[
  {
    "slug": "ete-lixiviado-1000",
    "eixos": ["res", "proc"],
    "capa": "img/sol-chorume.jpg",
    "cliente": "",
    "ano": "",
    "status": "rascunho",
    "titulo": {
      "pt": "ETE para lixiviado de aterro (~1.000 m³/d)",
      "en": "Landfill leachate treatment plant (~1,000 m³/d)",
      "es": "Planta de tratamiento de lixiviado de relleno (~1.000 m³/d)"
    },
    "resumo": {
      "pt": "Concepção, projeto e acompanhamento operacional de uma estação de tratamento de lixiviado de aterro sanitário com vazão da ordem de 1.000 m³/d.",
      "en": "Concept, design and operational follow-up of a landfill leachate treatment plant with a flow rate of around 1,000 m³/d.",
      "es": "Concepción, proyecto y seguimiento operacional de una planta de tratamiento de lixiviado de relleno sanitario con caudal del orden de 1.000 m³/d."
    },
    "tags": ["Lixiviado de aterro", "Flotação", "Nitrificação", "Oxidação química", "Carvão ativado"]
  },
  {
    "slug": "tratamento-fenol-ozonio",
    "eixos": ["res", "amb", "mod", "rd"],
    "capa": "img/cases/capa-tratamento-fenol-ozonio.jpg",
    "cliente": "",
    "ano": "2026",
    "status": "publicado",
    "titulo": {
      "pt": "Tratamento e redução de fenol por ozonização",
      "en": "Phenol treatment and reduction by ozonation",
      "es": "Tratamiento y reducción de fenol por ozonización"
    },
    "resumo": {
      "pt": "Avaliação de carvão ativado e ozonização, ensaios cinéticos e bases de projeto de um sistema de ozônio para um efluente com alta carga de fenol no estado de São Paulo.",
      "en": "Assessment of activated carbon and ozonation, kinetic tests and design basis of an ozone system for an effluent with a high phenol load in the state of São Paulo.",
      "es": "Evaluación de carbón activado y ozonización, ensayos cinéticos y bases de proyecto de un sistema de ozono para un efluente con alta carga de fenol en el estado de São Paulo."
    },
    "tags": ["Ozonização (POA)", "Oxigênio PSA", "Injeção Venturi", "Carvão ativado granular", "Cinética de 2ª ordem", "Equalização", "Controle PID/VDF"]
  },
  {
    "slug": "nevoa-fria-controle-odores",
    "eixos": ["amb", "res", "rd"],
    "capa": "img/cases/capa-nevoa-fria-controle-odores.jpg",
    "cliente": "",
    "ano": "2026",
    "status": "publicado",
    "titulo": {
      "pt": "Névoa fria de alta pressão para controle de odores",
      "en": "High-pressure cold fog for odor control",
      "es": "Niebla fría de alta presión para control de olores"
    },
    "resumo": {
      "pt": "Sistema de nebulização com água de reúso sobre um tanque aberto de chorume, para reduzir emissões fugitivas de NH₃ e H₂S sem uso de produtos químicos.",
      "en": "Misting system using reclaimed water over an open leachate tank to reduce fugitive NH₃ and H₂S emissions without chemicals.",
      "es": "Sistema de nebulización con agua de reúso sobre un tanque abierto de lixiviado, para reducir emisiones fugitivas de NH₃ y H₂S sin productos químicos."
    },
    "tags": ["Névoa fria", "Nebulização de alta pressão", "Água de reúso", "Controle de odores", "NH₃ e H₂S", "Estrutura metálica"]
  },
  {
    "slug": "quebra-acida-efluente-oleoso",
    "eixos": ["res", "proc"],
    "capa": "img/cases/capa-quebra-acida-efluente-oleoso.jpg",
    "cliente": "",
    "ano": "2026",
    "status": "publicado",
    "titulo": {
      "pt": "Quebra ácida e otimização de DAF para efluentes oleosos",
      "en": "Acid cracking and DAF optimization for oily effluents",
      "es": "Quiebra ácida y optimización de DAF para efluentes aceitosos"
    },
    "resumo": {
      "pt": "Diagnóstico de uma linha de efluentes oleosos, ensaios de quebra ácida de emulsões e proposta de sistema automatizado com controle de pH e nova rota química para o DAF.",
      "en": "Diagnosis of an oily effluent line, acid-cracking tests for emulsions and a proposal for an automated pH-controlled system and a new chemical route for the DAF.",
      "es": "Diagnóstico de una línea de efluentes aceitosos, ensayos de quiebra ácida de emulsiones y propuesta de un sistema automatizado con control de pH y nueva ruta química para el DAF."
    },
    "tags": ["Quebra ácida", "Emulsões óleo-água", "Flotação por ar dissolvido (DAF)", "Coagulação/floculação", "Controle de pH", "Misturador estático", "Skimmers"]
  },
  {
    "slug": "tecnologia-lixiviado-patente",
    "eixos": ["rd", "res"],
    "capa": "img/hero-laboratorio.jpg",
    "cliente": "",
    "ano": "",
    "status": "rascunho",
    "titulo": {
      "pt": "Tecnologia própria para tratamento de lixiviado (patente)",
      "en": "Proprietary leachate treatment technology (patent)",
      "es": "Tecnología propia para el tratamiento de lixiviado (patente)"
    },
    "resumo": {
      "pt": "Desenvolvimento de uma rota físico-química avançada para lixiviado, sem dependência de sistemas biológicos, protegida por patente.",
      "en": "Development of an advanced physicochemical route for leachate, with no reliance on biological systems, protected by a patent.",
      "es": "Desarrollo de una ruta fisicoquímica avanzada para lixiviado, sin dependencia de sistemas biológicos, protegida por patente."
    },
    "tags": ["Processos físico-químicos", "Lixiviado", "P&D", "Propriedade intelectual"]
  },
  {
    "slug": "otimizacao-ete-attend",
    "eixos": ["proc", "res"],
    "capa": "img/area-plantas-saneamento.jpg",
    "cliente": "Attend",
    "ano": "",
    "status": "rascunho",
    "titulo": {
      "pt": "Otimização operacional de ETE – Attend",
      "en": "WWTP operational optimization – Attend",
      "es": "Optimización operacional de PTAR – Attend"
    },
    "resumo": {
      "pt": "Diagnóstico e otimização da operação de uma ETE, com foco em desempenho, estabilidade do processo e custos operacionais.",
      "en": "Diagnosis and optimization of a WWTP's operation, focused on performance, process stability and operating costs.",
      "es": "Diagnóstico y optimización de la operación de una PTAR, con foco en desempeño, estabilidad del proceso y costos operacionales."
    },
    "tags": ["ETE", "Diagnóstico operacional", "Controle de processo", "Indicadores"]
  },
  {
    "slug": "efluente-lignocelulosico-poa",
    "eixos": ["res", "rd"],
    "capa": "img/sol-efluentes-complexos.jpg",
    "cliente": "",
    "ano": "",
    "status": "rascunho",
    "titulo": {
      "pt": "Tratamento de efluentes lignocelulósicos por POA",
      "en": "Lignocellulosic effluent treatment by AOP",
      "es": "Tratamiento de efluentes lignocelulósicos por POA"
    },
    "resumo": {
      "pt": "Avaliação e desenvolvimento de processos oxidativos avançados (POA/AOP) para efluentes ricos em compostos lignocelulósicos recalcitrantes.",
      "en": "Assessment and development of advanced oxidation processes (AOP) for effluents rich in recalcitrant lignocellulosic compounds.",
      "es": "Evaluación y desarrollo de procesos de oxidación avanzada (POA) para efluentes ricos en compuestos lignocelulósicos recalcitrantes."
    },
    "tags": ["POA/AOP", "Efluente lignocelulósico", "Compostos recalcitrantes", "Ensaios de bancada"]
  },
  {
    "slug": "tratabilidade-jar-test",
    "eixos": ["res", "proc"],
    "capa": "img/area-tratamento-efluentes.jpg",
    "cliente": "",
    "ano": "",
    "status": "rascunho",
    "titulo": {
      "pt": "Estudos de tratabilidade e jar tests",
      "en": "Treatability studies and jar tests",
      "es": "Estudios de tratabilidad y jar tests"
    },
    "resumo": {
      "pt": "Ensaios de bancada para definir rotas de tratamento, reagentes e dosagens ótimas para diferentes efluentes.",
      "en": "Bench-scale tests to define treatment routes, reagents and optimal dosages for different effluents.",
      "es": "Ensayos de laboratorio para definir rutas de tratamiento, reactivos y dosis óptimas para distintos efluentes."
    },
    "tags": ["Jar test", "Coagulação/floculação", "Ensaios de bancada", "Seleção de reagentes"]
  },
  {
    "slug": "secagem-mineracao-cobre",
    "eixos": ["proc", "mod"],
    "capa": "img/cases/capa-secagem-mineracao-cobre.jpg",
    "cliente": "",
    "ano": "",
    "status": "rascunho",
    "titulo": {
      "pt": "Eficiência energética na secagem – mineração de cobre",
      "en": "Energy efficiency in drying – copper mining",
      "es": "Eficiencia energética en el secado – minería del cobre"
    },
    "resumo": {
      "pt": "Estudo de eficiência energética do processo de secagem na mineração de cobre, com balanços de energia e identificação de oportunidades de ganho.",
      "en": "Energy efficiency study of the drying process in copper mining, with energy balances and identification of improvement opportunities.",
      "es": "Estudio de eficiencia energética del proceso de secado en la minería del cobre, con balances de energía e identificación de oportunidades de mejora."
    },
    "tags": ["Secagem", "Eficiência energética", "Balanço de energia", "Mineração de cobre"]
  },
  {
    "slug": "areas-contaminadas-metais",
    "eixos": ["amb"],
    "capa": "img/area-engenharia-ambiental.jpg",
    "cliente": "",
    "ano": "",
    "status": "rascunho",
    "titulo": {
      "pt": "Recuperação de áreas contaminadas por metais pesados",
      "en": "Remediation of heavy-metal contaminated sites",
      "es": "Recuperación de áreas contaminadas por metales pesados"
    },
    "resumo": {
      "pt": "Diagnóstico e definição de estratégias de remediação para solos e águas impactados por metais pesados.",
      "en": "Diagnosis and definition of remediation strategies for soil and water impacted by heavy metals.",
      "es": "Diagnóstico y definición de estrategias de remediación para suelos y aguas impactados por metales pesados."
    },
    "tags": ["Áreas contaminadas", "Metais pesados", "Remediação", "Investigação ambiental"]
  },
  {
    "slug": "inertizacao-residuos-sabesp",
    "eixos": ["res", "rd"],
    "capa": "img/sol-lodos.jpg",
    "cliente": "SABESP",
    "ano": "",
    "status": "rascunho",
    "titulo": {
      "pt": "Tecnologias de inertização de resíduos – SABESP",
      "en": "Waste inertization technologies – SABESP",
      "es": "Tecnologías de inertización de residuos – SABESP"
    },
    "resumo": {
      "pt": "Desenvolvimento de rotas de inertização baseadas em encapsulamento químico de metais para lodos e resíduos.",
      "en": "Development of inertization routes based on chemical encapsulation of metals for sludge and waste.",
      "es": "Desarrollo de rutas de inertización basadas en encapsulamiento químico de metales para lodos y residuos."
    },
    "tags": ["Inertização", "Encapsulamento químico", "Lodos", "Resíduos"]
  },
  {
    "slug": "viabilidade-etes-copasa",
    "eixos": ["rd", "res"],
    "capa": "img/hero-estacao-tratamento.jpg",
    "cliente": "COPASA/MG",
    "ano": "",
    "status": "rascunho",
    "titulo": {
      "pt": "Viabilidade técnico-econômica de ETEs – COPASA/MG",
      "en": "Technical-economic feasibility of WWTPs – COPASA/MG",
      "es": "Viabilidad técnico-económica de PTAR – COPASA/MG"
    },
    "resumo": {
      "pt": "Estudo de alternativas tecnológicas, CAPEX e OPEX para a implantação de estações de tratamento de esgoto.",
      "en": "Study of technology alternatives, CAPEX and OPEX for the implementation of wastewater treatment plants.",
      "es": "Estudio de alternativas tecnológicas, CAPEX y OPEX para la implantación de plantas de tratamiento de aguas residuales."
    },
    "tags": ["ETE", "Estudo de viabilidade", "CAPEX/OPEX", "Alternativas tecnológicas"]
  },
  {
    "slug": "sensoriamento-remoto-odores",
    "eixos": ["amb", "dig"],
    "capa": "img/area-analises-remotas.jpg",
    "cliente": "",
    "ano": "",
    "status": "rascunho",
    "titulo": {
      "pt": "Sensoriamento remoto aplicado à análise de odores",
      "en": "Remote sensing applied to odor analysis",
      "es": "Teledetección aplicada al análisis de olores"
    },
    "resumo": {
      "pt": "Uso de dados de sensoriamento remoto para mapear, analisar e acompanhar fontes e dispersão de odores.",
      "en": "Use of remote sensing data to map, analyze and track odor sources and dispersion.",
      "es": "Uso de datos de teledetección para mapear, analizar y seguir fuentes y dispersión de olores."
    },
    "tags": ["Sensoriamento remoto", "Odores", "Geoprocessamento", "Dispersão atmosférica"]
  },
  {
    "slug": "sensores-odores",
    "eixos": ["dig", "rd"],
    "capa": "img/sol-gases.jpg",
    "cliente": "",
    "ano": "",
    "status": "rascunho",
    "titulo": {
      "pt": "Desenvolvimento de sensores para monitoramento de odores",
      "en": "Development of sensors for odor monitoring",
      "es": "Desarrollo de sensores para monitoreo de olores"
    },
    "resumo": {
      "pt": "Concepção e desenvolvimento de sensores para a medição contínua de compostos odoríferos.",
      "en": "Design and development of sensors for continuous measurement of odorous compounds.",
      "es": "Concepción y desarrollo de sensores para la medición continua de compuestos odoríferos."
    },
    "tags": ["Sensores", "Odores", "Eletrônica", "Calibração"]
  },
  {
    "slug": "comunicacao-rf-monitoramento",
    "eixos": ["dig"],
    "capa": "img/cases/capa-comunicacao-rf-monitoramento.jpg",
    "cliente": "",
    "ano": "",
    "status": "rascunho",
    "titulo": {
      "pt": "Comunicação por radiofrequência para monitoramento ambiental",
      "en": "Radio-frequency communication for environmental monitoring",
      "es": "Comunicación por radiofrecuencia para monitoreo ambiental"
    },
    "resumo": {
      "pt": "Sistemas de telemetria por radiofrequência para transmitir dados de sensores instalados em campo.",
      "en": "Radio-frequency telemetry systems to transmit data from sensors installed in the field.",
      "es": "Sistemas de telemetría por radiofrecuencia para transmitir datos de sensores instalados en campo."
    },
    "tags": ["Radiofrequência", "Telemetria", "IoT", "Redes de sensores"]
  },
  {
    "slug": "chorume-redes-neurais",
    "eixos": ["dig", "mod"],
    "capa": "img/cases/capa-chorume-redes-neurais.jpg",
    "cliente": "",
    "ano": "",
    "status": "rascunho",
    "titulo": {
      "pt": "Estimativa de geração de chorume com redes neurais",
      "en": "Leachate generation forecasting with neural networks",
      "es": "Estimación de generación de lixiviado con redes neuronales"
    },
    "resumo": {
      "pt": "Modelos de redes neurais para estimar a geração de chorume a partir de dados climáticos e operacionais do aterro.",
      "en": "Neural network models to estimate leachate generation from the landfill's climate and operational data.",
      "es": "Modelos de redes neuronales para estimar la generación de lixiviado a partir de datos climáticos y operacionales del relleno."
    },
    "tags": ["Redes neurais", "Chorume", "Séries temporais", "Aterro sanitário"]
  },
  {
    "slug": "dashboards-kpi",
    "eixos": ["dig"],
    "capa": "img/sol-monitoramento.jpg",
    "cliente": "",
    "ano": "",
    "status": "rascunho",
    "titulo": {
      "pt": "Dashboards e sistemas de KPI para plantas industriais",
      "en": "Dashboards and KPI systems for industrial plants",
      "es": "Dashboards y sistemas de KPI para plantas industriales"
    },
    "resumo": {
      "pt": "Painéis e indicadores de desempenho para acompanhar a operação de plantas industriais em tempo real.",
      "en": "Dashboards and performance indicators to track industrial plant operation in real time.",
      "es": "Paneles e indicadores de desempeño para seguir la operación de plantas industriales en tiempo real."
    },
    "tags": ["Dashboards", "KPIs", "Visualização de dados", "Monitoramento"]
  },
  {
    "slug": "automacao-monitoramento",
    "eixos": ["dig", "proc"],
    "capa": "img/area-engenharia-inovacao.jpg",
    "cliente": "",
    "ano": "",
    "status": "rascunho",
    "titulo": {
      "pt": "Automação de sistemas de informação e monitoramento operacional",
      "en": "Information system automation and operational monitoring",
      "es": "Automatización de sistemas de información y monitoreo operacional"
    },
    "resumo": {
      "pt": "Automação da coleta, integração e tratamento de dados operacionais para apoiar a tomada de decisão.",
      "en": "Automation of operational data collection, integration and processing to support decision-making.",
      "es": "Automatización de la recolección, integración y tratamiento de datos operacionales para apoyar la toma de decisiones."
    },
    "tags": ["Automação", "Integração de dados", "Monitoramento operacional", "Sistemas de informação"]
  },
  {
    "slug": "modelagem-simulacao-processos",
    "eixos": ["mod", "proc"],
    "capa": "img/cases/capa-modelagem-simulacao-processos.jpg",
    "cliente": "",
    "ano": "",
    "status": "rascunho",
    "titulo": {
      "pt": "Modelagem e simulação de processos",
      "en": "Process modeling and simulation",
      "es": "Modelado y simulación de procesos"
    },
    "resumo": {
      "pt": "Modelos de processo para prever desempenho, dimensionar equipamentos e avaliar cenários operacionais.",
      "en": "Process models to predict performance, size equipment and evaluate operating scenarios.",
      "es": "Modelos de proceso para predecir el desempeño, dimensionar equipos y evaluar escenarios operacionales."
    },
    "tags": ["Modelagem de processos", "Simulação", "Análise de cenários"]
  },
  {
    "slug": "balancos-massa-energia",
    "eixos": ["mod", "proc"],
    "capa": "img/cases/capa-balancos-massa-energia.jpg",
    "cliente": "",
    "ano": "",
    "status": "rascunho",
    "titulo": {
      "pt": "Balanços de massa e energia",
      "en": "Mass and energy balances",
      "es": "Balances de masa y energía"
    },
    "resumo": {
      "pt": "Balanços de massa e energia para dimensionamento, diagnóstico e otimização de processos.",
      "en": "Mass and energy balances for process sizing, diagnosis and optimization.",
      "es": "Balances de masa y energía para el dimensionamiento, diagnóstico y optimización de procesos."
    },
    "tags": ["Balanço de massa", "Balanço de energia", "Dimensionamento"]
  },
  {
    "slug": "cfd-simulacao",
    "eixos": ["mod"],
    "capa": "img/cases/capa-cfd-simulacao.jpg",
    "cliente": "",
    "ano": "",
    "status": "rascunho",
    "titulo": {
      "pt": "CFD e simulação computacional",
      "en": "CFD and computational simulation",
      "es": "CFD y simulación computacional"
    },
    "resumo": {
      "pt": "Simulação fluidodinâmica computacional de escoamento, mistura e transferência de massa e calor em equipamentos e unidades.",
      "en": "Computational fluid dynamics of flow, mixing and heat and mass transfer in equipment and units.",
      "es": "Simulación fluidodinámica computacional de flujo, mezcla y transferencia de masa y calor en equipos y unidades."
    },
    "tags": ["CFD", "Escoamento", "Mistura", "Simulação computacional"]
  },
  {
    "slug": "reducao-ordem-dmd",
    "eixos": ["mod", "dig"],
    "capa": "img/cases/capa-reducao-ordem-dmd.jpg",
    "cliente": "",
    "ano": "",
    "status": "rascunho",
    "titulo": {
      "pt": "Redução de ordem de modelos com DMD",
      "en": "Reduced-order modeling with DMD",
      "es": "Reducción de orden de modelos con DMD"
    },
    "resumo": {
      "pt": "Decomposição em modos dinâmicos (DMD) para obter modelos reduzidos e rápidos a partir de simulações ou dados.",
      "en": "Dynamic mode decomposition (DMD) to build fast reduced-order models from simulations or data.",
      "es": "Descomposición en modos dinámicos (DMD) para obtener modelos reducidos y rápidos a partir de simulaciones o datos."
    },
    "tags": ["DMD", "Modelos de ordem reduzida", "Análise modal", "Dados de simulação"]
  },
  {
    "slug": "ia-sciml-engenharia",
    "eixos": ["dig", "mod"],
    "capa": "img/cases/capa-ia-sciml-engenharia.jpg",
    "cliente": "",
    "ano": "",
    "status": "rascunho",
    "titulo": {
      "pt": "IA e Scientific Machine Learning em engenharia",
      "en": "AI and Scientific Machine Learning in engineering",
      "es": "IA y Scientific Machine Learning en ingeniería"
    },
    "resumo": {
      "pt": "Aplicações de IA e aprendizado de máquina científico para combinar física e dados em problemas de engenharia.",
      "en": "AI and scientific machine learning applications combining physics and data in engineering problems.",
      "es": "Aplicaciones de IA y aprendizaje automático científico para combinar física y datos en problemas de ingeniería."
    },
    "tags": ["IA", "Scientific Machine Learning", "PINNs", "Modelos híbridos"]
  }
]
;
