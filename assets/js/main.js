/* ============================================================
   SECRETS CAKES — Main Logic
   ============================================================ */

/* =========================================================
   ⚙️ CONFIG — معلومات المتجر والفروع
   ========================================================= */
const CONFIG = {
  whatsapp: "96170448544",            // رقم الواتساب بالصيغة الدولية
  phoneDisplay: "+961 70 448 544",    // الرقم للاتصال والمبيعات
  address: { ar: "صنائع بيروت • الشويفات • جل الديب • صيدا", en: "Sanayeh Beirut • Choueifat • Jal El Dib • Saida" },
  branches: [
    { name: { ar: "صنائع بيروت (الفرع الرئيسي)", en: "Sanayeh, Beirut (Main Branch)" }, phone: "01 343 422", tel: "+9611343422" },
    { name: { ar: "الشويفات", en: "Choueifat" }, phone: "05 802 203", tel: "+9615802203" },
    { name: { ar: "جل الديب", en: "Jal El Dib" }, phone: "70 032 323", tel: "+96170032323" },
    { name: { ar: "صيدا", en: "Saida" }, phone: "07 754 254", tel: "+9617754254" },
  ],
  intl: [
    { country: { ar: "لبنان 🇱🇧", en: "Lebanon 🇱🇧" }, link: "https://new.secretscakes.com/en-lb/home/" },
    { country: { ar: "الأردن 🇯🇴", en: "Jordan 🇯🇴" }, link: "https://new.secretscakes.com/en-jo/home/" },
    { country: { ar: "السعودية 🇸🇦", en: "Saudi Arabia 🇸🇦" }, link: "https://new.secretscakes.com/en-sa/home/" },
  ],
  instagram: "https://www.instagram.com/secretscakeslb/",
  facebook: "https://www.facebook.com/secretscakeslb",
  tiktok: "https://tiktok.com/@secretscakes",
};

/* ---------- Helpers ---------- */
const $ = (s, p = document) => p.querySelector(s);
const $$ = (s, p = document) => [...p.querySelectorAll(s)];
const t = (k) => (I18N[STATE.lang][k] ?? k);
const fmt = (n) => "$" + (Number.isInteger(n) ? n : n.toFixed(2));
const shade = (hex, pct) => {
  const n = parseInt(hex.slice(1), 16);
  let r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
  r = Math.round(r + (pct > 0 ? (255 - r) * pct / 100 : r * pct / 100));
  g = Math.round(g + (pct > 0 ? (255 - g) * pct / 100 : g * pct / 100));
  b = Math.round(b + (pct > 0 ? (255 - b) * pct / 100 : b * pct / 100));
  return `rgb(${r},${g},${b})`;
};

const STATE = {
  lang: localStorage.getItem("sc-lang") || "ar",
  builder: {
    step: 1,
    occasion: null, size: null, tiers: null,
    flavor: null, filling: null, coating: null,
    addons: new Set(),
    delivery: "sanayeh",
    name: "", inscription: "", date: "", notes: "",
  },
};

let currentCat = "all";

function toast(key) {
  const el = $("#toast");
  if (!el) return;
  el.textContent = t(key);
  el.classList.add("show");
  setTimeout(() => el.classList.remove("show"), 2600);
}

