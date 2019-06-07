
// import '@babel/polyfill'
import './index.scss'

import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { add } from './math'

export default class App extends Component {
  render() {
    add()
    return (
      <div>我是一个react9992</div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'))



