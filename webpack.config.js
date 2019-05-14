/*
 * @Desc: webpack的配置文件
 * @Author: John.Guan
 * @Date: 2019-05-02 23:14:34
 * @Last Modified by: John.Guan
 * @Last Modified time: 2019-05-14 16:00:31
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
  module: {
    rules: [
      {
        test: /\.(jpg|png|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            // 站位符语法
            name: '[name]-[hash:6].[ext]',
            outputPath: 'assets/images',
            limit: 512,
          },

        }
      },
      // css-loader会分析好css文件之间，彼此的依赖关系，最终，合并为一个css
      // style-loader会在html文件的header部分，生成一个style标签，来挂载css-loader生成的css
      // 如果是处理scss文件，那么必须安装sass-loader 和 node-sass（node-sass不需要写在下面的数组里面）--这2个loader,是将scss翻译为css
      // postcss-loader先处理，例如增加autoprefix, postcss-loader需要一个配置文件-postcss.config.js
      // loader的执行顺序，是从右边到左边
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader']
      }
    ]
  },
  output: {
    // 打包出来的文件叫什么
    filename: 'bundle.js',
    // 打包出来的文件，放在什么地方；
    // path这个模块，有个resolve方法，这个方法，第一个参数__dirname，意思是说，与webpack.config.js所在的目录同级的地方；
    // path.resolve(__dirname, 'build')意思是说，在webpack.config.js的同级目录创建一个build文件，用来放置打包好的bundle.js
    path: path.resolve(__dirname, 'build'),
  }
}