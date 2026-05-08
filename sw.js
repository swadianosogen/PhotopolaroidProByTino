const CACHE = 'photopolaroid-v1';
const BASE = '/PhotopolaroidProByTino/';
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll([BASE, BASE+'index.html', BASE+'icon-192.png', BASE+'icon-512.png'])));
  self.skipWaiting();
});
self.addEventListener('activate', e => { e.waitUntil(clients.claim()); });
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
