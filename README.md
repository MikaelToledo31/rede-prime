# Rede Prime — site institucional

HTML + CSS + JS puro, sem build e sem dependências.

## Executar localmente
    python3 -m http.server 8080   # abra http://localhost:8080
(ou abra index.html direto no navegador)

## Publicar
Envie a pasta inteira para qualquer hospedagem estática (Netlify, Vercel, Cloudflare Pages, GitHub Pages, hospedagem comum).

## O que editar
- `assets/js/data.js`: formulário (endpoint), WhatsApp, e-mail, telefone, redes sociais, números, cidades e oportunidades.
- `assets/css/styles.css`: cores, fontes e espaçamentos em `:root`.
- `assets/img/`: coloque fotos do cliente com estes nomes (JPG, ~1600px, comprimidas): `hero.jpg`, `como-funciona.jpg`, `cliente.jpg`, `parceiro.jpg`, `servico-projeto.jpg`, `servico-estrutura.jpg`, `servico-instalacoes.jpg`, `servico-esquadrias.jpg`, `servico-acabamentos.jpg`, `servico-area-externa.jpg`, `servico-moveis.jpg`, `servico-pos-obra.jpg`. Enquanto não existirem, o site usa um fundo arquitetônico abstrato.

## Formulários
Os dois formulários ("Tem uma demanda?" e "Área do Parceiro") apenas montam uma mensagem e abrem o WhatsApp da Rede Prime (número em `config.whatsappNumber`). O site não envia, salva nem armazena os dados; o usuário revisa e envia a mensagem pelo próprio WhatsApp. Os modelos de mensagem estão em `MSG`, no `assets/js/main.js`.

## Páginas legais
`privacidade.html` e `termos.html` (conteúdo em texto simples no gerador; edite o HTML diretamente). São versão inicial: veja `PENDENCIAS-JURIDICAS.md` antes de publicar.

## SEO e domínio
O domínio configurado é `https://redeprimes.com.br` (canonical, Open Graph, dados estruturados, `sitemap.xml`, `robots.txt` e `llms.txt`). Para trocá-lo: `python3 scripts/definir-dominio.py https://novo.com.br --de https://redeprimes.com.br`. Detalhes e pendências em `SEO-REPORT.md`.

## Antes de publicar
1. Publicar em `https://redeprimes.com.br` com HTTPS e redirecionar o `www`; enviar o sitemap ao Google Search Console.
2. Revisar Política de Privacidade e Termos com advogado e preencher as pendências de `PENDENCIAS-JURIDICAS.md`.
3. Confirmar números e trocar `showPlaceholderNotices` para false.
