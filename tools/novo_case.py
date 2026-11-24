"""Cria as páginas dos cases que ainda não existem.

Uso (na pasta do site):
    python tools/novo_case.py

Lê o registro cases/cases.js e, para cada "slug" sem página,
cria cases/<slug>.html a partir do modelo cases/_modelo.html.
Páginas que já existem NUNCA são sobrescritas.
"""
import html
import json
import pathlib
import re
import sys

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")

RAIZ = pathlib.Path(__file__).resolve().parent.parent
REGISTRO = RAIZ / "cases" / "cases.js"
MODELO = RAIZ / "cases" / "_modelo.html"


def ler_registro():
    texto = REGISTRO.read_text(encoding="utf-8")
    inicio = texto.index("[", texto.index("GETA_CASES"))
    fim = texto.rindex("]") + 1
    try:
        return json.loads(texto[inicio:fim])
    except json.JSONDecodeError as e:
        sys.exit(f"Erro em cases/cases.js (linha ~{texto[:inicio].count(chr(10)) + e.lineno}): {e.msg}")


def main():
    modelo = MODELO.read_text(encoding="utf-8")
    criados, existentes = [], []
    for c in ler_registro():
        slug = c["slug"]
        if not re.fullmatch(r"[a-z0-9-]+", slug):
            sys.exit(f"Slug inválido: {slug!r} (use só letras minúsculas, números e hífen)")
        destino = RAIZ / "cases" / f"{slug}.html"
        if destino.exists():
            existentes.append(slug)
            continue
        titulo = re.sub(r"<[^>]+>", "", c["titulo"]["pt"])
        pagina = (modelo.replace("{{SLUG}}", slug)
                        .replace("{{TITULO}}", html.escape(titulo))
                        .replace("{{RESUMO}}", html.escape(c["resumo"]["pt"])))
        destino.write_text(pagina, encoding="utf-8")
        criados.append(slug)
    print(f"Criadas: {len(criados)}  |  Já existiam (não alteradas): {len(existentes)}")
    for s in criados:
        print("  +", f"cases/{s}.html")


if __name__ == "__main__":
    main()
