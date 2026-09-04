/* ============================================================
   TRINITY CAR — assets/ui.js
   Navbar/footer/card rendering + WhatsApp helpers + init
   Depends on: data.js, i18n.js, icons.js (loaded before this file)
   ============================================================ */

/* ---------------- NAVBAR ---------------- */
function renderNavbar() {
  const el = document.getElementById("navbar");
  if (!el) return;
  const T = t();
  const path = window.location.pathname;
  const page = path.substring(path.lastIndexOf("/") + 1) || "index.html";
  const isActive = (p) => (page === p || (p === "index.html" && page === "")) ? "text-blue-600" : "text-slate-700 hover:text-blue-600";
  const underline = (p) => (page === p || (p === "index.html" && page === "")) ? '<span class="block h-0.5 bg-blue-600 mt-1 rounded-full"></span>' : "";

  el.innerHTML = `
  <header class="fixed top-0 left-0 right-0 z-[100] bg-[#F3F1EC]/90 backdrop-blur border-b border-black/5 w-full" id="mainHeader">
    <div id="navInner" class="max-w-7xl mx-auto px-5 md:px-8 h-20 flex items-center justify-between">
      <!-- LOGO START (NO ICON) -->
      <a href="index.html" class="flex flex-col leading-none group" aria-label="Trinity Car - ${T.nav.home}">
        <span class="text-2xl font-black tracking-tight text-white navbar-logo-text">
          TRINITY<span class="text-red-500">CAR</span>
        </span>
        <span class="text-[8px] tracking-[0.3em] text-gray-300 font-medium mt-1">LOCATION DE VOITURE</span>
      </a>
      <!-- LOGO END -->
      
      <nav class="hidden md:flex items-center gap-9 text-[15px] font-medium">
        <a href="index.html" class="${isActive('index.html')} transition-colors">${T.nav.home}${underline('index.html')}</a>
        <a href="flotte.html" class="${isActive('flotte.html')} transition-colors">${T.nav.fleet}${underline('flotte.html')}</a>
        <a href="agence.html" class="${isActive('agence.html')} transition-colors">${T.nav.agency}${underline('agence.html')}</a>
        <a href="reservation.html" class="${isActive('reservation.html')} transition-colors">${T.nav.contact}${underline('reservation.html')}</a>
      </nav>
      <div class="flex items-center gap-3">
        <div class="hidden sm:flex items-center gap-1 text-xs font-semibold text-slate-500 border border-slate-300 rounded-full p-1">
          ${["fr","ar","en"].map(l => `<button data-lang="${l}" class="lang-btn px-2.5 py-1 rounded-full transition-colors ${currentLang===l ? 'bg-blue-600 text-white' : 'hover:bg-slate-200'}">${l.toUpperCase()}</button>`).join("")}
        </div>
        <a href="reservation.html" class="hidden md:inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-3 rounded-xl transition-colors magnetic-btn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.07L2 22l5.06-1.33A9.94 9.94 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm5.2 14.2c-.22.62-1.28 1.18-1.77 1.25-.45.07-1.02.1-1.65-.1-.38-.12-.87-.28-1.5-.55-2.63-1.14-4.35-3.8-4.48-3.98-.13-.17-1.07-1.42-1.07-2.71 0-1.29.68-1.92.92-2.18.24-.26.53-.32.7-.32.18 0 .35 0 .5.01.16.01.38-.06.6.46.22.53.75 1.83.82 1.96.07.14.11.3.02.48-.09.18-.14.29-.27.44-.14.16-.29.35-.41.47-.14.14-.28.29-.12.57.16.27.71 1.18 1.53 1.91 1.05.94 1.94 1.23 2.21 1.37.27.14.43.12.59-.07.16-.2.68-.79.86-1.06.18-.27.36-.22.6-.13.25.09 1.57.74 1.84.88.27.14.45.2.51.32.07.12.07.68-.15 1.3z"/></svg>
          ${T.nav.reserve}
        </a>
        <button id="hamburger" class="md:hidden p-2" aria-label="Menu">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </div>
    </div>
    <div id="mobileMenu" class="md:hidden hidden bg-[#F3F1EC] border-t border-black/5 px-5 py-4 space-y-3">
      <a href="index.html" class="block font-medium ${isActive('index.html')}">${T.nav.home}</a>
      <a href="flotte.html" class="block font-medium ${isActive('flotte.html')}">${T.nav.fleet}</a>
      <a href="agence.html" class="block font-medium ${isActive('agence.html')}">${T.nav.agency}</a>
      <a href="reservation.html" class="block font-medium ${isActive('reservation.html')}">${T.nav.contact}</a>
      <div class="flex gap-2 pt-2">
        ${["fr","ar","en"].map(l => `<button data-lang="${l}" class="lang-btn px-3 py-1.5 rounded-full text-xs font-semibold border ${currentLang===l ? 'bg-blue-600 text-white border-blue-600' : 'border-slate-300'}">${l.toUpperCase()}</button>`).join("")}
      </div>
      <a href="reservation.html" class="block text-center bg-blue-600 text-white font-semibold py-3 rounded-xl">${T.nav.reserve}</a>
    </div>
  </header>`;

  el.querySelectorAll(".lang-btn").forEach(btn => btn.addEventListener("click", () => setLang(btn.dataset.lang)));
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  if (hamburger && mobileMenu) hamburger.addEventListener("click", () => mobileMenu.classList.toggle("hidden"));
}

