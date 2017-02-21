var CACHE_NAME = 'cache_hiit3';
var CACHED_URLS = [
  './',
  "storage_ordenado.html",
  "muestra_datos_websql.js",
  "storage.js",
  "code.jquery.com/ui/1.12.1/jquery-ui.js",
  "code.jquery.com/jquery-1.12.4.js",
  "code.jquery.com/ui/1.12.1/themes/smoothness/jquery-ui.css",
  "https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css",
     "images/entreno1.jpg",
     "images/entreno2.jpg",
     "images/entreno3.jpg",
     "images/hiit.144.png",
     "images/hiit.196.png",
     "images/hiit.36.png",
     "images/hiit.48.png",
     "images/hiit.72.png",
     "images/hiit.96.png",
     "modalpopup.php",
     "percepcion.css",
     "percepcion.js",
     "sw_app.js",
     "percepcion.php",
     "header.php",
        "haciendoheader.php",
        "manifest.json",
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
        "Audiowide.ttf",
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