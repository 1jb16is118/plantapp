self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('plantapp-cache').then((cache) => {
      return cache.addAll(['index.html', 'style.css', 'icon-192.png']);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