function waLink(msg) {
  return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`;
}

/* =========================================================
   LANGUAGE
   ========================================================= */
function setLang(lang, announce = false) {
  STATE.lang = lang;
  localStorage.setItem("sc-lang", lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = I18N[lang].dir;

  $$("[data-i18n]").forEach((el) => {
    const v = I18N[lang][el.dataset.i18n];
    if (v !== undefined) {
      if (Array.isArray(v)) return;
      el.innerHTML = v;
    }
  });
  $$("[data-i18n-ph]").forEach((el) => {
    const v = I18N[lang][el.dataset.i18nPh];
    if (v !== undefined) el.placeholder = v;
  });

  $$("#langAr, #langArM").forEach((b) => b.classList.toggle("on", lang === "ar"));
  $$("#langEn, #langEnM").forEach((b) => b.classList.toggle("on", lang === "en"));

  $$("#navWa, #navWaM").forEach((a) => {
    if (a)
      a.href = waLink(
        lang === "ar"
          ? "مرحباً سيكرتس كيكز Secrets Cakes 🎂\nأودّ الاستفسار عن طلب كيكة أو حلويات."
          : "Hello Secrets Cakes 🎂\nI'd like to ask about a custom cake or sweets order."
      );
  });

  renderMarquee();
  initCategoryFilters();
  renderProducts();
  renderOccasions();
  renderBranches();
  renderGallery();
  renderReviews();
  renderBuilder();
  document.title = lang === "ar" ? "سيكرتس كيكز Secrets Cakes | حلويات وكيكات فاخرة" : "Secrets Cakes | Luxury Cakes & French Pâtisserie";
  if (announce) toast("toast_lang");
}

/* =========================================================
   MARQUEE
   ========================================================= */
function renderMarquee() {
  const keys = ["mq1", "mq2", "mq3", "mq4", "mq5", "mq6"];
  const half = keys.map((k) => `<span><b>◆</b>${t(k)}</span>`).join("");
  const track = $("#marqueeTrack");
  if (track) track.innerHTML = half + half;
}

/* =========================================================
   CATEGORIES & PRODUCTS
   ========================================================= */
function initCategoryFilters() {
  const filterWrap = $("#collFilters");
  if (!filterWrap) return;
  const cats = [
    { id: "all", key: "cat_all" },
    { id: "celebration", key: "cat_celebration" },
    { id: "specialty", key: "cat_specialty" },
    { id: "cheesecake", key: "cat_cheesecake" },
    { id: "pieces", key: "cat_pieces" },
    { id: "glace", key: "cat_glace" },
    { id: "boxes", key: "cat_boxes" },
  ];
  filterWrap.innerHTML = cats
    .map(
      (c) => `<button class="cfilter ${c.id === currentCat ? "active" : ""}" data-cat="${c.id}">${t(c.key)}</button>`
    )
    .join("");
  $$("#collFilters .cfilter").forEach((btn) =>
    btn.addEventListener("click", () => {
      currentCat = btn.dataset.cat;
      $$("#collFilters .cfilter").forEach((b) => b.classList.toggle("active", b.dataset.cat === currentCat));
      renderProducts();
    })
  );
}

function renderProducts() {
  const L = STATE.lang;
  const grid = $("#cakesGrid");
  if (!grid) return;

  const filtered = currentCat === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.cat === currentCat);

  grid.innerHTML = filtered.map(
    (p, i) => `
    <article class="cake-card reveal" data-delay="${(i % 3) + 1}">
      <div class="cake-media">
        ${p.tag ? `<span class="cake-tag">${t(p.tag)}</span>` : ""}
        <img src="${p.img}" alt="${p[L].name}" loading="lazy">
      </div>
      <div class="cake-body">
        <h3>${p[L].name} <span class="cake-price">${fmt(p.price)}</span></h3>
        <p>${p[L].desc}</p>
        <a class="btn btn-ghost btn-sm cake-order" target="_blank" rel="noopener"
           href="${waLink(
             L === "ar"
               ? `مرحباً سيكرتس كيكز 🎂\nأودّ طلب: ${p.ar.name} (${fmt(p.price)})\nشكراً!`
               : `Hello Secrets Cakes 🎂\nI'd like to order: ${p.en.name} (${fmt(p.price)})\nThank you!`
           )}">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2A10 10 0 0 0 2 12c0 4.4 2.9 8.2 6.8 9.5.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.4-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.2-.4-1.2.1-2.6 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.6.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10 10 0 0 0 22 12 10 10 0 0 0 12 2z"/></svg>
          ${t("coll_order")}
        </a>
      </div>
    </article>`
  ).join("");
  observeReveals();
}

/* =========================================================
   OCCASIONS
   ========================================================= */
function renderOccasions() {
  const data = [
    { img: "assets/img/cakes/wedding.jpg", t: "occ_c1_t", d: "occ_c1_d", occ: "wedding" },
    { img: "assets/img/cakes/rose-blush.jpg", t: "occ_c2_t", d: "occ_c2_d", occ: "birthday" },
    { img: "assets/img/cakes/black-velvet.jpg", t: "occ_c3_t", d: "occ_c3_d", occ: "graduation" },
  ];
  const grid = $("#occGrid");
  if (!grid) return;

  grid.innerHTML = data.map(
    (c, i) => `
    <article class="occ-card reveal" data-delay="${i + 1}" data-occ="${c.occ}">
      <img src="${c.img}" alt="${t(c.t)}" loading="lazy">
      <div class="occ-overlay">
        <h3>${t(c.t)}</h3>
        <p>${t(c.d)}</p>
        <button class="btn btn-gold btn-sm occ-cta">${t("occ_cta")}</button>
      </div>
    </article>`
  ).join("");
  $$("#occGrid .occ-card").forEach((card) =>
    card.addEventListener("click", () => {
      STATE.builder.occasion = card.dataset.occ;
      STATE.builder.step = 2;
      renderBuilder();
      const bld = $("#builder");
      if (bld) bld.scrollIntoView({ behavior: "smooth" });
    })
  );
  observeReveals();
}

/* =========================================================
   BRANCHES & FRANCHISE
   ========================================================= */
function renderBranches() {
  const L = STATE.lang;
  const grid = $("#branchesGrid");
  if (grid) {
    grid.innerHTML = CONFIG.branches.map(
      (b, i) => `
      <div class="branch-card reveal" data-delay="${i + 1}">
        <div class="branch-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg></div>
        <h4>${b.name[L]}</h4>
        <a href="tel:${b.tel}" class="branch-tel">📞 ${b.phone}</a>
      </div>`
    ).join("");
  }

  const intlWrap = $("#intlTags");
  if (intlWrap) {
    intlWrap.innerHTML = CONFIG.intl.map(
      (it) => `<a href="${it.link}" target="_blank" rel="noopener" class="intl-chip">${it.country[L]}</a>`
    ).join("");
  }
  observeReveals();
}

/* =========================================================
   GALLERY + LIGHTBOX
   ========================================================= */
function renderGallery() {
  const L = STATE.lang;
  const masonry = $("#galleryMasonry");
  if (!masonry) return;

  masonry.innerHTML = GALLERY.map(
    (g, i) => `
    <figure class="g-item reveal" data-i="${i}" data-delay="${(i % 3) + 1}">
      <img src="${g.img}" alt="${g[L]}" loading="lazy">
      <figcaption>${g[L]}</figcaption>
    </figure>`
  ).join("");
  $$(".g-item").forEach((it) =>
    it.addEventListener("click", () => openLightbox(+it.dataset.i))
  );
  observeReveals();
}

let lbIndex = 0;
function openLightbox(i) {
  lbIndex = i;
  $("#lightbox")?.classList.add("open");
  updateLightbox();
}
function updateLightbox() {
  const g = GALLERY[lbIndex];
  const img = $("#lbImg"), cap = $("#lbCaption");
  if (img) img.src = g.img;
  if (cap) cap.textContent = g[STATE.lang];
}
function lbNav(d) {
  lbIndex = (lbIndex + d + GALLERY.length) % GALLERY.length;
  updateLightbox();
}

/* =========================================================
   REVIEWS CAROUSEL
   ========================================================= */
let revTimer = null;
function renderReviews() {
  const L = STATE.lang;
  const slides = $("#revSlides"), dots = $("#revDots");
  if (!slides || !dots) return;

  slides.innerHTML = REVIEWS.map(
    (r, i) => `
    <div class="rev-slide ${i === 0 ? "on" : ""}" data-i="${i}">
      <div class="rev-stars">★★★★★</div>
      <blockquote>${r[L].text}</blockquote>
      <div class="rev-who"><b>${r[L].name}</b><span>${t(r.occ)}</span></div>
    </div>`
  ).join("");
  dots.innerHTML = REVIEWS.map(
    (_, i) => `<button data-i="${i}" class="${i === 0 ? "on" : ""}" aria-label="review ${i + 1}"></button>`
  ).join("");
  $$("#revDots button").forEach((b) =>
    b.addEventListener("click", () => {
      showReview(+b.dataset.i);
      startReviewTimer();
    })
  );
  startReviewTimer();
}
function showReview(i) {
  $$("#revSlides .rev-slide").forEach((s) => s.classList.toggle("on", +s.dataset.i === i));
  $$("#revDots button").forEach((b) => b.classList.toggle("on", +b.dataset.i === i));
}
function startReviewTimer() {
  clearInterval(revTimer);
  revTimer = setInterval(() => {
    const cur = $("#revSlides .rev-slide.on")?.dataset.i ?? 0;
    showReview((+cur + 1) % REVIEWS.length);
  }, 5200);
}

/* =========================================================
   CAKE BUILDER
   ========================================================= */
const B = () => STATE.builder;

function optionCard(item, group, extra = "") {
  const L = STATE.lang;
  const sel = isSel(group, item.id);
  const sub = item.persons ? `${item.persons} ${t("bld_persons")}` : "";
  const priceLabel = group === "size" ? fmt(item.price) : `+${fmt(item.price)}`;
  return `
    <div class="opt ${sel ? "sel" : ""}" data-group="${group}" data-id="${item.id}">
      ${item.price ? `<span class="price-tag">${priceLabel}</span>` : ""}
      ${item.icon ? `<span class="oi">${item.icon}</span>` : `<span class="oi">🍰</span>`}
      <b>${item[L]}</b>
      ${sub ? `<small>${sub}</small>` : ""}
      ${extra}
    </div>`;
}

function isSel(group, id) {
  const b = B();
  if (group === "addons") return b.addons.has(id);
  return b[group] === id;
}

function canGoToStep(targetStep) {
  if (targetStep <= B().step) return true;
  for (let s = 1; s < targetStep; s++) {
    if (!stepValid(s)) return false;
  }
  return true;
}

function stepValid(n) {
  const b = B();
  switch (n) {
    case 1: return !!b.occasion;
    case 2: return !!b.size;
    case 3: return !!b.tiers;
    case 4: return !!b.flavor && !!b.filling;
    case 5: return !!b.coating;
    case 6: return canGoToStep(6);
    default: return true;
  }
}

function renderStepsBar() {
  const steps = I18N[STATE.lang].bld_steps;
  const bar = $("#builderSteps");
  if (!bar) return;

  bar.innerHTML = steps
    .map((label, i) => {
      const n = i + 1;
      const disabled = !canGoToStep(n) && n > B().step;
      const cls = n === B().step ? "on" : n < B().step ? "done" : disabled ? "locked" : "";
      return `
        ${i > 0 ? '<span class="bstep-arrow">◆</span>' : ""}
        <button class="bstep ${cls}" data-n="${n}" ${disabled ? "disabled" : ""}>
          <i>${n < B().step ? "✓" : n}</i><span>${label}</span>
        </button>`;
    })
    .join("");
  $$("#builderSteps .bstep").forEach((btn) =>
    btn.addEventListener("click", () => {
      const n = +btn.dataset.n;
      if (canGoToStep(n)) {
        B().step = n;
        renderBuilder();
      }
    })
  );
}

function renderStepContent() {
  const b = B(), L = STATE.lang, box = $("#builderBody");
  if (!box) return;
  let html = "";

  if (b.step === 1) {
    html = `<h3 class="bstep-title">${t("bld_s1_t")}</h3><p class="bstep-desc">${t("bld_s1_d")}</p>
      <div class="opt-grid">${BUILDER.occasions.map((o) => optionCard(o, "occasion")).join("")}</div>`;
  } else if (b.step === 2) {
    html = `<h3 class="bstep-title">${t("bld_s2_t")}</h3><p class="bstep-desc">${t("bld_s2_d")}</p>
      <div class="opt-grid">${BUILDER.sizes.map((o) => optionCard(o, "size")).join("")}</div>`;
  } else if (b.step === 3) {
    html = `<h3 class="bstep-title">${t("bld_s3_t")}</h3><p class="bstep-desc">${t("bld_s3_d")}</p>
      <div class="opt-grid">${BUILDER.tiers.map((o) => optionCard(o, "tiers")).join("")}</div>`;
  } else if (b.step === 4) {
    html = `<h3 class="bstep-title">${t("bld_s4_t")}</h3><p class="bstep-desc">${t("bld_s4_d")}</p>
      <h4 class="bstep-title" style="font-size:1.1rem;margin:10px 0 12px">${t("bld_s4a_t")}</h4>
      <div class="opt-grid">${BUILDER.flavors.map((o) => optionCard(o, "flavor")).join("")}</div>
      <h4 class="bstep-title" style="font-size:1.1rem;margin:22px 0 12px">${t("bld_s4b_t")}</h4>
      <div class="opt-grid">${BUILDER.fillings.map((o) => optionCard(o, "filling")).join("")}</div>`;
  } else if (b.step === 5) {
    html = `<h3 class="bstep-title">${t("bld_s5_t")}</h3><p class="bstep-desc">${t("bld_s5_d")}</p>
      <h4 class="bstep-title" style="font-size:1.1rem;margin:10px 0 12px">${t("bld_s5a_t")}</h4>
      <div class="opt-grid">${BUILDER.coatings.map((o) => optionCard(o, "coating")).join("")}</div>
      <h4 class="bstep-title" style="font-size:1.1rem;margin:22px 0 12px">${t("bld_s5b_t")}</h4>
      <div class="addons-grid">${BUILDER.addons
        .map((a) => {
          const sel = b.addons.has(a.id);
          return `<div class="addon ${sel ? "sel" : ""}" data-group="addons" data-id="${a.id}">
            <span class="box">${sel ? '<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>' : ""}</span>
            <span><b>${a[L]}</b><small>+${fmt(a.price)}</small></span>
          </div>`;
        })
        .join("")}</div>`;
  } else if (b.step === 6) {
    const dl = BUILDER.delivery;
    html = `<h3 class="bstep-title">${t("bld_s6_t")}</h3><p class="bstep-desc">${t("bld_s6_d")}</p>
      <div class="opt-grid" style="grid-template-columns:repeat(auto-fill,minmax(200px,1fr))">
        ${dl.map((d) => {
          const sel = b.delivery === d.id;
          return `<div class="opt ${sel ? "sel" : ""}" data-group="delivery" data-id="${d.id}">
            ${d.price ? `<span class="price-tag">+${fmt(d.price)}</span>` : ""}
            <span class="oi">📍</span><b>${d[L]}</b></div>`;
        }).join("")}
      </div>
      <div style="margin-top:24px">
        <div class="field-row">
          <div class="field"><label>${t("bld_name")}</label><input id="fName" type="text" placeholder="${t("bld_name_ph")}" value="${b.name}"></div>
          <div class="field"><label>${t("bld_date")}</label><input id="fDate" type="date" value="${b.date}" min="${new Date().toISOString().split("T")[0]}"></div>
        </div>
        <div class="field"><label>${t("bld_inscription")}</label><input id="fInsc" type="text" placeholder="${t("bld_inscription_ph")}" maxlength="60" value="${b.inscription}"></div>
        <div class="field"><label>${t("bld_notes")}</label><textarea id="fNotes" rows="3" placeholder="${t("bld_notes_ph")}">${b.notes}</textarea></div>
      </div>`;
  }
  box.innerHTML = html;

  // wire options
  $$("#builderBody .opt").forEach((el) =>
    el.addEventListener("click", () => {
      const g = el.dataset.group, id = el.dataset.id;
      if (g === "tiers") B().tiers = +id;
      else if (g !== "addons") B()[g] = id;
      renderBuilder();
    })
  );
  $$("#builderBody .addon").forEach((el) =>
    el.addEventListener("click", () => {
      const id = el.dataset.id;
      B().addons.has(id) ? B().addons.delete(id) : B().addons.add(id);
      renderBuilder();
    })
  );
  // keep field values on rerender
  ["fName", "fDate", "fInsc", "fNotes"].forEach((id) => {
    const el = $("#" + id);
    if (!el) return;
    const updateVal = () => {
      const map = { fName: "name", fDate: "date", fInsc: "inscription", fNotes: "notes" };
      B()[map[id]] = el.value;
      updateSummary();
    };
    el.addEventListener("input", updateVal);
    el.addEventListener("change", updateVal);
  });

  // nav buttons
  const prev = $("#bPrev"), next = $("#bNext");
  if (prev) prev.disabled = b.step === 1;
  if (next) {
    if (b.step === 6) {
      next.innerHTML = `${t("sum_order")} <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12 2A10 10 0 0 0 2 12c0 4.4 2.9 8.2 6.8 9.5.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.4-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.2-.4-1.2.1-2.6 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.6.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10 10 0 0 0 22 12 10 10 0 0 0 12 2z"/></svg>`;
      next.classList.remove("btn-ghost");
      next.classList.add("btn-gold");
    } else {
      next.innerHTML = `${t("next")} <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${document.documentElement.dir === "rtl" ? '<path d="M15 18l-6-6 6-6"/>' : '<path d="M9 18l6-6-6-6"/>'}</svg>`;
      next.classList.add("btn-ghost");
    }
    next.disabled = !stepValid(b.step);
  }
}

