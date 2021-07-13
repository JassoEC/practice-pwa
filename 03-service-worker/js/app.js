// Detectar si podemos usar Service Workers
if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/sw.js')
        .then(reg => {
            /* setTimeout(() => {
                reg.sync.register('posteo-de-gatos');
                //console.log('Se mandaron fotos de gatos, ay que bonito');
            }, 3000) */

            Notification.requestPermission().then(result => {
                console.log(result);
                reg.showNotification('Hola de nuéz!! ')
            })
        });
}

/* if(){

} */

const makeRequets = () => fetch('https://reqres.in/api/users')
    .then(resp => resp.text())
    .then(console.log);


// makeRequets();