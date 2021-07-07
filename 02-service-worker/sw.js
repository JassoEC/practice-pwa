// De esta forma se interceptan y se manipulan las respuestas mediante un SW

/*self.addEventListener('fetch', event => {
  if (event.request.url.includes('style.css')) {
    // resultado de cualquier peticion fetch
    let response = new Response(`
      body {
        background-color: red !important;
        color:pink;
      }
    `, {
      headers: {
        'Content-Type': 'text/css'
      }
    });
    event.respondWith(response)
  }
})*/


/* self.addEventListener('fetch', event => {
  if (event.request.url.includes('main.jpg')) {
    let img = fetch('./img/main-patas-arriba.jpg')
    event.respondWith(img)
  }
}) */

// Manejo de errores

self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).then(resp => resp.ok ? resp : fetch('img/main.jpg'))
  )
})