/* ---------- Live SVG cake preview ---------- */
function cakeSVG() {
  const b = B();
  const coating = BUILDER.coatings.find((c) => c.id === b.coating);
  const color = coating ? coating.color : "#3a2f42";
  const tiers = b.tiers || 1;
  const dark = shade(color, -35);
  const light = shade(color, 28);
  const gold = "#fed3a9";

  const widths = [140, 104, 70], heights = [50, 44, 38];
  const baseY = 158;
  let y = baseY;
  let tierEls = "";
  for (let i = 0; i < tiers; i++) {
    const w = widths[i], h = heights[i];
    const x = 100 - w / 2;
    const topY = y - h;
    tierEls += `
      <rect x="${x}" y="${topY}" width="${w}" height="${h}" rx="7" fill="url(#cg)" stroke="rgba(254,211,169,.55)" stroke-width="1.4"/>
      <ellipse cx="100" cy="${topY + 2}" rx="${w / 2 - 3}" ry="6" fill="${light}" opacity=".85"/>
      <rect x="${x + 6}" y="${topY + h - 10}" width="${w - 12}" height="2.5" rx="1.2" fill="${gold}" opacity=".65"/>
      <rect x="${x + 6}" y="${topY + 12}" width="${w - 12}" height="2.5" rx="1.2" fill="${gold}" opacity=".65"/>
    `;
    y = topY - 4;
  }

  let deco = "";
  const topCx = 100, topY = y + 2;
  if (b.addons.has("macaron"))
    deco += `<circle cx="${topCx - 16}" cy="${topY - 8}" r="9" fill="#cdb4da"/><circle cx="${topCx - 16}" cy="${topY - 12}" r="8" fill="#a784ae"/>`;
  if (b.addons.has("flowers"))
    deco += `<g transform="translate(${topCx + 14},${topY - 10})"><circle r="5" cy="-6" fill="#e8c9d8"/><circle r="5" cy="6" fill="#e8c9d8"/><circle r="5" cx="-6" fill="#e8c9d8"/><circle r="5" cx="6" fill="#e8c9d8"/><circle r="4.2" fill="#fed3a9"/></g>`;
  if (b.addons.has("gold"))
    deco += `<circle cx="${topCx - 30}" cy="${topY + 4}" r="3" fill="${gold}"/><circle cx="${topCx + 28}" cy="${topY + 6}" r="2.6" fill="${gold}"/><circle cx="${topCx + 6}" cy="${topY - 4}" r="2.4" fill="${gold}"/>`;
  if (b.addons.has("fruits"))
    deco += `<circle cx="${topCx + 30}" cy="${topY - 6}" r="5" fill="#c94f6d"/><circle cx="${topCx - 24}" cy="${topY - 12}" r="4.4" fill="#e5986f"/>`;
  if (b.addons.has("shards"))
    deco += `<path d="M ${topCx - 4} ${topY - 6} l 8 -14 l 5 14 z" fill="${gold}" opacity=".9"/>`;
  const occ = BUILDER.occasions.find((o) => o.id === b.occasion);
  if (occ) deco += `<text x="${topCx}" y="${topY - (b.addons.size ? 26 : 12)}" font-size="15" text-anchor="middle">${occ.icon}</text>`;

  return `
  <svg class="cake-svg" viewBox="0 0 200 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="cake preview">
    <defs>
      <linearGradient id="cg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="${light}"/><stop offset="0.55" stop-color="${color}"/><stop offset="1" stop-color="${dark}"/>
      </linearGradient>
    </defs>
    ${tierEls}
    ${deco}
    <rect x="52" y="158" width="96" height="5" rx="2.5" fill="#cba58e"/>
    <rect x="94" y="163" width="12" height="10" fill="#815823"/>
    <ellipse cx="100" cy="176" rx="34" ry="5" fill="#815823"/>
  </svg>`;
}

