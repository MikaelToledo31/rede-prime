# Relatório de SEO — Rede Prime — Negócios que Constroem

Data da análise: 18/10/2026. Este relatório separa o que **foi implementado** do que **depende de ações externas**. Nenhum dado de posicionamento, volume de busca, Lighthouse ou Core Web Vitals foi medido ou é afirmado aqui.

## 1. Situação inicial (análise do projeto)
- **Tecnologia:** site estático (HTML, CSS e JavaScript sem build nem framework). Nenhuma migração foi necessária.
- **Páginas:** `index.html` (página única com seções), mais `privacidade.html` e `termos.html`.
- **Conteúdo e renderização:** o conteúdo principal (H1, serviços, como funciona, textos institucionais) está no HTML entregue. Somente a lista de cidades, os números da região, os cards de oportunidades e os contatos do rodapé são montados por JavaScript a partir de `assets/js/data.js` (o Google renderiza JavaScript, mas esses trechos não estão no HTML bruto).
- **Problemas encontrados:**
  1. Sem `canonical`, sem `og:image`/`og:url`, sem Twitter Cards.
  2. JSON-LD mínimo (só `Organization`, sem logo, contato, `sameAs`, `WebSite` ou `WebPage`).
  3. Sem `sitemap.xml`; `robots.txt` sem referência ao sitemap.
  4. Título e descrição da home sem a formulação pedida e sem metadados nas páginas legais além do básico.
  5. O H2 "Da necessidade / à conexão certa" tinha uma quebra de linha sem espaço (o texto era lido "necessidadeà").
  6. A seção de parceiros e região pulava o nível de H2 (H1 → H3).
  7. Não havia um texto curto, visível, dizendo quem é a Rede Prime e a quem ela atende.
  8. A imagem principal do hero só era pedida após o JavaScript executar.
