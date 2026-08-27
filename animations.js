/* ============================================================
   TRINITY CAR — assets/animations.js
   GSAP + Lenis powered "wow factor" animations.
   All animations use transform/opacity only (GPU-accelerated).
   Every effect is guarded so pages work fine if CDN scripts fail.
   ============================================================ */

function initLenis() {
  if (typeof Lenis === "undefined") return null;
  const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
  function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
  requestAnimationFrame(raf);
  if (window.gsap && window.gsap.ticker) {
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
  }
  return lenis;
}

function prefersReducedMotion() {
  return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function splitIntoWords(el) {
  const words = el.textContent.trim().split(/\s+/);
  el.innerHTML = words.map(w => `<span class="inline-block overflow-hidden align-bottom"><span class="inline-block word-inner will-change-transform">${w}&nbsp;</span></span>`).join("");
  return el.querySelectorAll(".word-inner");
}

function initHeroAnimations() {
  if (prefersReducedMotion() || typeof gsap === "undefined") return;
  gsap.registerPlugin(window.ScrollTrigger);

  document.querySelectorAll("[data-reveal-text]").forEach(el => {
    const words = splitIntoWords(el);
    gsap.set(words, { yPercent: 120 });
    gsap.to(words, { yPercent: 0, duration: 0.9, stagger: 0.06, ease: "power4.out", delay: 0.15 });
  });

  gsap.utils.toArray("[data-fade-up]").forEach((el, i) => {
    gsap.set(el, { opacity: 0, y: 24 });
    gsap.to(el, { opacity: 1, y: 0, duration: 0.8, delay: 0.5 + i * 0.1, ease: "power3.out" });
  });

  // Cursor-following blob in hero
  const blob = document.querySelector("[data-cursor-blob]");
  const hero = document.querySelector("[data-hero]");
  if (blob && hero) {
    hero.addEventListener("mousemove", (e) => {
      const rect = hero.getBoundingClientRect();
      gsap.to(blob, { x: e.clientX - rect.left, y: e.clientY - rect.top, duration: 1.2, ease: "power3.out" });
    });
  }

  // Multi-layer parallax on hero image / shapes
  gsap.utils.toArray("[data-parallax]").forEach(el => {
    const speed = parseFloat(el.dataset.parallax) || 0.15;
    gsap.to(el, {
      yPercent: speed * 100,
      ease: "none",
      scrollTrigger: { trigger: el.closest("[data-hero]") || el, start: "top top", end: "bottom top", scrub: true }
    });
  });
}

function initCounters() {
  if (typeof gsap === "undefined") return;
  document.querySelectorAll("[data-counter]").forEach(el => {
    const target = parseFloat(el.dataset.counter);
    const decimals = el.dataset.counter.includes(".") ? 1 : 0;
    const obj = { val: 0 };
    ScrollTrigger.create({
      trigger: el, start: "top 85%", once: true,
      onEnter: () => gsap.to(obj, {
        val: target, duration: 1.6, ease: "power2.out",
        onUpdate: () => el.textContent = obj.val.toFixed(decimals)
      })
    });
  });
}

function initCardReveals(selector = ".car-card") {
  if (typeof gsap === "undefined") return;
  const cards = document.querySelectorAll(selector);
  if (!cards.length) return;
  gsap.set(cards, { opacity: 0, y: 40 });
  ScrollTrigger.batch(cards, {
    start: "top 90%",
    onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: "power3.out" })
  });
}

function init3DTilt(selector = ".car-card") {
  if (prefersReducedMotion()) return;
  document.querySelectorAll(selector).forEach(card => {
    card.style.transformStyle = "preserve-3d";
    card.addEventListener("mousemove", (e) => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `perspective(800px) rotateY(${px * 6}deg) rotateX(${-py * 6}deg) translateY(-4px)`;
    });
    card.addEventListener("mouseleave", () => { card.style.transform = "perspective(800px) rotateY(0) rotateX(0) translateY(0)"; });
  });
}

function initMagneticButtons() {
  if (prefersReducedMotion() || typeof gsap === "undefined") return;
  document.querySelectorAll(".magnetic-btn").forEach(btn => {
    btn.addEventListener("mousemove", (e) => {
      const r = btn.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2, y = e.clientY - r.top - r.height / 2;
      gsap.to(btn, { x: x * 0.25, y: y * 0.4, duration: 0.4, ease: "power2.out" });
    });
    btn.addEventListener("mouseleave", () => gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1,0.4)" }));
  });
}

function initGradientBackground(selector = "[data-animated-gradient]") {
  document.querySelectorAll(selector).forEach(el => el.classList.add("animated-gradient"));
}

/* Master init — call on every page after navbar/footer render + car cards render */
function initAllAnimations() {
  initLenis();
  initHeroAnimations();
  initCounters();
  initCardReveals();
  init3DTilt();
  initMagneticButtons();
  initGradientBackground();
}

document.addEventListener("DOMContentLoaded", () => {
  // Give injected content (navbar/footer/cards) one tick to render first
  setTimeout(initAllAnimations, 50);
});