/* ---------- Price ---------- */
function calcPrice() {
  const b = B();
  const size = BUILDER.sizes.find((s) => s.id === b.size);
  const tiers = BUILDER.tiers.find((s) => s.id === b.tiers);
  const flavor = BUILDER.flavors.find((s) => s.id === b.flavor);
  const filling = BUILDER.fillings.find((s) => s.id === b.filling);
  const coating = BUILDER.coatings.find((s) => s.id === b.coating);
  const addons = BUILDER.addons.filter((a) => b.addons.has(a.id));
  const deliv = BUILDER.delivery.find((d) => d.id === b.delivery);

  const base = (size?.price ?? 0) + (tiers?.price ?? 0);
  const extras =
    (flavor?.price ?? 0) + (filling?.price ?? 0) + (coating?.price ?? 0) +
    addons.reduce((s, a) => s + a.price, 0);
  let subtotal = base + extras;
  let deliveryCost = 0;
  if (deliv?.id === "delivery") deliveryCost = deliv.price;
  return { size, tiers, flavor, filling, coating, addons, deliv, base, extras, subtotal, deliveryCost, total: subtotal + deliveryCost };
}

function updateSummary() {
  const b = B(), L = STATE.lang;
  const p = calcPrice();
  const prev = $("#cakePreview");
  if (prev) prev.innerHTML = cakeSVG();

  const occ = BUILDER.occasions.find((o) => o.id === b.occasion);
  const sizeTxt = p.size ? `${p.size[L]}` : t("sum_none");
  const tiersTxt = p.tiers ? p.tiers[L] : t("sum_none");
  const flavorTxt = p.flavor ? p.flavor[L] : t("sum_none");
  const fillingTxt = p.filling ? p.filling[L] : t("sum_none");
  const coatingTxt = p.coating ? p.coating[L] : t("sum_none");
  const addonsTxt = p.addons.length ? p.addons.map((a) => a[L]).join(L === "ar" ? "، " : ", ") : t("sum_none");
  const delivTxt = p.deliv ? p.deliv[L] : t("sum_none");

  const rows = $("#sumRows");
  if (rows) {
    rows.innerHTML = `
      <li><span>${t("sum_occasion")}</span><b>${occ ? occ[L] : t("sum_none")}</b></li>
      <li><span>${t("sum_size")}</span><b>${sizeTxt}</b></li>
      <li><span>${t("sum_tiers")}</span><b>${tiersTxt}</b></li>
      <li><span>${t("sum_flavor")}</span><b>${flavorTxt}</b></li>
      <li><span>${t("sum_filling")}</span><b>${fillingTxt}</b></li>
      <li><span>${t("sum_coating")}</span><b>${coatingTxt}</b></li>
      <li><span>${t("sum_addons")}</span><b>${addonsTxt}</b></li>
      <li><span>${t("sum_delivery")}</span><b>${delivTxt}</b></li>
      <li><span>${t("sum_base")}</span><b>${fmt(p.base)}</b></li>
      <li><span>${t("sum_extras")}</span><b>${fmt(p.extras)}</b></li>`;
  }
  const tot = $("#sumTotal");
  if (tot) tot.textContent = fmt(Math.round(p.total));
  const waBtn = $("#waOrderBtn");
  if (waBtn) waBtn.href = waLink(buildOrderMessage(p));
}

