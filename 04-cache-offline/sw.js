self.addEventListener('fetch', event => {

  const offLineResponse = new Response(`Bievenido  a mi pagina web, conectate a internet`)

  const response = fetch(event.request)
    .catch(() => offLineResponse)

  event.respondWith(response)
})