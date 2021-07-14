// const CACHE_NAME = 'cache-1'
const CACHE_STATIC_NAME = 'static-v1'
const CACHE_DYNAMIC_NAME = 'static-v1'
const CACHE_INMUTABLE_NAME = 'inmutable-v1'


// se almacena lo que corresponde al app shell
self.addEventListener('install', e => {
  const cachePromise = caches.open(CACHE_STATIC_NAME)
    .then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/css/style.css',
        '/img/main.jpg',
        '/js/app.js'
      ]);
      // si alguna de las instalaciones falla, falla todas.
    })

  const inmutableCacheProm = caches.open(CACHE_INMUTABLE_NAME)
    .then(cache => cache.addAll([
      'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css',
    ]));

  e.waitUntil(Promise.all([cachePromise, inmutableCacheProm]));
});


self.addEventListener('fetch', e => {
  /* 
    Cache only
    permite que toda la aplicacion se srive desde el cach
    El scope es por dominio
  */

  // e.respondWith(caches.match(e.request)); 

  /* 
    Cache with network fallback
    Si no funciona entonces vamos por la peticion a la red
  */

  const cacheFallback = caches.match(e.request).then(resp => {
    // 404 no dispara error de cache

    if (resp) return resp;

    console.log('no existe recurso, vamos a la web');
    return fetch(e.request).then(newResp => {
      caches.open(CACHE_DYNAMIC_NAME)
        .then(cache => {
          cache.put(e.request, newResp)
        });
      return newResp.clone();
    })
  });

  e.respondWith(cacheFallback);

});