function buildOrderMessage(p) {
  const b = B(), L = STATE.lang;
  const occ = BUILDER.occasions.find((o) => o.id === b.occasion);
  if (L === "ar") {
    return `🎂 طلب كيكة مخصصة — Secrets Cakes

✦ المناسبة: ${occ ? occ.ar : "—"}
✦ الحجم: ${p.size ? p.size.ar : "—"}
✦ الطبقات: ${p.tiers ? p.tiers.ar : "—"}
✦ النكهة: ${p.flavor ? p.flavor.ar : "—"}
✦ الحشوة: ${p.filling ? p.filling.ar : "—"}
✦ التغطية: ${p.coating ? p.coating.ar : "—"}
✦ التزيين: ${p.addons.length ? p.addons.map((a) => a.ar).join("، ") : "—"}
✦ طريقة الاستلام / الفرع: ${p.deliv ? p.deliv.ar : "—"}
${b.inscription ? `✦ العبارة على الكيكة: «${b.inscription}»\n` : ""}${b.date ? `✦ تاريخ المناسبة: ${b.date}\n` : ""}${b.notes ? `✦ ملاحظات: ${b.notes}\n` : ""}
💰 الإجمالي التقديري: ${fmt(Math.round(p.total))}
👤 الاسم: ${b.name || "—"}

أرسلتُ هذا الطلب من موقعكم الرسمي 🌐`;
  }
  return `🎂 Custom Cake Order — Secrets Cakes

✦ Occasion: ${occ ? occ.en : "—"}
✦ Size: ${p.size ? p.size.en : "—"}
✦ Tiers: ${p.tiers ? p.tiers.en : "—"}
✦ Flavor: ${p.flavor ? p.flavor.en : "—"}
✦ Filling: ${p.filling ? p.filling.en : "—"}
✦ Coating: ${p.coating ? p.coating.en : "—"}
✦ Décor: ${p.addons.length ? p.addons.map((a) => a.en).join(", ") : "—"}
✦ Pickup / Branch: ${p.deliv ? p.deliv.en : "—"}
${b.inscription ? `✦ Cake Message: "${b.inscription}"\n` : ""}${b.date ? `✦ Occasion Date: ${b.date}\n` : ""}${b.notes ? `✦ Notes: ${b.notes}\n` : ""}
💰 Estimated Total: ${fmt(Math.round(p.total))}
👤 Name: ${b.name || "—"}

Sent from your official website 🌐`;
}

