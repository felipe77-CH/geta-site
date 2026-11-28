"""Gera sitemap.xml (mapa do site para o Google) a partir das páginas existentes.
Rode de novo sempre que criar ou publicar uma página ou um case:
    python tools/gerar_sitemap.py
Só entram os cases com "status": "publicado" em cases/cases.js."""
import datetime, json, pathlib, re

RAIZ = pathlib.Path(__file__).resolve().parent.parent
BASE = "https://getaengenharia.com.br/"
hoje = datetime.date.today().isoformat()

# páginas fixas (endereço sem ".html", igual ao canônico) e prioridade
paginas = [("", "1.0"), ("quem-somos", "0.8"), ("tecnologia", "0.9"),
           ("tecnologia-chorume", "0.9"), ("tecnologia-inertizacao", "0.9"),
           ("tecnologia-pos", "0.9"), ("tecnologia-cdr", "0.8"), ("privacidade", "0.3"), ("termos", "0.3")]
paginas = [(p, pr) for p, pr in paginas if (RAIZ / ((p or "index") + ".html")).exists()]

# áreas de atuação (area.html?eixo=...)
areas = re.findall(r'^\s{2}"(\w+)":\s*\{',(RAIZ / "cases" / "areas.js").read_text(encoding="utf-8"), re.M)
paginas += [(f"area?eixo={a}", "0.7") for a in areas]

# cases publicados
txt = (RAIZ / "cases" / "cases.js").read_text(encoding="utf-8")
ini = txt.index("[", txt.index("window.GETA_CASES"))
lista = json.loads(txt[ini: txt.rindex("]") + 1])
paginas += [(f"cases/{c['slug']}", "0.6") for c in lista
            if c.get("status") == "publicado" and (RAIZ / "cases" / f"{c['slug']}.html").exists()]

linhas = ['<?xml version="1.0" encoding="UTF-8"?>',
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
for p, pr in paginas:
    url = (BASE + p).replace("&", "&amp;")
    linhas.append(f"  <url><loc>{url}</loc><lastmod>{hoje}</lastmod><priority>{pr}</priority></url>")
linhas.append("</urlset>")
(RAIZ / "sitemap.xml").write_text("\n".join(linhas) + "\n", encoding="utf-8")
print(f"sitemap.xml: {len(paginas)} endereços")
