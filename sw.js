const CACHE_NAME = "marvel-team-up-v6";
const APP_SHELL = [
  "./",
  "./index.html",
  "./marvel-team-up.js?v=260611-artfix1",
  "./manifest.webmanifest",
  "./assets/images/logo.png",
  "./assets/icons/icon-192.png",
  "./assets/icons/icon-512.png",
  "./assets/icons/icon-maskable-512.png"
];

const appUrl = (path) => new URL(path, self.registration.scope).toString();

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL.map(appUrl)))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((names) => Promise.all(
        names
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const requestUrl = new URL(request.url);
  const isSameOrigin = requestUrl.origin === self.location.origin;

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(appUrl("./index.html"), copy));
          return response;
        })
        .catch(() => caches.match(appUrl("./index.html"), { ignoreSearch: true }))
    );
    return;
  }

  if (!isSameOrigin) return;

  event.respondWith(
    caches.match(request, { ignoreSearch: true })
      .then((cached) => {
        const network = fetch(request).then((response) => {
          if (response && response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          }
          return response;
        });

        return cached || network;
      })
      .catch(() => caches.match(appUrl("./index.html"), { ignoreSearch: true }))
  );
});
