
// import '@babel/polyfill'
import React, { Component } from 'react'
import ReactDom from 'react-dom'
import './index.scss'

const getComponent = () => {
  // 获取lodash，然后赋值给_这个变量
  return import('lodash').then(({ default: _ }) => {
    var ele = document.createElement('div')
    ele.innerHTML = _.join(['g', 's'], '^^^')
    return ele
  })
}

getComponent()
  .then(ele => {
    document.body.appendChild(ele)
  })

export default class App extends Component {
  render() {
    return (
      <div>我是一个react9992</div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'))



