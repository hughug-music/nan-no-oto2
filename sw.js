self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('nan-no-oto-cache-v1').then(cache => {
      return cache.addAll([
        './',
        'index.html',
        'manifest.json',
        'icon.png',
        '18.png',
        '19.png',
        'reward.png',
        'png2/clef.png',
        'sounds/do.mp3',
        'sounds/re.mp3',
        'sounds/mi.mp3',
        'sounds/fa.mp3',
        'sounds/so.mp3',
        'sounds/ra.mp3',
        'sounds/si.mp3',
        'sounds/do-h.mp3',
        'png2/do.png',
        'png2/do-y.png',
        'png2/re.png',
        'png2/re-y.png',
        'png2/mi.png',
        'png2/mi-y.png',
        'png2/fa.png',
        'png2/fa-y.png',
        'png2/so.png',
        'png2/so-y.png',
        'png2/ra.png',
        'png2/ra-y.png',
        'png2/si.png',
        'png2/si-y.png',
        'png2/do-h.png',
        'png2/do-h-y.png'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});