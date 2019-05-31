
import '@babel/polyfill'
import './index.scss'

import React, { Component } from 'react'
import ReactDom from 'react-dom'

export default class App extends Component {
  render() {
    return (
      <div>我是一个react</div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'))