/* ---------------- FOOTER ---------------- */
function renderFooter() {
  const el = document.getElementById("footer");
  if (!el) return;
  const T = t();
  el.innerHTML = `
  <footer class="bg-[#0B1120] text-slate-300 pt-16 pb-8 mt-24">
    <div class="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">
      <div>
        <span class="text-2xl font-black text-white">TRINITY<span class="text-blue-500">CAR</span></span>
        <p class="text-[10px] tracking-[0.25em] text-slate-500 mt-1 mb-4">LOCATION VOITURE OUJDA</p>
        <p class="text-sm text-slate-400 leading-relaxed">${T.footer.about}</p>
        <div class="flex gap-3 mt-5">
          <a href="${AGENCY.social.facebook}" aria-label="Facebook" class="w-9 h-9 rounded-full border border-slate-600 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-colors">${icon('facebook','w-4 h-4')}</a>
          <a href="${AGENCY.social.instagram}" aria-label="Instagram" class="w-9 h-9 rounded-full border border-slate-600 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-colors">${icon('instagram','w-4 h-4')}</a>
          <a href="${AGENCY.social.whatsapp}" aria-label="WhatsApp" class="w-9 h-9 rounded-full border border-slate-600 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-colors">${icon('whatsapp','w-4 h-4')}</a>
        </div>
      </div>
      <div>
        <h4 class="text-white font-semibold mb-4 text-sm tracking-wide">${T.footer.links}</h4>
        <ul class="space-y-2.5 text-sm">
          <li><a href="index.html" class="hover:text-white transition-colors">${T.nav.home}</a></li>
          <li><a href="flotte.html" class="hover:text-white transition-colors">${T.nav.fleet}</a></li>
          <li><a href="agence.html" class="hover:text-white transition-colors">${T.nav.agency}</a></li>
          <li><a href="reservation.html" class="hover:text-white transition-colors">${T.nav.contact}</a></li>
        </ul>
      </div>
      <div>
        <h4 class="text-white font-semibold mb-4 text-sm tracking-wide">${T.footer.services}</h4>
        <ul class="space-y-2.5 text-sm text-slate-400">
          <li>${T.footer.s1}</li><li>${T.footer.s2}</li><li>${T.footer.s3}</li><li>${T.footer.s4}</li><li>${T.footer.s5}</li>
        </ul>
      </div>
      <div>
        <h4 class="text-white font-semibold mb-4 text-sm tracking-wide">${T.footer.contactUs}</h4>
        <ul class="space-y-3 text-sm text-slate-400">
          <li class="flex gap-2">${icon('mapPin','w-4 h-4 mt-0.5 shrink-0')}<span>${AGENCY.address[currentLang]}</span></li>
          <li class="flex gap-2">${icon('phone','w-4 h-4 mt-0.5 shrink-0')}<a href="tel:+${AGENCY.whatsapp}" class="hover:text-white">${AGENCY.phoneDisplay}</a></li>
          <li class="flex gap-2">${icon('whatsapp','w-4 h-4 mt-0.5 shrink-0')}<a href="${AGENCY.social.whatsapp}" class="hover:text-white">wa.me/${AGENCY.whatsapp}</a></li>
        </ul>
        <a href="${AGENCY.mapUrl}" target="_blank" rel="noopener" class="mt-4 block text-center text-xs font-semibold border border-slate-600 rounded-lg py-2.5 hover:bg-slate-800 transition-colors">${T.footer.map}</a>
      </div>
    </div>
    <div class="max-w-7xl mx-auto px-5 md:px-8 border-t border-slate-800 mt-10 pt-6 text-xs text-slate-500 text-center">
      © ${new Date().getFullYear()} Trinity Car — ${T.footer.about} ${T.footer.rights}
    </div>
  </footer>`;
}

