const sum1 = (number, callback) => {
  if (number >= 7) {
    callback('numero muy alto')
  }
  setTimeout(() => {
    callback(null, number + 1);
  }, 800)
}

sum1(5, (error, newValue) => {
  if (error) {
    console.log(error);
    return
  }
  sum1(newValue, (error, newValue2) => {
    if (error) {
      console.log(error);
      return
    }
    sum1(newValue2, (error, value3) => {
      if (error) {
        console.log(error);
        return
      }
      console.log(value3);
    })
  })
});