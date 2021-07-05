fetch('https://reqres.in/api/users/10')
  .then(resp => {
    if (resp.ok) {
      resp.json() // En este punto se esta regresando una nueva promesa
    } else {
      throw new Error('No existe el usuario')
    }
  })
  .then(console.log)
  .catch(err => {
    console.error('Error de peticion');
    console.log(err);
  })