/* ---------------- CAR CARD RENDER ---------------- */
const CATEGORY_LABEL = {
  economy: { fr: "Économique", ar: "اقتصادية", en: "Economy" },
  confort: { fr: "Confort", ar: "مريحة", en: "Comfort" },
  luxe: { fr: "Luxe", ar: "فاخرة", en: "Luxury" }
};

function carCardHTML(car, index, options = {}) {
  const T = t();
  const g = car.gearbox[currentLang], f = car.fuel[currentLang];
  const trimLabel = car.trim ? car.trim[currentLang] : "";
  const catLabel = car.category ? CATEGORY_LABEL[car.category][currentLang] : "";
  const acLabel = currentLang==='ar'?'مكيف':(currentLang==='en'?'A/C':'Climatisation');
  const seatsLabel = currentLang==='ar'?'أماكن':(currentLang==='en'?'seats':'Places');

  const frontFace = `
      <div class="relative overflow-hidden h-44">
        ${options.numbered ? `<span class="absolute top-3 ${currentLang==='ar'?'right-3':'left-3'} text-3xl font-black text-blue-100 z-10">${String(index+1).padStart(2,'0')}</span>` : ""}
        ${catLabel ? `<span class="absolute top-3 ${currentLang==='ar'?'left-3':'right-3'} z-10 bg-white/90 text-[10px] font-bold text-blue-700 px-2.5 py-1 rounded-full">${catLabel}</span>` : ""}
        <img src="${car.image}" alt="${car.name} ${car.year} - Trinity Car" loading="lazy" data-lightbox="${car.image}" class="img-skeleton w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" onload="this.classList.remove('img-skeleton')">
        <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      </div>
      <div class="p-5">
        <div class="flex items-baseline justify-between mb-1">
          <h3 class="font-bold text-slate-900 text-lg">${car.name}</h3>
          <span class="text-xs text-slate-400">${car.year}</span>
        </div>
        ${trimLabel ? `<p class="text-xs text-slate-400 mb-2">${trimLabel}</p>` : ""}
        <div class="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500 mb-4">
          <span class="inline-flex items-center gap-1">${icon('gear','w-3.5 h-3.5')} ${g}</span><span class="inline-flex items-center gap-1">${icon('snowflake','w-3.5 h-3.5')} ${acLabel}</span>
          <span class="inline-flex items-center gap-1">${icon('users','w-3.5 h-3.5')} ${car.seats} ${seatsLabel}</span><span class="inline-flex items-center gap-1">${icon('fuel','w-3.5 h-3.5')} ${f}</span>
        </div>
        <div class="flex items-center justify-between">
          <div><span class="text-2xl font-black text-blue-600">${car.pricePerDay}</span> <span class="text-xs text-slate-500">${T.fleetSection.perDay}</span></div>
          <a href="reservation.html?car=${car.id}" class="choose-btn bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors">${T.fleetSection.choose}</a>
        </div>
      </div>`;

  if (!options.flip) {
    return `
  <div class="car-card group relative bg-white rounded-2xl border border-slate-200 hover:border-blue-300 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden" data-car="${car.id}">
    ${frontFace}
  </div>`;
  }

  const backFace = `
      <div class="flip-back h-full p-6 flex flex-col justify-between rounded-2xl overflow-hidden">
        <div>
          <h3 class="font-bold text-lg mb-1">${car.name}</h3>
          ${trimLabel ? `<p class="text-xs text-slate-300 mb-4">${trimLabel}</p>` : ""}
          <ul class="space-y-2 text-sm text-slate-200">
            <li class="flex items-center gap-2">${icon('gear','w-4 h-4 text-blue-400')} ${g}</li>
            <li class="flex items-center gap-2">${icon('fuel','w-4 h-4 text-blue-400')} ${f}</li>
            <li class="flex items-center gap-2">${icon('users','w-4 h-4 text-blue-400')} ${car.seats} ${seatsLabel}</li>
            <li class="flex items-center gap-2">${icon('snowflake','w-4 h-4 text-blue-400')} ${acLabel}</li>
            ${catLabel ? `<li class="flex items-center gap-2">${icon('star','w-4 h-4 text-blue-400')} ${catLabel}</li>` : ""}
          </ul>
        </div>
        <a href="reservation.html?car=${car.id}" class="mt-4 text-center bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors">${T.fleetSection.choose} — ${car.pricePerDay} ${T.fleetSection.perDay}</a>
      </div>`;

  return `
  <div class="flip-wrap h-[420px]" tabindex="0" data-car="${car.id}">
    <div class="flip-inner h-full">
      <div class="flip-front h-full bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        ${frontFace}
      </div>
      ${backFace}
    </div>
  </div>`;
}

