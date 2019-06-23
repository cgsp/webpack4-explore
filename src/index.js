
// import '@babel/polyfill'
import React, { Component } from 'react'
import ReactDom from 'react-dom'
import './index.scss'

const getComponent = async () => {
  // 获取lodash，然后赋值给_这个变量
  // return import(/* webpackChunkName:"lodash"*/'lodash').then(({ default: _ }) => {
  //   var ele = document.createElement('div')
  //   ele.innerHTML = _.join(['g', 's'], '^^^')
  //   return ele
  // })

  const { default: _ } = await import(/* webpackChunkName:"lodash" */'lodash')
  const ele = document.createElement('div')
  ele.innerHTML = _.join(['g', 's'], '^^^')
  return ele
}

document.addEventListener('click', () => {
  getComponent()
    .then(ele => {
      document.body.appendChild(ele)
    })
})


// document.addEventListener('click', () => {
//   // 魔法注释
//   import(/* webpackPrefetch: true */ './click.js')
//     .then(({ default: func }) => {
//       func()
//     })
// })


export default class App extends Component {
  render() {
    return (
      <div>我是一个react9992</div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'))



