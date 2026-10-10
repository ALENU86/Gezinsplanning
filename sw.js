/* Service worker: keeps the app working offline.
   App files: network first (so updates arrive), cached copy when offline.
   Firebase library and fonts: cached after first use.
   Database traffic is never touched here; Firebase handles its own offline queue. */
const CACHE = 'gezinsplanning-v2';
const SHELL = ['./', './index.html', './config.js', './manifest.webmanifest',
  './icons/icon-192.png', './icons/icon-512.png', './icons/maskable-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  if (url.origin === location.origin) {
    /* 'no-cache' = always ask GitHub whether there is a newer version (GitHub lets browsers keep files up to 10 min) */
    e.respondWith(
      fetch(req.url, {cache: 'no-cache', credentials: 'same-origin'})
        .then(res => { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); return res; })
        .catch(() => caches.match(req, {ignoreSearch: true}).then(r => r || caches.match('./index.html')))
    );
    return;
  }

  const cacheable = url.href.startsWith('https://www.gstatic.com/firebasejs/')
    || url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com';
  if (cacheable) {
    e.respondWith(
      caches.match(req).then(hit => hit || fetch(req).then(res => {
        const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); return res;
      }))
    );
  }
});
