// https://reqres.in/api/users

const data = {
  name: 'Emanuel',
  age: 27,
}

fetch('https://reqres.in/api/users', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    }
  })
  .then(resp => resp.json())
  .then(console.log)
  .catch(err => {
    console.error('Error de peticion');
    console.log(err);
  })