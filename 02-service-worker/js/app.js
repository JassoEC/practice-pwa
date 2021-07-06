/* if ('serviceWorker' in navigator) {
  console.log('podemos usarlo');
} */

// podemos usar el sw

if (navigator.serviceWorker) {
  navigator.serviceWorker.register('/sw.js')
}