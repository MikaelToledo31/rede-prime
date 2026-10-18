#!/usr/bin/env python3
"""Define o domínio de produção do site Rede Prime (sem dependências).

Uso:
    python3 scripts/definir-dominio.py https://www.seudominio.com.br
    python3 scripts/definir-dominio.py https://novo.com.br --de https://antigo.com.br

Substitui o marcador __SITE_URL__ (ou o domínio antigo, com --de) em: canonical, Open Graph,
Twitter Cards, dados estruturados, sitemap.xml, robots.txt e llms.txt. Rode uma vez, na cópia
que será publicada, e confira o resultado (o script falha se sobrar algum marcador).
"""
import re, sys, pathlib

ARQUIVOS = ["index.html", "privacidade.html", "termos.html", "sitemap.xml", "robots.txt", "llms.txt"]

def main():
    args = sys.argv[1:]
    if not args or args[0].startswith("-"):
        sys.exit(__doc__)
    novo = args[0].rstrip("/")
    antigo = "__SITE_URL__"
    if "--de" in args:
        antigo = args[args.index("--de") + 1].rstrip("/")
    if not re.fullmatch(r"https://[a-z0-9.-]+\.[a-z]{2,}(:\d+)?", novo, re.I):
        sys.exit("Informe a URL base completa, com https:// e sem caminho. Ex.: https://www.seudominio.com.br")
    raiz = pathlib.Path(__file__).resolve().parent.parent
    total = 0
    for nome in ARQUIVOS:
        p = raiz / nome
        if not p.exists():
            sys.exit(f"Arquivo não encontrado: {nome}")
        t = p.read_text(encoding="utf-8")
        n = t.count(antigo)
        p.write_text(t.replace(antigo, novo), encoding="utf-8")
        total += n
        print(f"{nome}: {n} ocorrência(s) atualizada(s)")
    if total == 0:
        sys.exit("Nada foi substituído. Se o domínio já foi definido, use --de DOMINIO_ANTIGO.")
    sobra = [n for n in ARQUIVOS if "__SITE_URL__" in (raiz / n).read_text(encoding="utf-8")]
    if sobra:
        sys.exit("Ainda há marcadores __SITE_URL__ em: " + ", ".join(sobra))
    print(f"\nPronto: domínio definido como {novo}")

main()