/* ---------------- FLOATING WHATSAPP BUTTON ---------------- */
function renderFloatingWhatsApp() {
  document.getElementById("floatingWa")?.remove();
  const btn = document.createElement("a");
  btn.id = "floatingWa";
  btn.href = AGENCY.social.whatsapp;
  btn.target = "_blank";
  btn.rel = "noopener";
  btn.className = "floating-wa";
  btn.setAttribute("aria-label", "WhatsApp");
  btn.innerHTML = `<span class="relative z-10">${icon('whatsapp','w-7 h-7')}</span>`;
  document.body.appendChild(btn);
}

/* ---------------- STICKY MOBILE BOOK BAR ---------------- */
function renderStickyBookBar() {
  document.getElementById("stickyBookBar")?.remove();
  const page = window.location.pathname.split("/").pop() || "index.html";
  if (page === "reservation.html") return;
  const T = t();
  const bar = document.createElement("div");
  bar.id = "stickyBookBar";
  bar.className = "sticky-book-bar md:hidden bg-blue-600";
  bar.innerHTML = `<a href="reservation.html" class="flex items-center justify-center gap-2 text-white font-semibold py-3.5">${icon('calendar','w-4 h-4')}<span>${T.nav.reserve}</span></a>`;
  document.body.appendChild(bar);
}

/* ---------------- LIGHTBOX (car images) ---------------- */
function initLightbox() {
  document.addEventListener("click", (e) => {
    const target = e.target.closest("[data-lightbox]");
    if (!target) return;
    const src = target.getAttribute("data-lightbox");
    const alt = target.getAttribute("alt") || "";
    const overlay = document.createElement("div");
    overlay.className = "lightbox-overlay";
    overlay.innerHTML = `<button class="lightbox-close" aria-label="Close">${icon('close','w-6 h-6')}</button><img src="${src}" alt="${alt}" class="lightbox-img">`;
    document.body.appendChild(overlay);
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => overlay.classList.add("open"));
    const close = () => {
      overlay.classList.remove("open");
      document.body.style.overflow = "";
      setTimeout(() => overlay.remove(), 250);
      document.removeEventListener("keydown", onEsc);
    };
    const onEsc = (ev) => { if (ev.key === "Escape") close(); };
    overlay.addEventListener("click", (ev) => { if (ev.target === overlay || ev.target.closest(".lightbox-close")) close(); });
    document.addEventListener("keydown", onEsc);
  });
}

/* ---------------- WHATSAPP HELPERS ---------------- */
function buildWaLink(message) {
  return `https://wa.me/${AGENCY.whatsapp}?text=${message}`;
}

function openWhatsApp(message) {
  const url = buildWaLink(message);
  const win = window.open(url, "_blank");
  setTimeout(() => {
    if (!win || win.closed || typeof win.closed === "undefined") {
      const plain = decodeURIComponent(message).replace(/%0A/g, "\n");
      navigator.clipboard?.writeText(plain).then(() => {
        alert(t().reservationPage.copied);
      }).catch(() => {
        alert(t().reservationPage.copyFail);
      });
    }
  }, 800);
}

/* ---------------- INIT ---------------- */
document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.lang = t().htmlLang;
  document.documentElement.dir = t().dir;
  document.body.classList.toggle("font-arabic", currentLang === "ar");
  document.body.style.paddingTop = "80px"; // Add padding top to body for fixed navbar
  renderNavbar();
  renderFooter();
  renderFloatingWhatsApp();
  renderStickyBookBar();
  initLightbox();
});
