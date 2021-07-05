const sumSlow = (number) => new Promise((resolve, reject) => {
  // reject('nell perr0')
  setTimeout(() => {
    resolve(number + 1)
  }, 800)
})


const sumFast = (number) => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(number + 1)
  }, 300)
})

/* sumSlow(5).then(console.log);
sumFast(6).then(console.log); */


Promise.all([sumSlow(5), sumFast(10)])
  .then(console.log)
  .catch(console.log);