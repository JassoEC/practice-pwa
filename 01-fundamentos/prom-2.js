const sum1 = (number) => new Promise((resolve, reject) => {
  console.log(number);
  if (number >= 8) {
    reject('el numero es demasiado alto');
  }
  setTimeout(() => {
    resolve(number + 1)
  }, 800)
})

sum1(5)
  .then(sum1)
  .then(sum1)
  .then(num => console.log(num))
  .catch(error => console.log(error));