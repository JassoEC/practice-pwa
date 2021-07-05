fetch('notFound.html')
  .then(resp => resp.text())
  .then(resp => {
    const body = document.querySelector('body');
    body.innerHTML = resp
  })