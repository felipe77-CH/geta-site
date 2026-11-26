# GETA – Site institucional

Site estático (HTML + CSS + JS, sem build) da **GETA – Grupo de Especialistas em Tecnologias Ambientais**.

## Estrutura

- `index.html` – página única com header, hero, áreas de atuação, como trabalhamos, diferencial tecnológico, soluções, contato e rodapé.
- `i18n.js` – traduções EN e ES. O português é o idioma base e é lido do próprio HTML (atributos `data-i18n`).
- `img/` – logo (versões colorida e branca) e fotos. Créditos em `img/CREDITOS.txt` (fotos Pexels).

## Idiomas (PT / EN / ES)

- Seletor no cabeçalho; a escolha fica salva no navegador.
- Link direto para um idioma: `?lang=en` ou `?lang=es` (sem parâmetro = português).
- Para editar um texto: procure a chave (`data-i18n="..."`) no `index.html` (PT) e em `i18n.js` (EN/ES).
- Para conferir chaves sem tradução, no console do navegador: `I18N.missing()`.

## Cases (seção Soluções)

- Na home, a seção **Soluções** lista os cases com filtro pelas 5 áreas (cada case pertence a uma única área) (link direto: `index.html?eixo=mod#solucoes`). Cada card abre a página do case.
- `cases/cases.js` – **registro** dos cases: título, resumo (PT/EN/ES), eixos, capa, cliente, ano, status e etiquetas.
- `cases/<slug>.html` – uma página por case, com as 11 seções (problema, contexto, diagnóstico, metodologia, solução, tecnologias, modelagem, resultados, CAPEX/OPEX, escopo, entregáveis), destaques, ficha técnica e galeria.
- `assets/portfolio.css` e `assets/portfolio.js` – estilo e montagem das páginas de case (não precisam ser editados para preencher um case).

- Menu **Áreas de atuação** (`assets/mega.js` + `assets/mega.css`): ao clicar, mostra as 6 áreas; cada uma abre sua página (area.html).
- `area.html?eixo=<código>` – página de cada área: o que fazemos, por que fazemos, serviços e cases principais. Textos em `cases/areas.js`.
- `quem-somos.html` – origem, missão, visão, propósito, valores, forma de trabalho, diferenciais e setores atendidos (traduções em `i18n.js`, chaves `qs.*`).

Eixos: `amb` Engenharia Ambiental · `proc` Engenharia de Processos · `res` Tratamento de Resíduos e Efluentes · `dig` Engenharia Digital e IA · `mod` Modelagem e Otimização.

### Preencher um case (um de cada vez)

1. Abra `cases/<slug>.html` e troque cada `<p class="tbd">…</p>` pelo texto real (as instruções estão no topo do arquivo).
2. Destaques e ficha técnica: troque os `—` pelos valores e apague a classe `tbd` dos destaques.
3. Imagens: salve em `img/cases/<slug>/`.
4. Traduções são opcionais: crie `<div data-l="en">` / `<div data-l="es">` ao lado do bloco `data-l="pt"`.
5. Ao terminar, mude `"status": "publicado"` em `cases/cases.js`: o selo "Em elaboração" some e as partes vazias deixam de aparecer.

### Novo case

Copie um bloco em `cases/cases.js`, mude o `slug` e os textos e rode:

```bash
python tools/novo_case.py
```

O script cria apenas as páginas que ainda não existem, a partir de `cases/_modelo.html`. Páginas já preenchidas nunca são sobrescritas.

## Versão dos arquivos (cache)

Os arquivos CSS/JS são chamados com `?v=AAAAMMDDx` (ex.: `assets/mega.js?v=20261126i`) para o navegador
baixar sempre a versão nova. Ao alterar CSS ou JS, troque o número em todas as páginas
(busca e troca de `?v=20261126i` pelo novo valor).

## Rodar localmente

```bash
python -m http.server 5500
```

Abra http://localhost:5500.

## Pendências

- Dados reais de contato (e-mail, telefone, endereço).
- Envio do formulário (hoje é apenas demonstração).
- Revisão das traduções EN/ES por um falante nativo.
