/* ============================================================
   TRINITY CAR — assets/sw.js
   Minimal cache-first service worker for the core site shell.
   Bump CACHE_NAME whenever assets change so old caches are dropped.
   ============================================================ */

const CACHE_NAME = "trinitycar-v3";
const CORE_ASSETS = [
  "index.html",
  "flotte.html",
  "agence.html",
  "reservation.html",
  "tailwind.css?v=3",
  "style.css?v=3",
  "icons.js?v=3",
  "data.js?v=3",
  "i18n.js?v=3",
  "ui.js?v=3",
  "animations.js?v=3",
  "favicon.svg",
  "manifest.json"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(CORE_ASSETS))
      .catch(() => {}) // never block install if one asset fails (e.g. offline first install)
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  // Only handle same-origin GET requests; let everything else (CDNs, POST) pass through
  if (event.request.method !== "GET" || new URL(event.request.url).origin !== location.origin) return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      const network = fetch(event.request)
        .then((response) => {
          if (response && response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => cached); // offline: fall back to cache
      return cached || network;
    })
  );
});
