// Detectar si podemos usar Service Workers
if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/sw.js')
        .then(reg => {
            setTimeout(() => {
                reg.sync.register('posteo-de-gatos');
                console.log('Se mandaron fotos de gatos, ay que bonito');
            }, 3000)
        });
}

/* if(){

} */

const makeRequets = () => fetch('https://reqres.in/api/users')
    .then(resp => resp.text())
    .then(console.log);


// makeRequets();