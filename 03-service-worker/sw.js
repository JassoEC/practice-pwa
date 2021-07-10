self.addEventListener('install', event => {
  // creacion de chache
  // descarga de assets

  console.log('instalando SW!!');

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('instalacionres realizadas');
      self.skipWaiting(promise);
      resolve();
    })
  })

})


self.addEventListener('activate', event => {
  console.log('se activo SW. Listo para controlar app, le cae encima al anterior');
})

self.addEventListener('fetch', event => {
  // aplicar estrategias de cache
  /* console.log(`SW: ${event.request.url}`);
  if (event.request.url.includes('https://reqres.in/')) {
    const response = new Response('{ok: false, message: "jajaja"}')
    event.respondWith(response)
  } */
});


// Cuando se recupera la conexion a internet
self.addEventListener('sync', event => {
  console.log('Tenemos conexion');
  console.log(event);
  console.log(event.tag);
})