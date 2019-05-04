/*
 * @Desc: webpack的配置文件
 * @Author: John.Guan
 * @Date: 2019-05-02 23:14:34
 * @Last Modified by: John.Guan
 * @Last Modified time: 2019-05-04 22:08:34
 */

// node的内置模块，不需要npm安装
const path = require('path')

/** 
 * commonjs规范
 * 默认必须是webpack.config.js这个文件
 * 如果想变更，不用webpack.config.js这个文件名，需要运行npx webpack --config xxx.js
 */
module.exports = {
  // mode: 'production', // 默认production，代码被压缩
  mode: 'development', // 设置development，代码不会被压缩
  // 入口--完整的写法
  // entry: {
  //   main: './src/index.js'
  // },
  // 入口--简写
  entry: './src/index.js',
  output: {
    // 打包出来的文件叫什么
    filename: 'bundle.js',
    // 打包出来的文件，放在什么地方；
    // path这个模块，有个resolve方法，这个方法，第一个参数__dirname，意思是说，与webpack.config.js所在的目录同级的地方；
    // path.resolve(__dirname, 'build')意思是说，在webpack.config.js的同级目录创建一个build文件，用来放置打包好的bundle.js
    path: path.resolve(__dirname, 'build'),
  }
}