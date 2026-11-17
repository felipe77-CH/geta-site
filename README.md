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

## Rodar localmente

```bash
python -m http.server 5500
```

Abra http://localhost:5500.

## Pendências

- Dados reais de contato (e-mail, telefone, endereço).
- Envio do formulário (hoje é apenas demonstração).
- Revisão das traduções EN/ES por um falante nativo.
