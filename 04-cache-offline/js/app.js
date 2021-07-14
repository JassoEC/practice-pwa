if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/sw.js');
}

/* if (window.caches) {
    // es un espacio del navegador en el hdd
    caches.open('prueba-1')
    caches.open('prueba-2')

    // verificar si existe un cache
    // caches.has('prueba-2').then(console.log);

    // Borrar cache depues de usarlo

    // caches.delete('prueba-1').then(console.log)

    caches.open('cache-v1.1').then(cache => {
        // cache.add('/index.html');
        cache.addAll([
            '/index.html',
            '/css/style.css',
            '/img/main.jpg'
        ]).then(() => {
            cache.delete('/css/style.css')
            cache.put('index.html', new Response('Hola mundirijillo'))
        });


        cache.match('/index.html').then(resp => {
            resp.text().then(console.log)
        })
    });


    caches.keys().then(keys => console.log(keys))

} */