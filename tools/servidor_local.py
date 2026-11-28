"""Servidor local que aplica os cabeçalhos do arquivo _headers (como o Cloudflare Pages).

Uso, na pasta do site:  python tools/servidor_local.py [porta]   (padrão: 5501)
Serve para conferir a Content-Security-Policy antes de publicar: abra o site,
navegue pelas páginas e veja no console do navegador se algo foi bloqueado.
Lê apenas o bloco "/*" do _headers. O cabeçalho HSTS não é enviado (localhost).
"""
import http.server
import pathlib
import sys

RAIZ = pathlib.Path(__file__).resolve().parent.parent


def ler_cabecalhos():
    cab, bloco = [], False
    for linha in (RAIZ / "_headers").read_text(encoding="utf-8").splitlines():
        if not linha.strip() or linha.lstrip().startswith("#"):
            continue
        if not linha.startswith((" ", "\t")):
            bloco = linha.strip() == "/*"
            continue
        if bloco and ":" in linha:
            nome, valor = linha.strip().split(":", 1)
            if nome.lower() != "strict-transport-security":
                cab.append((nome.strip(), valor.strip().replace(" upgrade-insecure-requests", "").rstrip(";")))
    return cab


class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *a, **kw):
        super().__init__(*a, directory=str(RAIZ), **kw)

    def end_headers(self):
        for nome, valor in ler_cabecalhos():
            self.send_header(nome, valor)
        super().end_headers()


if __name__ == "__main__":
    porta = int(sys.argv[1]) if len(sys.argv) > 1 else 5501
    print(f"Site com os cabeçalhos de _headers em http://localhost:{porta}")
    http.server.ThreadingHTTPServer(("127.0.0.1", porta), Handler).serve_forever()
