var CACHE_NAME = 'cache_hiit6';
var CACHED_URLS = [
  './',
  "storage_ordenado.html",
 "images/entreno1.jpg",
  "modalpopup.php",
  "https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js",
  "https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css",
     "percepcion.css",
     "percepcion.js",
     "sw_app.js",
     "percepcion.php",
     "header.php",
  "https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js",
  "https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css",
  "index.php",
        "manifest.json",
  "Audiowide.ttf",
    "muestra_datos_websql.js",
  "storage.js",
     "images/entreno2.jpg",
     "images/entreno3.jpg",
     "images/hiit.144.png",
     "images/hiit.196.png",
     "images/hiit.36.png",
     "images/hiit.48.png",
     "images/hiit.72.png",
     "images/hiit.96.png",
  "bootstrap-3.3.7-dist/js/bootstrap.min.js",
        "bootstrap-3.3.7-dist/js/bootstrap.js",
        "bootstrap-3.3.7-dist/fonts/glyphicons-halflings-regular.eot",
        "bootstrap-3.3.7-dist/fonts/glyphicons-halflings-regular.svg",
        "bootstrap-3.3.7-dist/fonts/glyphicons-halflings-regular.ttf",
        "bootstrap-3.3.7-dist/fonts/glyphicons-halflings-regular.woff",
        "bootstrap-3.3.7-dist/fonts/glyphicons-halflings-regular.woff2",
        "bootstrap-3.3.7-dist/css/bootstrap.min.css",
        "bootstrap-3.3.7-dist/css/bootstrap.css",
        "bootstrap-3.3.7-dist/css/bootstrap-theme.css",
  'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css'
  
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(CACHED_URLS);
    })
  );

});


self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).catch(function() {
      return caches.match(event.request).then(function(response) {
        return response || caches.match('peo.html');
      });
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.match(event.request).then(function(cachedResponse) {
        var fetchPromise = fetch(event.request).then(function(networkResponse) {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        })
        return cachedResponse || fetchPromise;
      })
    })
  );
});
