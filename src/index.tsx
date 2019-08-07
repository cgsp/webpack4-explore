// import _ from 'lodash'
import * as _ from 'lodash'

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

class Greeter {
  greeting: string
  constructor(message: string) {
    this.greeting = message
  }

  greet() {
    alert(_.join([this.greeting, '哈哈哈'], '---'))

    // alert(_.join())
  }
}

const say = new Greeter('关')

const button = document.createElement('button')

button.textContent = '按钮'

button.onclick = function() {
  say.greet()
}

document.body.appendChild(button)
