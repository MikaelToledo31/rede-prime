/* REDE PRIME — main.js (sem dependências) */
(() => {
  "use strict";
  const D = window.REDE_PRIME, C = D.config;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c]));
  const icon = (id, cls = "") => `<svg class="ic ${cls}" aria-hidden="true"><use href="#${id}"/></svg>`;
  const norm = s => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  const loadedAt = Date.now();
  const waLink = (text = C.whatsappMessage) => `https://wa.me/${C.whatsappNumber}?text=${encodeURIComponent(text).replace(/!/g, "%21")}`;
  const waLabel = n => { const d = n.replace(/\D/g, "").replace(/^55(?=\d{10,11}$)/, ""); return d.length === 11 ? `(${d.slice(0,2)}) ${d.slice(2,7)}-${d.slice(7)}` : d.length === 10 ? `(${d.slice(0,2)}) ${d.slice(2,6)}-${d.slice(6)}` : "+" + n; };
  // botões marcados com data-wa passam a abrir o WhatsApp (sem número configurado, mantêm o destino original)
  if (C.whatsappNumber) $$("[data-wa]").forEach(a => { a.href = waLink(); a.target = "_blank"; a.rel = "noopener noreferrer"; a.setAttribute("aria-label", a.textContent.trim() + " (abre o WhatsApp em nova aba)"); });

  /* ---------- imagens substituíveis: usa o arquivo só se ele existir ---------- */
  $$("[data-img]").forEach(el => {
    const im = new Image();
    const abs = new URL(el.dataset.img, document.baseURI).href; im.onload = () => el.style.setProperty("--img", `url("${abs}")`);
    im.src = abs;
  });

  /* ---------- conteúdo vindo de data.js ---------- */
  $("#region-stats").innerHTML = D.regionStats.map(s => `<div><b>${esc(s.value)}</b><span>${esc(s.label)}</span></div>`).join("");
  $("#cities").innerHTML = D.cities.map(c => `<li>${icon("i-pin")}${esc(c)}</li>`).join("") +
    `<li>${icon("i-pin")}E mais…</li>`;
  $$("[data-city-list]").forEach(dl => { dl.innerHTML = D.cities.map(c => `<option value="${esc(c)}">`).join(""); });

  // rede esquemática (ilustração abstrata, NÃO é um mapa geográfico)
  (() => {
    const others = D.cities.slice(1), n = others.length, cx = 130, cy = 110, r = 78;
    let svg = `<circle cx="${cx}" cy="${cy}" r="100" fill="none" stroke="rgba(255,255,255,.1)"/><circle cx="${cx}" cy="${cy}" r="52" fill="none" stroke="rgba(255,255,255,.08)" stroke-dasharray="2 4"/>`;
    others.forEach((c, i) => {
      const a = (Math.PI * 2 * i) / n - Math.PI / 2, x = cx + r * Math.cos(a), y = cy + r * Math.sin(a);
      svg += `<line x1="${cx}" y1="${cy}" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}" stroke="rgba(255,255,255,.22)"/><circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="2.6" fill="#cfd6e0"/>`;
    });
    svg += `<circle cx="${cx}" cy="${cy}" r="14" fill="rgba(255,255,255,.12)"/><circle cx="${cx}" cy="${cy}" r="5" fill="#fff"/>`;
    $("#net").innerHTML = svg;
  })();

  $("#opps").innerHTML = D.opportunities.map((o, i) => `
    <article class="opp">
      <div class="opp-img${o.img ? " has-img" : ""}"><div class="ph" style="--x:${30 + i * 20}%;--y:55%;--s:${40 + i * 12}px" ${o.img ? `data-img="${esc(o.img)}"` : ""}></div>
        ${o.sample && C.showPlaceholderNotices ? '<span class="opp-tag ex">Exemplo ilustrativo</span>' : ""}
        <span class="opp-tag">${esc(o.status)}</span></div>
      <div class="opp-body"><span class="code">${esc(o.code)}</span><span class="cat">${esc(o.category)}</span>
        <span>${esc(o.city)}</span><span>${esc(o.type)}</span><span class="desc">${esc(o.description)}</span></div>
    </article>`).join("");
  $$("#opps [data-img]").forEach(el => { const im = new Image(); const abs = new URL(el.dataset.img, document.baseURI).href; im.onload = () => el.style.setProperty("--img", `url("${abs}")`); im.src = abs; });
  // o aviso só aparece enquanto houver alguma oportunidade marcada como exemplo (sample: true)
  if (C.showPlaceholderNotices && D.opportunities.some(o => o.sample)) {
    $("#opps-notice").hidden = false;
  }

  // rodapé: só exibe contatos fornecidos
  (() => {
    const rows = [];
    if (C.phone) rows.push(`<li><a href="tel:${esc(C.phone.replace(/\D/g, ""))}">${esc(C.phone)}</a></li>`);
    if (C.whatsappNumber) rows.push(`<li><a class="wa-link" href="${esc(waLink())}" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp da Rede Prime ${esc(waLabel(C.whatsappNumber))} (abre em nova aba)">${icon("i-whatsapp")}${esc(waLabel(C.whatsappNumber))}</a></li>`);
    if (C.email) rows.push(`<li><a href="mailto:${esc(C.email)}">${esc(C.email)}</a></li>`);
    if (C.address) rows.push(`<li>${esc(C.address)}</li>`);
    const ig = C.social.instagram;
    if (ig) rows.push(`<li><a href="${esc(ig)}" target="_blank" rel="noopener noreferrer" aria-label="Instagram da Rede Prime (abre em nova aba)">@${esc(ig.replace(/\/+$/, "").split("/").pop())}</a></li>`);
    Object.entries(C.social).forEach(([k, u]) => { if (u && k !== "instagram") rows.push(`<li><a href="${esc(u)}" rel="noopener noreferrer" target="_blank">${k[0].toUpperCase() + k.slice(1)}</a></li>`); });
    rows.push(`<li>Ribeirão Preto – SP</li>`);
    $("#foot-contact").innerHTML = rows.join("");
  })();
  // ícones de redes sociais (só os que tiverem URL em data.js)
  (() => {
    const box = $("#foot-social"); if (!C.social.instagram) return;
    box.innerHTML = `<a class="social" href="${esc(C.social.instagram)}" target="_blank" rel="noopener noreferrer" aria-label="Instagram da Rede Prime">${icon("i-instagram")}</a>`;
  })();
  $("#year").textContent = new Date().getFullYear();

  /* ---------- diálogos ---------- */
  const openDlg = d => { if (!d.open) d.showModal(); };
  $$("dialog").forEach(d => {
    d.addEventListener("click", e => { if (e.target === d) d.close(); });
    $$("[data-close]", d).forEach(b => b.addEventListener("click", () => d.close()));
  });
  $$("[data-open]").forEach(b => b.addEventListener("click", () => { closeMenu(); openDlg($("#" + b.dataset.open)); }));

  /* ---------- menu mobile ---------- */
  const nav = $("#nav"), tg = $("#nav-toggle");
  function closeMenu() { nav.classList.remove("open"); tg.setAttribute("aria-expanded", "false"); tg.setAttribute("aria-label", "Abrir menu"); document.body.classList.remove("lock"); }
  tg.addEventListener("click", () => {
    const open = !nav.classList.contains("open");
    nav.classList.toggle("open", open); tg.setAttribute("aria-expanded", String(open));
    tg.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu"); document.body.classList.toggle("lock", open);
  });
  $$("a", nav).forEach(a => a.addEventListener("click", closeMenu));
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeMenu(); });
  matchMedia("(min-width:1320px)").addEventListener("change", closeMenu);

  /* ---------- destaque do item de menu ---------- */
  (() => {
    const links = $$('.nav ul a'), map = new Map(links.map(a => [a.getAttribute("href").slice(1), a]));
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { links.forEach(l => l.removeAttribute("aria-current")); map.get(e.target.id)?.setAttribute("aria-current", "true"); }
    }), { rootMargin: "-40% 0px -55% 0px" });
    map.forEach((_, id) => { const s = document.getElementById(id); if (s) io.observe(s); });
  })();

  /* ---------- serviços: detalhe + busca ---------- */
  const services = $$(".svc").map(b => ({ el: b, slug: b.dataset.service, title: $("h3", b).textContent, items: b.dataset.items.split("|") }));
  const svcDlg = $("#svc-dialog");
  function openService(s) {
    $("#svc-title").textContent = s.title;
    $("#svc-items").innerHTML = s.items.map(i => `<li>${esc(i)}</li>`).join("");
    $("#svc-cta").dataset.service = s.slug;
    openDlg(svcDlg);
  }
  services.forEach(s => s.el.addEventListener("click", () => openService(s)));
  $("#svc-cta").addEventListener("click", e => {
    svcDlg.close();
    const sel = $("#contato-servico"), s = services.find(x => x.slug === e.currentTarget.dataset.service);
    if (s) sel.value = s.title;
    $("#contato").scrollIntoView();
    setTimeout(() => $("#contato-nome").focus({ preventScroll: true }), 250);
  });

  const sDlg = $("#search-dialog"), sIn = $("#search-input"), sOut = $("#search-results");
  function renderSearch() {
    const q = norm(sIn.value.trim()), rows = [];
    services.forEach(s => {
      const hitItems = q ? s.items.filter(i => norm(i).includes(q)) : [];
      if (!q || norm(s.title).includes(q) || hitItems.length)
        rows.push(`<button type="button" class="res" data-slug="${s.slug}"><b>${esc(s.title)}</b><span>${s.items.map(i => hitItems.includes(i) ? `<mark>${esc(i)}</mark>` : esc(i)).join(", ")}</span></button>`);
    });
    sOut.innerHTML = rows.join("") || `<p class="lead">Nenhum serviço encontrado para “${esc(sIn.value)}”. Descreva o que você precisa no formulário e a Rede Prime procura o parceiro.</p>`;
  }
  sIn.addEventListener("input", renderSearch);
  sOut.addEventListener("click", e => {
    const b = e.target.closest(".res"); if (!b) return;
    sDlg.close(); openService(services.find(s => s.slug === b.dataset.slug));
  });
  $$("[data-search]").forEach(b => b.addEventListener("click", () => { closeMenu(); sIn.value = ""; renderSearch(); openDlg(sDlg); setTimeout(() => sIn.focus(), 50); }));
  $$("[data-service-link]").forEach(b => b.addEventListener("click", () => { const s = services.find(x => x.slug === b.dataset.serviceLink); if (s) openService(s); }));

  /* ---------- formulários ---------- */
  const digits = v => v.replace(/\D/g, "");
  function phoneOk(v) { let d = digits(v); if (d.length > 11 && d.startsWith("55")) d = d.slice(2); return (d.length === 10 || d.length === 11) && d[0] !== "0"; }
  $$('input[name="whatsapp"]').forEach(i => i.addEventListener("input", () => {
    let d = digits(i.value).slice(0, 11), o = d;
    if (d.length > 2) o = `(${d.slice(0, 2)}) ${d.slice(2, d.length > 10 ? 7 : 6)}${d.length > (d.length > 10 ? 7 : 6) ? "-" + d.slice(d.length > 10 ? 7 : 6) : ""}`;
    i.value = o;
  }));

  function validate(form) {
    let first = null;
    $$("input,select,textarea", form).forEach(f => {
      if (!f.name || f.classList.contains("hp-in")) return;
      const err = $(`#${f.id}-err`); let msg = "";
      const v = f.type === "checkbox" ? f.checked : f.value.trim();
      if (f.required && !v) msg = f.dataset.msg || "Preencha este campo.";
      else if (f.name === "whatsapp" && v && !phoneOk(f.value)) msg = "Informe um WhatsApp válido com DDD, ex.: (16) 99999-9999.";
      else if (f.type === "email" && v && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) msg = "Informe um e-mail válido.";
      else if (f.minLength > 0 && v && v.length < f.minLength) msg = `Escreva pelo menos ${f.minLength} caracteres.`;
      if (err) err.textContent = msg;
      msg ? f.setAttribute("aria-invalid", "true") : f.removeAttribute("aria-invalid");
      if (msg && !first) first = f;
    });
    first?.focus();
    return !first;
  }

  const LBL = { nome:"Nome", whatsapp:"WhatsApp", servico:"Serviço", cidade:"Cidade", descricao:"Necessidade", prazo:"Prazo", empresa:"Empresa", segmento:"Segmento", email:"E-mail" };
  const formMessage = d => C.whatsappMessage + "\n\n" + Object.keys(LBL).filter(k => d[k]).map(k => `${LBL[k]}: ${d[k]}`).join("\n");
  const waBtn = $("#contato-wa");
  if (waBtn && C.whatsappNumber) {
    waBtn.hidden = false;
    waBtn.addEventListener("click", () => {
      const form = waBtn.closest("form"); if (!validate(form)) return;
      window.open(waLink(formMessage(Object.fromEntries(new FormData(form).entries()))), "_blank", "noopener,noreferrer");
    });
  }

  $$("form[data-form]").forEach(form => {
    $$("input,select,textarea", form).forEach(f => f.addEventListener("input", () => {
      if (f.getAttribute("aria-invalid")) { f.removeAttribute("aria-invalid"); const e = $(`#${f.id}-err`); if (e) e.textContent = ""; }
    }));
    form.addEventListener("submit", async ev => {
      ev.preventDefault();
      const st = $(".status", form), btn = $('button[type="submit"]', form), label = btn.firstChild.textContent;
      const show = (cls, html) => { st.className = "status show " + cls; st.innerHTML = html; };
      st.className = "status";
      if (!validate(form)) return;
      // proteções básicas: honeypot + tempo mínimo de preenchimento
      if ($(".hp-in", form).value || Date.now() - loadedAt < 3000) { show("bad", "Não foi possível enviar agora. Aguarde alguns segundos e tente novamente."); return; }
      const data = Object.fromEntries(new FormData(form).entries());
      delete data.website; data.formulario = form.dataset.form; data.pagina = location.href;
      if (!C.formEndpoint) {
        const alt = C.whatsappNumber ? ` Para não perder sua solicitação, <a href="${esc(waLink(formMessage(data)))}" target="_blank" rel="noopener noreferrer">continue pelo WhatsApp</a>: suas informações já vão preenchidas.` : "";
        show("bad", "O envio por formulário ainda não está ativo neste site. Nenhum dado foi enviado." + alt);
        return;
      }
      btn.disabled = true; btn.setAttribute("aria-busy", "true"); btn.firstChild.textContent = "Enviando… ";
      show("", "Enviando sua solicitação…");
      const ac = new AbortController(), t = setTimeout(() => ac.abort(), 15000);
      try {
        const r = await fetch(C.formEndpoint, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(data), signal: ac.signal });
        if (!r.ok) throw new Error(r.status);
        form.reset();
        show("ok", form.dataset.form === "parceiro" ? "Cadastro enviado. A equipe da Rede Prime entrará em contato." : "Solicitação enviada. A Rede Prime entrará em contato pelo WhatsApp informado.");
      } catch (e) {
        show("bad", e.name === "AbortError" ? "O envio demorou demais. Verifique sua conexão e tente novamente." : "Não foi possível enviar. Seus dados continuam no formulário; tente novamente em instantes.");
      } finally { clearTimeout(t); btn.disabled = false; btn.removeAttribute("aria-busy"); btn.firstChild.textContent = label; st.focus?.(); }
    });
  });
})();
