// import _ from 'lodash'
import * as _ from 'lodash'

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
