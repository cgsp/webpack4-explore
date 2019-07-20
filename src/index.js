console.log('gsp')

// 如果浏览器，支持serviceWorker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(registration => {
        console.log('pwa好了')
      })
      .catch(error => {
        console.log('pwa没好')
      })
  })
}
