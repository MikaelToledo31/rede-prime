/* ==========================================================
   REDE PRIME — data.js
   ÚNICO arquivo que o cliente precisa editar para trocar
   conteúdo dinâmico: contatos, números, cidades, oportunidades.
   Campos vazios ("") simplesmente não são exibidos no site.
   ========================================================== */
window.REDE_PRIME = {
  config: {
    // Os formulários não enviam dados: apenas abrem o WhatsApp abaixo com a mensagem montada.
    whatsappNumber: "5516992614260",   // somente dígitos: DDI + DDD + número (+55 16 99261-4260)
    whatsappMessage: "Olá! Vim pelo site da Rede Prime e gostaria de mais informações.",
    email: "",
    phone: "",
    address: "",
    social: { instagram: "https://www.instagram.com/redeprimes/", linkedin: "", youtube: "" },
    // true = mostra avisos "valores ilustrativos / exemplo". Mude para false quando
    // os números e as oportunidades forem confirmados pelo cliente.
    showPlaceholderNotices: true
  },

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
      description:"Bancadas e revestimentos em pedra para residência.", status:"Nova", sample:false, img:"assets/img/oportunidade-marmoraria.jpg" },
    { code:"RP-0249", category:"Drywall", city:"Sertãozinho - SP", type:"Comercial",
      description:"Divisórias e forros para sala comercial.", status:"Nova", sample:false, img:"assets/img/oportunidade-drywall.jpg" },
    { code:"RP-0250", category:"Esquadrias de Alumínio", city:"Ribeirão Preto - SP", type:"Residencial alto padrão",
      description:"Fornecimento e instalação de esquadrias.", status:"Nova", sample:false, img:"assets/img/oportunidade-esquadrias.jpg" }
  ]
};
