import React, { Component } from 'react'
import ReactDom from 'react-dom'
import axios from 'axios'

class App extends Component {
  componentDidMount() {
    console.log(111)
    axios.get('/api/help/menu').then(res => {
      console.count(res)
    })
  }

  render() {
    return <div>hello world</div>
  }
}

ReactDom.render(<App />, document.getElementById('root'))
