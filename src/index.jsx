import React, { Component } from 'react'
import ReactDom from 'react-dom'
import axios from 'axios'
// import _ from 'lodash'

class App extends Component {
  componentDidMount() {
    axios.get('/api/help/menu').then(res => {
      console.count(res)
    })
  }

  render() {
    return <div>hello world111</div>
  }
}

ReactDom.render(<App />, document.getElementById('root'))
