// De esta forma se interceptan y se manipulan las respuestas mediante un SW

self.addEventListener('fetch', event => {
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
})