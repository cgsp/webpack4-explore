class Greeter {
  greeting: string
  constructor(message: string) {
    this.greeting = message
  }

  greet() {
    alert(this.greeting)
  }
}

const say = new Greeter('关')

const button = document.createElement('button')

button.textContent = '按钮'

button.onclick = function() {
  say.greet()
}

document.body.appendChild(button)
