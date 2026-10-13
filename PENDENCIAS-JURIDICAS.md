# Pendências para a Política de Privacidade e os Termos de Uso — Rede Prime

Documento interno (não é publicado no site). As páginas `privacidade.html` e `termos.html` são uma **versão inicial**, escrita com base no funcionamento real do site. Recomenda-se **revisão por advogado** antes da publicação definitiva. Elas não garantem, por si só, conformidade integral com a LGPD ou com outras normas.

## 1. O que foi verificado no código (base dos textos)
- Site estático (HTML, CSS e JavaScript), sem backend, sem banco de dados e sem envio de e-mail.
- Os dois formulários ("Tem uma demanda?" e "Área do Parceiro") só montam uma mensagem no navegador e abrem `wa.me/5516992614260` com o texto pré-preenchido. Nada é enviado nem armazenado pelo site. O conteúdo da mensagem trafega pelo endereço do WhatsApp ao abrir o link (isso consta na política).
- Não há cookies próprios, `localStorage`/`sessionStorage`, ferramentas de análise nem pixels de publicidade.
- Serviços externos presentes: Google Fonts (carregado pelo navegador), links para WhatsApp e Instagram (@redeprimes).
- Dados de contato confirmados: e-mail redeprimee@gmail.com, WhatsApp (16) 99261-4260 e Instagram @redeprimes.

## 2. Informações que o responsável precisa confirmar ou fornecer
1. **Identificação do controlador:** razão social, CNPJ e endereço da Rede Prime (hoje não constam nas páginas).
2. **Canal para direitos do titular (LGPD):** as páginas indicam o e-mail redeprimee@gmail.com (além de WhatsApp e Instagram) para dúvidas e solicitações de dados pessoais. Confirmar se esse é mesmo o canal definitivo para privacidade (um e-mail corporativo do domínio próprio costuma ser mais adequado) e se haverá encarregado (DPO) a ser identificado.
3. **Compartilhamento com parceiros:** as páginas dizem, com base no que o site descreve, que as demandas podem ser encaminhadas a parceiros compatíveis. Confirmar na prática: o que é repassado (inclusive o WhatsApp do cliente), a quem, e se isso é informado ao cliente antes.
4. **Dados dos parceiros:** confirmar como são avaliados, mantidos e usados os dados de quem pede para integrar a rede.
5. **Retenção:** definir por quanto tempo as conversas e dados recebidos pelo WhatsApp serão mantidos e como serão eliminados. As páginas usam apenas critérios gerais, sem prazos.
6. **Bases legais:** as páginas não citam bases legais específicas. Isso deve ser avaliado juridicamente para cada finalidade (atendimento de solicitações, avaliação de parceiros etc.).
7. **Hospedagem:** informar qual provedor hospeda o site (e se há registros de acesso e uso de HTTPS). Hoje a política fala em "provedor de hospedagem" de forma genérica.
8. **Imagens do site:** os Termos dizem que as imagens têm caráter ilustrativo. Confirmar a origem e a licença das imagens (várias parecem geradas por IA) e se alguma representa obra real da Rede Prime ou de parceiros.
9. **Números e oportunidades exibidos:** os indicadores da seção "Nossa rede" (+10 cidades, +100 empresas) e os cards de oportunidades vieram do mockup/arquivos do cliente. Confirmar se são reais.
10. **Operação real da Rede Prime:** conferir se o papel descrito (conectar, sem executar a obra; contratação direta com o parceiro; possíveis taxas ou comissões) corresponde ao modelo de negócio. Os Termos não mencionam remuneração.
11. **Foro e condições comerciais:** os Termos não definem foro. Se desejado, deve ser incluído por advogado, respeitando o Código de Defesa do Consumidor.
12. **Idade mínima / crianças:** não tratado. Avaliar se é necessário.

## 3. Decisão tomada nos formulários (para validar)
- A caixa "Li e concordo com a Política de Privacidade" **foi removida** dos dois formulários. Como o site não recebe os dados antes de o usuário enviar a mensagem pelo WhatsApp, um aceite obrigatório genérico não correspondia a um consentimento específico. No lugar, há um aviso informativo com link para a Política de Privacidade.
- Se o jurídico entender que um consentimento específico é necessário, ele deve ser implementado com finalidade clara e opção real de escolha.

## 4. Antes de publicar
- Revisão jurídica de ambos os textos.
- Inclusão dos dados cadastrais (item 1) e do canal de privacidade (item 2).
- Atualizar a data de "Última atualização" nas duas páginas.
- Definir domínio final (canonical, sitemap).