- **Domínio de produção:** não constava no projeto; foi informado depois pelo cliente (https://redeprimes.com.br).
- **Google Search Console / verificação:** nenhuma configuração existe no projeto.
- **Cookies/análise:** o site não usa cookies próprios, `localStorage`, Analytics nem pixels.

## 2. O que foi implementado
**Arquivos criados:** `sitemap.xml`, `llms.txt`, `scripts/definir-dominio.py`, `SEO-REPORT.md`.
**Arquivos atualizados:** `index.html`, `privacidade.html`, `termos.html`, `robots.txt`, `assets/css/styles.css`, `README.md`.

### Metadados
- **Home:** título `Rede Prime | Negócios da Construção Civil em Ribeirão Preto` (59 caracteres) e descrição de 156 caracteres: "Conheça a Rede Prime, uma rede de negócios da construção civil que conecta empresas, profissionais, fornecedores e oportunidades em Ribeirão Preto e região."
- **Todas as páginas:** `lang="pt-BR"`, `canonical`, Open Graph completo (`og:url`, `og:image` 1200×630 com tipo, dimensões e alt) e Twitter Card `summary_large_image`. As páginas legais têm título e descrição próprios.
- Sem `meta robots` (o padrão já é indexar). Favicons e `apple-touch-icon` já existiam e foram mantidos.

### Dados estruturados (JSON-LD, um bloco por página)
- **Home:** `Organization` (nome Rede Prime, nome alternativo "Rede Prime Serviços" que consta na logo oficial, slogan, URL, logo, e-mail, `ContactPoint` com WhatsApp, `sameAs` com o Instagram oficial, área de atuação Ribeirão Preto/SP), `WebSite` e `WebPage`.
- **Políticas:** `WebPage` + `BreadcrumbList` (Rede Prime › página).
- **Não foram usados:** `LocalBusiness` (não há endereço público confirmado), avaliações, notas, CNPJ, endereço, coordenadas, certificações ou quantidades de clientes.

### Conteúdo e links internos
- Novo parágrafo visível na seção "Uma rede que gera valor real" (âncora "Sobre"): explica quem é a Rede Prime, quem ela reúne, a região e como falar com a equipe. Usa apenas informações já presentes no site.
- H2 oculto (leitor de tela) na seção de parceiros e região, corrigindo o salto de H1 para H3. Hierarquia verificada: 1 H1 por página e nenhum nível pulado.
- Corrigido o espaço do H2 "Da necessidade à conexão certa".
- Links internos: menu e rodapé apontam para as seções; o rodapé e o formulário apontam para as páginas legais, que apontam de volta para o site.

### Palavras-chave (análise semântica, sem ferramenta de pesquisa)
Não houve acesso a ferramentas de volume ou concorrência; **nenhum número de busca é apresentado**. Termos priorizados, coerentes com o que o site oferece: **Rede Prime**, rede de negócios da construção civil, Ribeirão Preto e região, empresas/profissionais/fornecedores da construção civil, e as categorias de serviço já descritas (projeto, estrutura, instalações, esquadrias, acabamentos, área externa, móveis e interiores, pós-obra). Evitei termos de serviços que a Rede Prime não executa (ela conecta, não faz a obra) e não repeti palavras-chave artificialmente. O H1 (texto do cliente) não foi alterado; a marca aparece no título, descrição, texto institucional, logo (alt "Rede Prime Serviços…") e dados estruturados.

### SEO local
Ribeirão Preto e região aparecem no título, na descrição, no texto institucional, na seção "Nossa rede" e no `areaServed`. Não foram criadas páginas por cidade nem inserido endereço.

### Imagens
O logotipo tem `alt` adequado. As demais imagens do site são decorativas (fundos CSS), sem necessidade de `alt`. O pesos das imagens variam de 3 KB a 237 KB, sem arquivos excessivos. O hero agora tem `preload` com prioridade alta. O logotipo em PNG (142 KB) poderia ser reduzido por uma versão menor derivada do arquivo oficial, mas isso não foi feito para não alterar o arquivo do cliente.

### sitemap.xml
URLs incluídas (todas existem, são públicas e indexáveis): `/`, `/privacidade.html`, `/termos.html`. Sem `lastmod`/`priority`/`changefreq` (opcionais e não confiáveis).

### robots.txt
`User-agent: *`, `Allow: /` (nada é bloqueado, inclusive CSS, JS e imagens) e a linha `Sitemap:` com a URL absoluta.

### llms.txt
Resumo em Markdown (nome, descrição, categorias de serviços, como funciona, região, contatos e páginas públicas). É uma convenção emergente: **não garante** uso por IAs nem posicionamento. Não foram criados `ai.txt` nem arquivos redundantes.

## 3. Domínio de produção
O domínio informado pelo cliente é **https://redeprimes.com.br** (sem `www`). O script `scripts/definir-dominio.py` foi executado e substituiu o marcador `__SITE_URL__` em `index.html`, `privacidade.html`, `termos.html`, `sitemap.xml`, `robots.txt` e `llms.txt`. Para trocar o domínio no futuro: `python3 scripts/definir-dominio.py https://novo.com.br --de https://redeprimes.com.br`.

Ainda é preciso, na hospedagem: servir o site nesse endereço com HTTPS, redirecionar `www.redeprimes.com.br` para `redeprimes.com.br` (e `http` para `https`) para manter uma única versão canônica, e manter `robots.txt`, `sitemap.xml` e `llms.txt` na raiz. **Não foi possível verificar o DNS, o certificado nem a publicação real** (sem acesso à rede neste ambiente).

## 4. Testes realizados
- JSON-LD das 3 páginas: sintaxe válida (parse JSON), antes e depois da troca do domínio.
- `sitemap.xml`: XML válido; as 3 URLs correspondem a arquivos existentes (testado em cópia temporária com domínio fictício, que **não** foi mantido).
- Script `definir-dominio.py`: testado em cópia temporária e depois executado com o domínio real; nenhum marcador `__SITE_URL__` restou nos arquivos.
- Navegador (390 e 1440 px, 3 páginas): sem erros de JavaScript, sem rolagem horizontal, 1 H1 por página, sem salto de hierarquia e sem âncoras quebradas.
- **Não executados:** Lighthouse/Core Web Vitals, validador do Rich Results Test/Schema.org, Search Console, teste em servidor de produção e verificação da publicação dos arquivos na raiz.

## 5. Pendências que dependem de ações externas
1. Publicar em `https://redeprimes.com.br`, com HTTPS e redirecionamento do `www`, e confirmar que `robots.txt`, `sitemap.xml` e `llms.txt` abrem na raiz (por exemplo, `https://redeprimes.com.br/sitemap.xml`).
2. **Google Search Console:** adicionar a propriedade do domínio (verificação por DNS ou arquivo/tag, com o código que o Google fornecer), confirmar a versão canônica, enviar `https://DOMINIO/sitemap.xml`, inspecionar a URL principal, solicitar indexação e acompanhar os relatórios de indexação e desempenho. **Nada disso foi feito nem verificado.**
3. **Rich Results Test / validador Schema.org** nas URLs publicadas.
4. **Confirmar com o cliente:** nome alternativo "Rede Prime Serviços" (consta na logo), as cidades exibidas na seção de região (vindas do mockup), endereço público (se houver, para avaliar `LocalBusiness`) e a existência de outros perfis oficiais (só o Instagram foi identificado).
5. **Google Perfil de Empresa:** avaliar com o cliente se faz sentido (só se houver atendimento/endereço comprovados).
6. **Imagens e conteúdo:** trocar por fotos reais do cliente, com legendas/textos descritivos quando forem conteúdo editorial. Se desejado, converter o hero em `<img>` para ser descoberto também pela busca de imagens.
7. **Backlinks/presença local:** citar o site no Instagram e em diretórios confiáveis; isso depende de ação do cliente.
8. **Medir:** após a publicação, rodar Lighthouse/PageSpeed e comparar. Não se deve esperar resultado imediato: a indexação e o posicionamento dependem do Google.
