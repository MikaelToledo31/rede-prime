# Rede Prime — Negócios que Constroem

Site institucional da **Rede Prime**, rede de negócios da construção civil que conecta clientes, empresas, profissionais e fornecedores em Ribeirão Preto e região (SP).

Domínio de produção configurado: **https://redeprimes.com.br**

## 1. Sobre o projeto

**Objetivo:** apresentar a Rede Prime, mostrar as categorias de serviços de uma obra, explicar como funciona a conexão e levar o visitante ao contato pelo WhatsApp (clientes que têm uma demanda e profissionais ou empresas que querem entrar na rede).

**Principais funcionalidades**
- Página única com: cabeçalho fixo, hero, serviços (8 categorias com detalhe em janela e busca), "Como funciona", cards de clientes e parceiros, região de atuação, diferenciais ("Sobre"), oportunidades, formulário "Tem uma demanda?" e rodapé.
- Menu mobile (hambúrguer), foco visível e navegação por teclado, respeito a `prefers-reduced-motion`.
- **Formulários que só abrem o WhatsApp:** "Tem uma demanda?" e "Área do Parceiro" validam os campos, montam a mensagem no navegador e abrem `wa.me` com o texto pronto. O site não envia, salva nem armazena os dados; o usuário revisa e envia pelo próprio WhatsApp. Os modelos de mensagem estão em `MSG`, em `assets/js/main.js`.
- Botões de WhatsApp (hero e card de clientes) e ícones de Instagram e WhatsApp no rodapé.
- Páginas de **Política de Privacidade** e **Termos de Uso**.

## 2. Tecnologias utilizadas

- HTML, CSS e JavaScript puros (sem framework, sem bundler, sem `package.json`, sem dependências instaladas).
- Fontes **Inter** e **Jost** carregadas do Google Fonts.
- Ícones em SVG inline (sprite no próprio HTML).
- `scripts/definir-dominio.py`: script Python 3 (somente biblioteca padrão) para definir o domínio nas URLs absolutas.

## 3. Estrutura do projeto

```text
.
├── index.html                  # página principal
├── privacidade.html            # Política de Privacidade
├── termos.html                 # Termos de Uso
├── sitemap.xml                 # URLs públicas para os buscadores
├── robots.txt                  # orientações de rastreamento
├── llms.txt                    # resumo do site para sistemas de IA
├── SEO-REPORT.md               # relatório de SEO: alterações, testes e pendências
├── PENDENCIAS-JURIDICAS.md     # pendências dos textos legais (documento interno)
├── scripts/
│   └── definir-dominio.py      # define/troca o domínio nas URLs absolutas
└── assets/
    ├── css/styles.css          # estilos e tokens de design (:root)
    ├── js/data.js              # conteúdo editável (contatos, cidades, oportunidades)
    ├── js/main.js              # comportamento da página principal
    ├── js/legal.js             # menu e rodapé das páginas legais
    └── img/                    # logo, favicons, imagem de compartilhamento e fotos
```

## 4. SEO e indexação

**Metadados** (em `index.html`, `privacidade.html` e `termos.html`): `lang="pt-BR"`, título e descrição próprios por página, `canonical`, Open Graph (inclui `og:image` de 1200×630) e Twitter Card `summary_large_image`.
- Home: título "Rede Prime | Negócios da Construção Civil em Ribeirão Preto" e descrição de 156 caracteres.
- Não há `meta robots`: o padrão dos buscadores é indexar.

**URLs canônicas:** cada página aponta para si mesma em `https://redeprimes.com.br` (a home como `/`; as demais como `/privacidade.html` e `/termos.html`). O mesmo endereço aparece em `og:url`, nos dados estruturados e no sitemap.

**Dados estruturados (JSON-LD, um bloco por página)**
- Home: `Organization` (nome, nome alternativo "Rede Prime Serviços" que consta na logo, slogan, URL, logo, e-mail, `ContactPoint` com o WhatsApp, `sameAs` com o Instagram e área de atuação em Ribeirão Preto/SP), `WebSite` e `WebPage`.
- Páginas legais: `WebPage` e `BreadcrumbList`.
- Não são usados `LocalBusiness`, avaliações, CNPJ, endereço nem coordenadas, porque não há esses dados confirmados.

**SEO local e palavras-chave:** a estratégia foi definida por análise semântica, **sem ferramenta de pesquisa** (nenhum volume de busca foi medido). Termos trabalhados de forma natural: "Rede Prime", rede de negócios da construção civil, Ribeirão Preto e região, e as categorias de serviço do site. Ribeirão Preto e região aparecem no título, na descrição, no texto institucional, na seção "Nossa rede" e no `areaServed`. Não há páginas por cidade nem endereço publicado.

**Conteúdo e links internos:** 1 H1 por página e hierarquia de títulos sem saltos; parágrafo institucional visível na seção "Sobre"; logo com `alt`; menu e rodapé levam às seções; o rodapé e os formulários levam às páginas legais, que apontam de volta ao site. O hero tem `preload` da imagem.

