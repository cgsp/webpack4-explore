/* 
 * @Desc: 这么写只是一个简易版本的，如果想实现一个类似devServer的功能，这个文件，还需要写很多东西
 * @Author: John.Guan 
 * @Date: 2019-05-30 10:53:17 
 * @Last Modified by: John.Guan
 * @Last Modified time: 2019-05-30 10:53:58
 */
const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const config = require('./webpack.config')
// 引入webpack的编译器
const complier = webpack(config)

const app = express()

app.use(webpackDevMiddleware(complier, {
  publicPath: config.output.publicPath
}))

app.listen(9999, () => {
  console.log('启动成功')
})