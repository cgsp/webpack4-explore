// import '@babel/polyfill'
import React, { Component } from 'react'
import ReactDom from 'react-dom'
import './index.scss'

console.log(_join(['blue'], ''))

export default class App extends Component {
  render() {
    return <div>我是一个react9992</div>
  }
}

ReactDom.render(<App />, document.getElementById('root'))