function renderBuilder() {
  renderStepsBar();
  renderStepContent();
  updateSummary();
}

/* =========================================================
   REVEAL ON SCROLL
   ========================================================= */
let revealObserver = null;
function observeReveals() {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            revealObserver.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
  }
  $$(".reveal:not(.in)").forEach((el) => revealObserver.observe(el));
}

/* =========================================================
   NAV / SCROLL
   ========================================================= */
function initNav() {
  const nav = $("#navbar");
  const onScroll = () => {
    if (nav) nav.classList.toggle("scrolled", window.scrollY > 40);
    const fab = $("#fabTop");
    if (fab) fab.classList.toggle("show", window.scrollY > 600);

    const secs = ["home", "about", "collection", "builder", "occasions", "branches", "gallery", "contact"];
    let active = "home";
    secs.forEach((id) => {
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - 140) active = id;
    });
    $$(".nav-links a").forEach((a) =>
      a.classList.toggle("active", a.getAttribute("href") === "#" + active)
    );
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const burger = $("#burger"), menu = $("#mobileMenu");
  if (burger && menu) {
    burger.addEventListener("click", () => {
      burger.classList.toggle("open");
      menu.classList.toggle("open");
    });
    $$("#mobileMenu a").forEach((a) =>
      a.addEventListener("click", () => {
        burger.classList.remove("open");
        menu.classList.remove("open");
      })
    );
  }
}

