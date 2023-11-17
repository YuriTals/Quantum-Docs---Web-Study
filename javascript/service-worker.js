const CACHE_NAME = 'quantum-docs-cache';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/img/icon.png',  // Certifique-se de incluir todos os recursos que precisam ser armazenados em cache
  // Adicione mais URLs conforme necessário
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
