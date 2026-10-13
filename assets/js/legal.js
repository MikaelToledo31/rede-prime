/* REDE PRIME — legal.js: comportamento mínimo das páginas de Privacidade e Termos */
(() => {
  "use strict";
  const C = window.REDE_PRIME.config;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c]));
  const icon = id => `<svg class="ic" aria-hidden="true"><use href="#${id}"/></svg>`;

  // menu mobile
  const nav = $("#nav"), tg = $("#nav-toggle");
  const closeMenu = () => { nav.classList.remove("open"); tg.setAttribute("aria-expanded", "false"); tg.setAttribute("aria-label", "Abrir menu"); document.body.classList.remove("lock"); };
  tg.addEventListener("click", () => {
    const open = !nav.classList.contains("open");
    nav.classList.toggle("open", open); tg.setAttribute("aria-expanded", String(open));
    tg.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu"); document.body.classList.toggle("lock", open);
  });
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeMenu(); });
  matchMedia("(min-width:1320px)").addEventListener("change", closeMenu);

  // redes e contatos do rodapé (mesma fonte do site: data.js)
  const btns = [];
  if (C.social.instagram) btns.push(`<a class="social" href="${esc(C.social.instagram)}" target="_blank" rel="noopener noreferrer" aria-label="Instagram da Rede Prime">${icon("i-instagram")}</a>`);
  if (C.whatsappNumber) btns.push(`<a class="social" href="https://wa.me/${esc(C.whatsappNumber)}" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp da Rede Prime">${icon("i-whatsapp")}</a>`);
  $("#foot-social").innerHTML = btns.join("");
  const rows = [];
  if (C.whatsappNumber) {
    const d = C.whatsappNumber.replace(/\D/g, "").replace(/^55(?=\d{10,11}$)/, "");
    const lbl = d.length === 11 ? `(${d.slice(0,2)}) ${d.slice(2,7)}-${d.slice(7)}` : "+" + C.whatsappNumber;
    rows.push(`<li><a class="wa-link" href="https://wa.me/${esc(C.whatsappNumber)}" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp da Rede Prime ${esc(lbl)} (abre em nova aba)">${icon("i-whatsapp")}${esc(lbl)}</a></li>`);
  }
  if (C.email) rows.push(`<li><a href="mailto:${esc(C.email)}">${esc(C.email)}</a></li>`);
  if (C.social.instagram) rows.push(`<li><a href="${esc(C.social.instagram)}" target="_blank" rel="noopener noreferrer">@${esc(C.social.instagram.replace(/\/+$/, "").split("/").pop())}</a></li>`);
  rows.push("<li>Ribeirão Preto – SP</li>");
  $("#foot-contact").innerHTML = rows.join("");
  $("#year").textContent = new Date().getFullYear();
})();
