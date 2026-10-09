/* ==========================================================
   REDE PRIME — data.js
   ÚNICO arquivo que o cliente precisa editar para trocar
   conteúdo dinâmico: contatos, números, cidades, oportunidades.
   Campos vazios ("") simplesmente não são exibidos no site.
   ========================================================== */
window.REDE_PRIME = {
  config: {
    // URL que recebe os formulários (Formspree, Getform, Web3Forms, API própria...).
    // Enquanto estiver vazio, o site NÃO finge enviar: informa que o envio não está ativo.
    formEndpoint: "",
    whatsappNumber: "",   // somente dígitos com DDI+DDD, ex.: "55DDDNUMERO" (a definir pelo cliente)
    email: "",
    phone: "",
    address: "",
    social: { instagram: "", linkedin: "", youtube: "" },
    // true = mostra avisos "valores ilustrativos / exemplo". Mude para false quando
    // os números e as oportunidades forem confirmados pelo cliente.
    showPlaceholderNotices: true
  },

  // Indicadores da faixa superior (valores do mockup, a confirmar com o cliente)
  stats: [
    { icon: "i-users",     value: "+500", label: "profissionais e empresas conectadas" },
    { icon: "i-briefcase", value: "+200", label: "projetos atendidos" },
    { icon: "i-nodes",     value: "+10",  label: "segmentos da construção civil" }
  ],

  // Números do painel "Nossa rede" (valores do mockup, a confirmar)
  regionStats: [
    { value: "+10",  label: "cidades atendidas" },
    { value: "+100", label: "empresas parceiras" }
  ],

  // Localidades. Para incluir outra, basta adicionar um item. A primeira é o centro.
  cities: ["Ribeirão Preto","Batatais","Sertãozinho","Orlândia","Brodowski","Barretos","Serrana","Jaboticabal","Cravinhos"],

  // Oportunidades ILUSTRATIVAS (do mockup). Substitua por dados reais quando existirem
  // e troque "sample" para false.
  opportunities: [
    { code:"RP-0248", category:"Marmoraria", city:"Ribeirão Preto - SP", type:"Residencial",
      description:"Bancadas e revestimentos em pedra para residência.", status:"Nova", sample:true, img:"" },
    { code:"RP-0249", category:"Drywall", city:"Sertãozinho - SP", type:"Comercial",
      description:"Divisórias e forros para sala comercial.", status:"Nova", sample:true, img:"" },
    { code:"RP-0250", category:"Esquadrias de Alumínio", city:"Ribeirão Preto - SP", type:"Residencial alto padrão",
      description:"Fornecimento e instalação de esquadrias.", status:"Nova", sample:true, img:"" }
  ]
};