/* =========================================================
   CURSOR (desktop)
   ========================================================= */
function initCursor() {
  if (!window.matchMedia("(pointer: fine)").matches) return;
  const dot = document.createElement("div"), ring = document.createElement("div");
  dot.className = "cursor-dot";
  ring.className = "cursor-ring";
  document.body.append(dot, ring);
  let rx = 0, ry = 0, tx = 0, ty = 0;
  window.addEventListener("mousemove", (e) => {
    tx = e.clientX; ty = e.clientY;
    dot.style.transform = `translate(${tx - 3}px, ${ty - 3}px)`;
  });
  (function loop() {
    rx += (tx - rx) * 0.16; ry += (ty - ry) * 0.16;
    ring.style.transform = `translate(${rx - 19}px, ${ry - 19}px)`;
    requestAnimationFrame(loop);
  })();
  $$("a, button, .opt, .addon, .g-item, .occ-card, .cfilter").forEach((el) => {
    el.addEventListener("mouseenter", () => ring.classList.add("hovering"));
    el.addEventListener("mouseleave", () => ring.classList.remove("hovering"));
  });
}

/* =========================================================
   INIT
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  const hidePreloader = () => $("#preloader")?.classList.add("done");
  if (document.readyState === "complete") {
    setTimeout(hidePreloader, 300);
  } else {
    window.addEventListener("load", () => setTimeout(hidePreloader, 400));
    setTimeout(hidePreloader, 2600);
  }

  initNav();
  initCursor();
  setLang(STATE.lang);

  const prev = $("#bPrev"), next = $("#bNext");
  if (prev) {
    prev.addEventListener("click", () => {
      if (B().step > 1) { B().step--; renderBuilder(); }
    });
  }
  if (next) {
    next.addEventListener("click", () => {
      if (!stepValid(B().step)) return;
      if (B().step < 6) { B().step++; renderBuilder(); }
      else {
        toast("toast_order");
        const p = calcPrice();
        window.open(waLink(buildOrderMessage(p)), "_blank");
      }
    });
  }

  const lbClose = $("#lbClose"), lbPrev = $("#lbPrev"), lbNext = $("#lbNext"), lb = $("#lightbox");
  if (lbClose) lbClose.addEventListener("click", () => lb.classList.remove("open"));
  if (lbPrev) lbPrev.addEventListener("click", () => lbNav(-1));
  if (lbNext) lbNext.addEventListener("click", () => lbNav(1));
  if (lb) {
    lb.addEventListener("click", (e) => {
      if (e.target.id === "lightbox") lb.classList.remove("open");
    });
  }
  document.addEventListener("keydown", (e) => {
    if (!lb || !lb.classList.contains("open")) return;
    if (e.key === "Escape") lb.classList.remove("open");
    if (e.key === "ArrowRight") lbNav(document.documentElement.dir === "rtl" ? -1 : 1);
    if (e.key === "ArrowLeft") lbNav(document.documentElement.dir === "rtl" ? 1 : -1);
  });

  [["#langAr", "ar"], ["#langEn", "en"], ["#langArM", "ar"], ["#langEnM", "en"]].forEach(
    ([sel, lang]) => {
      const btn = $(sel);
      if (btn) {
        btn.addEventListener("click", () => {
          if (STATE.lang !== lang) setLang(lang, true);
        });
      }
    }
  );

  const telLink = $("#telLink");
  if (telLink) {
    telLink.href = "tel:" + CONFIG.phoneDisplay.replace(/\s/g, "");
    telLink.textContent = CONFIG.phoneDisplay;
  }
  const waFloat = $("#waFloat");
  if (waFloat) waFloat.href = `https://wa.me/${CONFIG.whatsapp}`;

  $$("#navWa, #navWaM").forEach((a) => {
    if (a)
      a.href = waLink(
        STATE.lang === "ar"
          ? "مرحباً سيكرتس كيكز Secrets Cakes 🎂\nأودّ الاستفسار عن طلب كيكة أو حلويات."
          : "Hello Secrets Cakes 🎂\nI'd like to ask about a custom cake or sweets order."
      );
  });
  $$(".ig-link").forEach((a) => (a.href = CONFIG.instagram));
  $$(".fb-link").forEach((a) => (a.href = CONFIG.facebook));
  $$(".tt-link").forEach((a) => (a.href = CONFIG.tiktok));

  const fabTop = $("#fabTop");
  if (fabTop) fabTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  observeReveals();
});
