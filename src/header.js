// var img = require('./1.jpg')

import avatar from './avatar.jpg'
import './index.scss'

console.log(img)


const header = () => {
  console.log('我是头部')
}

var img = new Image()

img.src = avatar
// img.classList.add('avatar')
img.setAttribute('class', 'avatar')

var root = document.getElementById('root')
root.append(img)

export default header