**Pontos de atenção:** a lista de cidades, os números da região e os cards de oportunidades são montados por JavaScript (`data.js`); o Google costuma renderizar JavaScript, mas esse conteúdo não está no HTML bruto.

## 5. Arquivos de SEO

| Arquivo | Finalidade |
|---|---|
| `sitemap.xml` | Lista as URLs públicas que os buscadores podem descobrir (home, privacidade e termos). Não garante indexação. |
| `robots.txt` | Permite o rastreamento de todo o site (inclusive CSS, JS e imagens) e informa o endereço do sitemap. Não é mecanismo de segurança. |
| `llms.txt` | Resumo em Markdown do site (empresa, serviços, como funciona, região, contatos e páginas) para sistemas de IA que optem por consultá-lo. É uma convenção emergente: não garante uso nem posicionamento. |
| `SEO-REPORT.md` | Relatório da análise: problemas encontrados, alterações, testes realizados e pendências. |

## 6. Instalação e execução

Não há dependências a instalar, nem comando de build, nem testes automatizados no projeto.

```bash
python3 -m http.server 8080   # depois abra http://localhost:8080
```

Também é possível abrir `index.html` direto no navegador. As fontes do Google exigem internet; sem ela, o site usa fontes do sistema.

## 7. Publicação e indexação

1. **Hospedagem:** envie a pasta inteira para uma hospedagem estática (Netlify, Vercel, Cloudflare Pages, GitHub Pages ou hospedagem comum), servindo o site em `https://redeprimes.com.br` com HTTPS.
2. **Versão única:** redirecione `www.redeprimes.com.br` para `redeprimes.com.br` (e `http` para `https`), para manter a versão canônica.
3. **Raiz do domínio:** confirme que `https://redeprimes.com.br/robots.txt`, `/sitemap.xml` e `/llms.txt` abrem.
4. **Google Search Console** (ainda não configurado; nada foi enviado nem verificado):
   1. Em search.google.com/search-console, adicione a propriedade e verifique-a (por DNS ou pelo método que o Google indicar).
   2. Em **Sitemaps**, envie `sitemap.xml`.
   3. Em **Inspeção de URL**, inspecione `https://redeprimes.com.br/` e, se apropriado, solicite a indexação.
   4. Acompanhe os relatórios de **Páginas** (indexação) e de **Desempenho**, e corrija os problemas apontados.
5. **Antes de divulgar:** revise a Política de Privacidade e os Termos com advogado (veja `PENDENCIAS-JURIDICAS.md`), confirme os números da região em `data.js` (`regionStats`) e marque `showPlaceholderNotices: false` quando as oportunidades de exemplo forem confirmadas ou substituídas.

A indexação e o posicionamento dependem do Google e levam tempo; este projeto não garante resultados.

## 8. Manutenção

**Conteúdo editável (`assets/js/data.js`):** `whatsappNumber`, `whatsappMessage`, `email`, `phone`, `address`, `social`, `showPlaceholderNotices`, `regionStats`, `cities` e `opportunities`. Campos vazios não são exibidos.

**Estilos:** cores, fontes e espaçamentos em `:root`, em `assets/css/styles.css`.

**Imagens (`assets/img/`):** use os nomes `hero.jpg`, `como-funciona.jpg`, `cliente.jpg`, `parceiro.jpg`, `servico-projeto.jpg`, `servico-estrutura.jpg`, `servico-instalacoes.jpg`, `servico-esquadrias.jpg`, `servico-acabamentos.jpg`, `servico-area-externa.jpg`, `servico-moveis.jpg` e `servico-pos-obra.jpg` (JPG comprimido, cerca de 1600 px). Cards de oportunidades usam `oportunidade-*.jpg`, indicados em `data.js`. Também ficam aqui `logo.png`, `favicon-32.png`, `favicon-64.png`, `apple-touch-icon.png` e `og-image.jpg` (1200×630).

**Metadados:** os metadados e o JSON-LD estão escritos em cada página (não há modelo compartilhado). Ao mudar título, descrição, contatos, logo ou perfis, atualize `index.html`, `privacidade.html` e `termos.html`.

**Nova página pública**
1. Crie o arquivo HTML com `<title>`, `meta description`, `canonical`, Open Graph/Twitter e JSON-LD próprios.
2. Adicione a URL em `sitemap.xml` e, se relevante, em `llms.txt`.
3. Inclua links internos para a nova página.
4. No Search Console, inspecione a URL e acompanhe a indexação. Não inclua no sitemap páginas com `noindex`, de teste ou redirecionadas.

**Consistência das URLs:** o endereço canônico de cada página deve ser igual em `canonical`, `og:url`, no JSON-LD e no `sitemap.xml`. Para trocar o domínio:

```bash
python3 scripts/definir-dominio.py https://novo-dominio.com.br --de https://redeprimes.com.br
```

**Páginas legais:** versão inicial, sujeita a revisão jurídica. Ao alterar o texto, atualize manualmente a data de "Última atualização".

**Formulários:** não há endpoint, e-mail, banco de dados ou armazenamento de dados; eles só abrem o WhatsApp. Se isso mudar, atualize também a Política de Privacidade.
