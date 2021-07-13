self.addEventListener('fetch', event => {

  /*const  offLineResponse = new Response(`Bievenido  a mi pagina web, conectate a internet`) */


  /*  const offLineResponse = new Response(`
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Mi PWA</title>    
    
</head>
<body class="container p-3">
<h1>Offline mode</h1>
</body>
</html>
  `, {
    headers: {
      'Content-Type': 'text/html'
    }
  }); */


  const offLineResponse = fetch('pages/offline.html')
  const response = fetch(event.request)
    .catch(() => fetch(offLineResponse))

  event.respondWith(response)
})