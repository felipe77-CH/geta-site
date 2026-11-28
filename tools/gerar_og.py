"""Adiciona as tags de pré-visualização (Open Graph) em cada página: título, descrição,
endereço e imagem que aparecem ao compartilhar o link (WhatsApp, LinkedIn, Google).
Usa o <title>, a <meta name="description">, o canônico e a imagem de capa da página.
Rode de novo depois de criar páginas ou cases:  python tools/gerar_og.py"""
import glob, html, json, pathlib, re

RAIZ = pathlib.Path(__file__).resolve().parent.parent
BASE = "https://getaengenharia.com.br/"
txt = (RAIZ / "cases" / "cases.js").read_text(encoding="utf-8")
CASES = {c["slug"]: c for c in json.loads(txt[txt.index("[", txt.index("window.GETA_CASES")): txt.rindex("]") + 1])}
INI, FIM = "<!-- og:inicio -->", "<!-- og:fim -->"

def meta(h, padrao):
    m = re.search(padrao, h, re.S)
    return html.unescape(m.group(1)).strip() if m else ""

n = 0
for f in sorted(glob.glob(str(RAIZ / "*.html")) + glob.glob(str(RAIZ / "cases" / "*.html"))):
    p = pathlib.Path(f)
    if p.name in ("index.html", "404.html", "_modelo.html") or p.name.startswith("google"):
        continue
    h = p.read_text(encoding="utf-8")
    titulo = meta(h, r"<title>(.*?)</title>")
    desc = meta(h, r'<meta name="description" content="(.*?)">')
    url = meta(h, r'<link rel="canonical" href="(.*?)">')
    if not (titulo and url):
        continue
    if p.parent.name == "cases" and p.stem in CASES:
        img = CASES[p.stem]["capa"]
    else:
        m = re.search(r"background-image:url\('?([^')]+?)'?\)", h)
        img = m.group(1) if m else "img/hero-estacao-tratamento.jpg"
    img = BASE + img.split("?")[0].lstrip("./").replace("../", "")
    e = lambda s: html.escape(s, quote=True)
    bloco = "\n".join([
        INI,
        '<meta property="og:type" content="website">',
        '<meta property="og:site_name" content="GETA Engenharia">',
        f'<meta property="og:title" content="{e(titulo)}">',
        f'<meta property="og:description" content="{e(desc)}">' if desc else "",
        f'<meta property="og:url" content="{e(url)}">',
        f'<meta property="og:image" content="{e(img)}">',
        '<meta property="og:locale" content="pt_BR">',
        '<meta name="twitter:card" content="summary_large_image">',
        FIM]).replace("\n\n", "\n")
    if INI in h:
        h = re.sub(re.escape(INI) + r".*?" + re.escape(FIM), lambda _: bloco, h, flags=re.S)
    else:
        h = re.sub(r'(<link rel="canonical"[^>]*>)', lambda m: m.group(1) + "\n" + bloco, h, count=1)
    p.write_text(h, encoding="utf-8", newline="\n")
    n += 1
print(f"Open Graph atualizado em {n} páginas")
