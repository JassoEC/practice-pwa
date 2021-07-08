self.addEventListener('install', event => {
  // creacion de chache
  // descarga de assets

  console.log('instalando SW!!');

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('instalacionres realizadas');
      resolve();
    }, [1000])
  })

  self.skipWaiting(promise);
})


self.addEventListener('activate', event => {
  console.log('se activo SW. Listo para controlar app, le cae encima al anterior');
})