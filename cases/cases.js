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
    "slug": "sedimentador-lamelar",
    "eixos": ["amb", "res", "mod"],
    "capa": "img/cases/capa-sedimentador-lamelar.jpg",
    "cliente": "",
    "ano": "2026",
    "status": "publicado",
    "titulo": {
      "pt": "Sedimentador lamelar e estudo de velocidades de sedimentação",
      "en": "Lamella settler design and settling velocity study",
      "es": "Sedimentador lamelar y estudio de velocidades de sedimentación"
    },
    "resumo": {
      "pt": "Ensaios de sedimentação em coluna e bases de cálculo de um sistema de sedimentação para efluentes com alta carga de sólidos, comparando sedimentador lamelar e decantador convencional.",
      "en": "Column settling tests and design basis of a sedimentation system for high-solids effluents, comparing a lamella settler and a conventional clarifier.",
      "es": "Ensayos de sedimentación en columna y bases de cálculo de un sistema de sedimentación para efluentes con alta carga de sólidos, comparando sedimentador lamelar y decantador convencional."
    },
    "tags": ["Sedimentação", "Sedimentador lamelar", "Ensaios em coluna", "Velocidade de sedimentação", "Taxa de aplicação superficial", "Floculação"]
  },
  {
    "slug": "daf-bomba-microbolhas",
    "eixos": ["res", "proc"],
    "capa": "img/cases/capa-daf-bomba-microbolhas.jpg",
    "cliente": "",
    "ano": "2025",
    "status": "publicado",
    "titulo": {
      "pt": "Alternativas de melhoria em sistema DAF: pressurização vs. nanobolhas",
      "en": "DAF improvement alternatives: pressurization vs. nanobubbles",
      "es": "Alternativas de mejora en sistema DAF: presurización vs. nanoburbujas"
    },
    "resumo": {
      "pt": "Comparação entre a pressurização tradicional (bombas centrífugas, compressor e vaso de pressão) e o bombeamento de nanobolhas para melhorar a separação físico-química em um flotador DAF existente.",
      "en": "Comparison between traditional pressurization (centrifugal pumps, compressor and pressure vessel) and nanobubble pumping to improve physicochemical separation in an existing DAF unit.",
      "es": "Comparación entre la presurización tradicional (bombas centrífugas, compresor y tanque a presión) y el bombeo de nanoburbujas para mejorar la separación fisicoquímica en un flotador DAF existente."
    },
    "tags": ["Flotação por ar dissolvido (DAF)", "Nanobolhas", "Microbolhas", "Bomba multifásica", "Saturação de ar", "Separação óleo-água", "Retrofit"]
  },
  {
    "slug": "banco-dados-sql-estacao",
    "eixos": ["dig", "amb", "proc"],
    "capa": "img/cases/capa-banco-dados-sql-estacao.jpg",
    "cliente": "",
    "ano": "2025",
    "status": "publicado",
    "titulo": {
      "pt": "Estruturação dos dados de uma estação de tratamento em banco de dados SQL",
      "en": "Structuring a treatment plant's data in a relational SQL database",
      "es": "Estructuración de la información de una estación de tratamiento en base de datos SQL"
    },
    "resumo": {
      "pt": "Mapeamento do processo, definição de pontos de coleta e modelagem de um banco de dados relacional para organizar a informação de qualidade da estação e gerar KPIs de operação e conformidade.",
      "en": "Process mapping, definition of sampling points and design of a relational database to organize the plant's quality data and generate operational and compliance KPIs.",
      "es": "Mapeo del proceso, definición de puntos de muestreo y modelado de una base de datos relacional para organizar la información de calidad de la estación y generar KPIs de operación y cumplimiento."
    },
    "tags": ["Banco de dados relacional", "SQL", "Modelagem de dados", "Integração automática", "KPIs", "Power BI", "Conformidade ambiental"]
  },
  {
    "slug": "estacao-meteorologica-api",
    "eixos": ["dig", "amb", "mod"],
    "capa": "img/cases/capa-estacao-meteorologica-api.jpg",
    "cliente": "",
    "ano": "2025",
    "status": "publicado",
    "titulo": {
      "pt": "API e análise de dados de estação meteorológica para dispersão de poluentes",
      "en": "Weather station API and data analysis for pollutant dispersion",
      "es": "API y análisis de datos de estación meteorológica para dispersión de contaminantes"
    },
    "resumo": {
      "pt": "Configuração da integração por API de uma estação meteorológica e análise das variáveis ambientais para interpretar a dispersão de poluentes e apoiar a operação de uma estação de tratamento.",
      "en": "API integration of a weather station and analysis of environmental variables to interpret pollutant dispersion and support the operation of a treatment plant.",
      "es": "Configuración de la integración por API de una estación meteorológica y análisis de las variables ambientales para interpretar la dispersión de contaminantes y apoyar la operación de una estación de tratamiento."
    },
    "tags": ["API REST", "Python", "Estação meteorológica", "Dispersão atmosférica", "Rosa dos ventos", "Banco de dados", "Controle de odores"]
  },
  {
    "slug": "interligacao-hidraulica-linhas",
    "eixos": ["proc", "res", "rd"],
    "capa": "img/cases/capa-interligacao-hidraulica-linhas.jpg",
    "cliente": "",
    "ano": "2026",
    "status": "publicado",
    "titulo": {
      "pt": "Interligação hidráulica entre linhas de tratamento: alternativas, bombeamento e validação",
      "en": "Hydraulic interconnection between treatment lines: alternatives, pumping and validation",
      "es": "Interconexión hidráulica entre líneas de tratamiento: alternativas, bombeo y validación"
    },
    "resumo": {
      "pt": "Estudo de alternativas para interligar duas linhas de uma estação de tratamento, com teste operacional, dimensionamento de bombeamento com controle de nível, verificação de NPSH, cálculo estrutural do tanque e CAPEX.",
      "en": "Study of alternatives to interconnect two lines of a treatment plant, with an operational test, pumping design with level control, NPSH check, tank structural design and CAPEX.",
      "es": "Estudio de alternativas para interconectar dos líneas de una estación de tratamiento, con prueba operacional, dimensionamiento del bombeo con control de nivel, verificación de NPSH, cálculo estructural del tanque y CAPEX."
    },
    "tags": ["Hidráulica", "Bombeamento", "Controle de nível", "NPSH", "Cálculo estrutural", "CAPEX", "Remoção de sólidos"]
  },
  {
    "slug": "projeto-membranas-uf-ro",
    "eixos": ["res", "dig", "proc"],
    "capa": "img/cases/capa-projeto-membranas-uf-ro.jpg",
    "cliente": "",
    "ano": "2025",
    "status": "publicado",
    "titulo": {
      "pt": "Projeto inteligente de membranas: ultrafiltração como pré-tratamento de osmose reversa",
      "en": "Smart membrane design: ultrafiltration as pretreatment for reverse osmosis",
      "es": "Diseño inteligente de membranas: ultrafiltración como pretratamiento de ósmosis inversa"
    },
    "resumo": {
      "pt": "Sistema em Python que automatiza a comparação de simulações de membranas: extrai os resultados de cada cenário, organiza tudo em banco de dados SQL e aponta a configuração de UF com menor custo por m³ para proteger a osmose reversa.",
      "en": "Python system that automates the comparison of membrane simulations: it extracts each scenario’s results, stores them in an SQL database and identifies the UF configuration with the lowest cost per m³ to protect the reverse osmosis.",
      "es": "Sistema en Python que automatiza la comparación de simulaciones de membranas: extrae los resultados de cada escenario, los organiza en una base de datos SQL e indica la configuración de UF con menor costo por m³ para proteger la ósmosis inversa."
    },
    "tags": ["Ultrafiltração", "Osmose reversa", "Membranas", "Automação", "Python", "SQL"]
  },
  {
    "slug": "dispersao-pm25-risco-ambiental",
    "eixos": ["amb", "mod", "dig"],
    "capa": "img/cases/capa-dispersao-pm25-risco-ambiental.jpg",
    "cliente": "",
    "ano": "2026",
    "status": "publicado",
    "titulo": {
      "pt": "Dispersão atmosférica de PM2.5 e risco ambiental na bacia de Santiago do Chile",
      "en": "Atmospheric dispersion of PM2.5 and environmental risk in the Santiago (Chile) basin",
      "es": "Dispersión atmosférica de PM2.5 y riesgo ambiental en la cuenca de Santiago de Chile"
    },
    "resumo": {
      "pt": "Reconstrução hora a hora do PM2.5 em 18 anos de dados da rede oficial de monitoramento, com krigagem validada e decomposição em modos dinâmicos (DMD), para mapear onde e quando a norma é superada e o que controla os episódios críticos.",
      "en": "Hour-by-hour reconstruction of PM2.5 over 18 years of official monitoring data, with validated kriging and dynamic mode decomposition (DMD), to map where and when the standard is exceeded and what drives critical episodes.",
      "es": "Reconstrucción hora a hora del PM2.5 en 18 años de datos de la red oficial de monitoreo, con kriging validado y descomposición en modos dinámicos (DMD), para mapear dónde y cuándo se supera la norma y qué controla los episodios críticos."
    },
    "tags": ["Qualidade do ar", "PM2.5", "Dispersão atmosférica", "Risco ambiental", "Krigagem", "DMD"]
  },
  {
    "slug": "cdr-biosecagem-rsu",
    "eixos": ["res", "rd", "proc"],
    "capa": "img/cases/capa-cdr-biosecagem-rsu.jpg",
    "cliente": "",
    "ano": "2026",
    "status": "publicado",
    "titulo": {
      "pt": "Combustível derivado de resíduos (CDR) a partir de RSU por biosecagem: estudo de viabilidade técnico-econômica",
      "en": "Refuse-derived fuel (RDF) from MSW by biodrying: technical and economic feasibility study",
      "es": "Combustible derivado de residuos (CDR) a partir de RSU por biosecado: estudio de viabilidad técnico-económica"
    },
    "resumo": {
      "pt": "Estudo em três fases para transformar resíduos sólidos urbanos em CDR por biosecagem e usá-lo como combustível em uma unidade industrial: caracterização dos resíduos, unidade-piloto e viabilidade técnico-econômica.",
      "en": "Three-phase study to turn municipal solid waste into RDF by biodrying and use it as fuel in an industrial plant: waste characterization, pilot unit and technical and economic feasibility.",
      "es": "Estudio en tres fases para transformar residuos sólidos urbanos en CDR por biosecado y usarlo como combustible en una unidad industrial: caracterización de los residuos, unidad piloto y viabilidad técnico-económica."
    },
    "tags": ["CDR", "Biosecagem", "RSU", "Recuperação energética", "Viabilidade técnico-econômica"]
  },
  {
    "slug": "planta-efluentes-complexos-lodos",
    "eixos": ["res", "rd", "amb"],
    "capa": "img/cases/capa-planta-efluentes-complexos-lodos.jpg",
    "cliente": "",
    "ano": "2025",
    "status": "publicado",
    "titulo": {
      "pt": "Planta de tratamento de efluentes líquidos complexos e lodos na Baixada Santista: mercado e conceito tecnológico",
      "en": "Treatment plant for complex liquid effluents and sludge in the Santos region: market and technology concept",
      "es": "Planta de tratamiento de efluentes líquidos complejos y lodos en la Baixada Santista: mercado y concepto tecnológico"
    },
    "resumo": {
      "pt": "Estudo de mercado e concepção tecnológica de uma planta regional para efluentes industriais complexos, lodos de fossa séptica e lamas, em uma região portuária e industrial que hoje envia seus efluentes para tratamento a cerca de 150 km.",
      "en": "Market study and technology concept for a regional plant for complex industrial effluents, septic tank sludge and slurries, in a port and industrial region that currently sends its effluents about 150 km away for treatment.",
      "es": "Estudio de mercado y concepción tecnológica de una planta regional para efluentes industriales complejos, lodos de fosa séptica y barros, en una región portuaria e industrial que hoy envía sus efluentes a tratar a unos 150 km."
    },
    "tags": ["Efluentes complexos", "Lodos e lamas", "Fossa séptica", "Estudo de mercado", "Tratamento físico-químico", "Oxidação avançada"]
  },
  {
    "slug": "terras-raras-ensaios-metalurgicos",
    "eixos": ["proc", "rd", "mod"],
    "capa": "img/cases/capa-terras-raras-ensaios-metalurgicos.jpg",
    "cliente": "",
    "ano": "2026",
    "status": "publicado",
    "titulo": {
      "pt": "Programa de ensaios metalúrgicos para avaliação de terras raras",
      "en": "Metallurgical testing program for rare earth evaluation",
      "es": "Programa de ensayos metalúrgicos para la evaluación de tierras raras"
    },
    "resumo": {
      "pt": "Planejamento técnico de caracterização mineralógica, lixiviação cinética e extração por solvente para avaliar um depósito de terras raras no norte do Brasil e chegar ao projeto conceitual de uma planta piloto de 100 a 500 kg/dia.",
      "en": "Technical planning of mineralogical characterization, kinetic leaching and solvent extraction to evaluate a rare earth deposit in northern Brazil and reach the conceptual design of a 100–500 kg/day pilot plant.",
      "es": "Planificación técnica de caracterización mineralógica, lixiviación cinética y extracción por solvente para evaluar un depósito de tierras raras en el norte de Brasil y llegar al diseño conceptual de una planta piloto de 100 a 500 kg/día."
    },
    "tags": ["Terras raras", "Hidrometalurgia", "Lixiviação", "Extração por solvente", "Mineralogia", "Planta piloto"]
  },
  {
    "slug": "vinhaca-radical-carbonato-biometano",
    "eixos": ["rd", "proc", "res"],
    "capa": "img/cases/capa-vinhaca-radical-carbonato-biometano.jpg",
    "cliente": "",
    "ano": "2026",
    "status": "publicado",
    "titulo": {
      "pt": "Pré-tratamento da vinhaça via radical carbonato para aumentar a produção de biometano (patente de invenção)",
      "en": "Vinasse pretreatment via carbonate radical to increase biomethane production (patent)",
      "es": "Pretratamiento de la vinaza vía radical carbonato para aumentar la producción de biometano (patente de invención)"
    },
    "resumo": {
      "pt": "Tecnologia própria que usa o CO₂ como insumo reativo para gerar radicais carbonato e oxidar seletivamente as melanoidinas e estruturas lignocelulósicas da vinhaça, aumentando sua biodegradabilidade e a produção de metano na biodigestão.",
      "en": "In-house technology that uses CO₂ as a reactive input to generate carbonate radicals and selectively oxidize the melanoidins and lignocellulosic structures in vinasse, increasing its biodegradability and methane production in anaerobic digestion.",
      "es": "Tecnología propia que usa el CO₂ como insumo reactivo para generar radicales carbonato y oxidar selectivamente las melanoidinas y estructuras lignocelulósicas de la vinaza, aumentando su biodegradabilidad y la producción de metano en la biodigestión."
    },
    "tags": ["Patente", "Vinhaça", "Biometano", "Biodigestão", "Oxidação seletiva", "CO₂"]
  },
  {
    "slug": "biofertilizante-map-dap-chorume",
    "eixos": ["res", "proc", "rd"],
    "capa": "img/cases/capa-biofertilizante-map-dap-chorume.jpg",
    "cliente": "",
    "ano": "2025",
    "status": "publicado",
    "titulo": {
      "pt": "Biofertilizante a partir de chorume concentrado: estudo e piloto de produção de MAP/DAP húmico",
      "en": "Biofertilizer from concentrated landfill leachate: study and pilot production of humic MAP/DAP",
      "es": "Biofertilizante a partir de lixiviado concentrado: estudio y piloto de producción de MAP/DAP húmico"
    },
    "resumo": {
      "pt": "Recuperação do nitrogênio amoniacal e das substâncias húmicas do chorume concentrado de aterro sanitário como fertilizante fosfatado organomineral, por precipitação controlada com ácido fosfórico: processo, balanço de massa, produto e análise econômica.",
      "en": "Recovery of ammonia nitrogen and humic substances from concentrated landfill leachate as an organomineral phosphate fertilizer, by controlled precipitation with phosphoric acid: process, mass balance, product and economic analysis.",
      "es": "Recuperación del nitrógeno amoniacal y de las sustancias húmicas del lixiviado concentrado de relleno sanitario como fertilizante fosfatado organomineral, por precipitación controlada con ácido fosfórico: proceso, balance de masa, producto y análisis económico."
    },
    "tags": ["Chorume", "Biofertilizante", "Recuperação de nutrientes", "MAP/DAP", "Economia circular", "Substâncias húmicas"]
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
    "slug": "indice-tratabilidade-efluentes",
    "eixos": ["res", "rd", "proc"],
    "capa": "img/cases/capa-indice-tratabilidade-efluentes.jpg",
    "cliente": "",
    "ano": "2025",
    "status": "publicado",
    "titulo": {
      "pt": "Índice de Tratabilidade de Efluentes (ITE): avaliação rápida de efluentes industriais complexos",
      "en": "Effluent Treatability Index (ETI): rapid assessment of complex industrial effluents",
      "es": "Índice de Tratabilidad de Efluentes (ITE): evaluación rápida de efluentes industriales complejos"
    },
    "resumo": {
      "pt": "Metodologia própria que combina toxicidade aguda, carga orgânica e sólidos sedimentáveis em um único índice para classificar a complexidade de um efluente, indicar o tratamento e estimar custos em minutos, e não em dias.",
      "en": "In-house methodology that combines acute toxicity, organic load and settleable solids into a single index to classify effluent complexity, recommend treatment and estimate costs in minutes instead of days.",
      "es": "Metodología propia que combina toxicidad aguda, carga orgánica y sólidos sedimentables en un único índice para clasificar la complejidad de un efluente, indicar el tratamiento y estimar costos en minutos, y no en días."
    },
    "tags": ["Tratabilidade", "Toxicidade", "DQO", "Efluentes industriais", "Metodologia própria"]
  },
  {
    "slug": "secagem-mineracao-cobre",
    "eixos": ["proc", "mod", "dig"],
    "capa": "img/cases/capa-secagem-mineracao-cobre.jpg",
    "cliente": "",
    "ano": "2023",
    "status": "publicado",
    "titulo": {
      "pt": "Otimização do consumo de combustível em secador rotativo – mineração de cobre no Chile",
      "en": "Fuel consumption optimization in a rotary dryer – copper mining in Chile",
      "es": "Optimización del consumo de combustible en secador rotatorio – minería del cobre en Chile"
    },
    "resumo": {
      "pt": "Consultoria de análise de dados e eficiência energética para uma grande mineradora de cobre e molibdênio do norte do Chile: mineração de dados operacionais, curva de base energia × produção e identificação de regimes com consumo excessivo de diesel.",
      "en": "Data analysis and energy efficiency consultancy for a major copper and molybdenum miner in northern Chile: operational data mining, energy × production baseline and identification of regimes with excess diesel use.",
      "es": "Consultoría de análisis de datos y eficiencia energética para una gran minera de cobre y molibdeno del norte de Chile: minería de datos operacionales, curva base energía × producción e identificación de regímenes con consumo excesivo de diésel."
    },
    "tags": ["Eficiência energética", "Mineração de cobre", "Mineração de dados", "K-means", "Secador rotativo"]
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
    "slug": "capacidade-ete-efluentes-nao-domesticos",
    "eixos": ["res", "dig", "rd"],
    "capa": "img/cases/capa-capacidade-ete-efluentes-nao-domesticos.jpg",
    "cliente": "",
    "ano": "2024",
    "status": "publicado",
    "titulo": {
      "pt": "Capacidade de uma ETE para efluentes não domésticos: análise de dados e georreferenciamento de grandes geradores",
      "en": "Capacity of a treatment plant for non-domestic effluents: data analysis and georeferencing of large generators",
      "es": "Capacidad de una planta de tratamiento para efluentes no domésticos: análisis de datos y georreferenciación de grandes generadores"
    },
    "resumo": {
      "pt": "Análise dos 100 maiores geradores de efluentes não domésticos de uma região metropolitana para definir a capacidade nominal de uma estação de tratamento, com curvas de demanda, mapas por município e estimativa de distâncias e tempos de transporte.",
      "en": "Analysis of the 100 largest non-domestic effluent generators in a metropolitan region to define the design capacity of a treatment plant, with demand curves, maps by municipality and estimated transport distances and times.",
      "es": "Análisis de los 100 mayores generadores de efluentes no domésticos de una región metropolitana para definir la capacidad nominal de una planta de tratamiento, con curvas de demanda, mapas por municipio y estimación de distancias y tiempos de transporte."
    },
    "tags": ["Capacidade de ETE", "Efluentes não domésticos", "Análise de dados", "Georreferenciamento", "Logística"]
  },
  {
    "slug": "programa-monitoramento-odores",
    "eixos": ["amb", "dig", "res"],
    "capa": "img/cases/capa-programa-monitoramento-odores.jpg",
    "cliente": "",
    "ano": "2026",
    "status": "publicado",
    "titulo": {
      "pt": "Programa de monitoramento e controle de emissões de gases odoríferos em central de tratamento de efluentes",
      "en": "Odorous gas emission monitoring and control program at an effluent treatment facility",
      "es": "Programa de monitoreo y control de emisiones de gases odoríferos en una central de tratamiento de efluentes"
    },
    "resumo": {
      "pt": "Rede de sensores de COVs, NH₃ e H₂S, estação meteorológica, olfatometria de campo, sistema de dados com pluma de dispersão e procedimento operacional para controlar odores e responder rapidamente à comunidade.",
      "en": "Network of VOC, NH₃ and H₂S sensors, weather station, field olfactometry, a data system with dispersion plume and an operating procedure to control odors and respond quickly to the community.",
      "es": "Red de sensores de COV, NH₃ y H₂S, estación meteorológica, olfatometría de campo, sistema de datos con pluma de dispersión y procedimiento operativo para controlar olores y responder rápidamente a la comunidad."
    },
    "tags": ["Odores", "Monitoramento ambiental", "Dispersão atmosférica", "Olfatometria", "Dashboard", "POP"]
  },
  {
    "slug": "sensores-odores",
    "eixos": ["dig", "amb", "rd"],
    "capa": "img/cases/capa-sensores-odores.jpg",
    "cliente": "",
    "ano": "2026",
    "status": "publicado",
    "titulo": {
      "pt": "Sensores próprios e plataforma com IA para monitoramento de odores",
      "en": "In-house sensors and an AI platform for odor monitoring",
      "es": "Sensores propios y plataforma con IA para monitoreo de olores"
    },
    "resumo": {
      "pt": "Desenvolvimento de nós de medição autônomos para gases odoríferos (H₂S, NH₃, CO₂) e meteorologia, e de uma plataforma completa em nuvem com banco de séries temporais, modelos de IA, alertas, painel e agente conversacional com respostas verificadas.",
      "en": "Development of autonomous measurement nodes for odorous gases (H₂S, NH₃, CO₂) and weather, and of a complete cloud platform with a time-series database, AI models, alerts, dashboard and a conversational agent with verified answers.",
      "es": "Desarrollo de nodos de medición autónomos para gases odoríferos (H₂S, NH₃, CO₂) y meteorología, y de una plataforma completa en la nube con base de series temporales, modelos de IA, alertas, panel y agente conversacional con respuestas verificadas."
    },
    "tags": ["Sensores", "Odores", "IoT", "Inteligência artificial", "Plataforma de dados", "Telemetria"]
  },
  {
    "slug": "comunicacao-rf-monitoramento",
    "eixos": ["dig", "res", "amb"],
    "capa": "img/cases/capa-comunicacao-rf-monitoramento.jpg",
    "cliente": "",
    "ano": "2025",
    "status": "publicado",
    "titulo": {
      "pt": "Telemetria por radiofrequência: medição e controle a distância da vazão de chorume em aterro sanitário",
      "en": "Radio-frequency telemetry: remote measurement and control of leachate flow at a sanitary landfill",
      "es": "Telemetría por radiofrecuencia: medición y control a distancia del caudal de lixiviado en un relleno sanitario"
    },
    "resumo": {
      "pt": "Sistema de comunicação por radiofrequência que leva, em tempo real, os dados de nível e vazão das estações de bombeamento de chorume até a ETE e permite controlar as bombas a distância, sem rede cabeada de dados ou de energia.",
      "en": "Radio-frequency communication system that sends level and flow data from the leachate pumping stations to the treatment plant in real time and allows remote pump control, with no wired data or power network.",
      "es": "Sistema de comunicación por radiofrecuencia que lleva en tiempo real los datos de nivel y caudal de las estaciones de bombeo de lixiviado hasta la planta de tratamiento y permite controlar las bombas a distancia, sin red cableada de datos ni de energía."
    },
    "tags": ["Radiofrequência", "Telemetria", "Controle remoto", "Aterro sanitário", "Chorume"]
  },
  {
    "slug": "chorume-redes-neurais",
    "eixos": ["dig", "mod", "amb"],
    "capa": "img/cases/capa-chorume-redes-neurais.jpg",
    "cliente": "",
    "ano": "2023",
    "status": "publicado",
    "titulo": {
      "pt": "Previsão da vazão de chorume com deep learning (redes LSTM)",
      "en": "Leachate flow forecasting with deep learning (LSTM networks)",
      "es": "Predicción del caudal de lixiviado con deep learning (redes LSTM)"
    },
    "resumo": {
      "pt": "Análise de séries temporais de vazão de chorume e pluviometria de um aterro sanitário no sul do Brasil e modelo de deep learning (LSTM) para prever a vazão diária.",
      "en": "Time series analysis of leachate flow and rainfall at a landfill in southern Brazil and a deep learning (LSTM) model to forecast daily flow.",
      "es": "Análisis de series temporales de caudal de lixiviado y pluviometría de un relleno sanitario en el sur de Brasil y modelo de deep learning (LSTM) para predecir el caudal diario."
    },
    "tags": ["Deep learning", "LSTM", "Séries temporais", "Chorume", "Pluviometria", "Python / TensorFlow", "Decomposição sazonal"]
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
