const imgTag = document.querySelector('img');

fetch('superman.png')
  .then(resp => resp.blob())
  .then(image => {
    const imgPath = URL.createObjectURL(image);
    imgTag.src = imgPath;
  })