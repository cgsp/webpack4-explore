/*
 * @Desc: webpack的配置文件
 * @Author: John.Guan
 * @Date: 2019-05-02 23:14:34
 * @Last Modified by: John.Guan
 * @Last Modified time: 2019-05-30 10:44:38
 */

// node的内置模块，不需要npm安装
const path = require('path')
// 会在打包结束之后，自动生成一个html文件，并把打包生成的js插入到这个html的script里面
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 清空dist目录
const CleanWebpackPlugin = require('clean-webpack-plugin')

/** 
 * commonjs规范
 * 默认必须是webpack.config.js这个文件
 * 如果想变更，不用webpack.config.js这个文件名，需要运行npx webpack --config xxx.js
 */
module.exports = {
  // mode: 'production', // 默认production，代码被压缩
  mode: 'development', // 设置development，代码不会被压缩
  devtool: 'source-map',
  // 入口--完整的写法
  entry: {
    main1: './src/index.js',
    sub1: './src/index.js',
  },
  devServer: {
    // 基于哪个目录进行打包
    contentBase: './dist',
    // 启动后，自动打开浏览器
    open: true,
    // 开启的端口号
    port: 8888,
    // proxy，各脚手架的反向代理，本质就是devServer里面的反向代理
    proxy: {
      '/api': 'http://localhost:3000'
    }
  },
  // 入口--简写
  // entry: './src/index.js',
  output: {
    publicPath: '/',
    // 打包出来的文件叫什么
    // filename: 'dist.js',
    filename: '[name].js',
    // 打包出来的文件，放在什么地方；
    // path这个模块，有个resolve方法，这个方法，第一个参数__dirname，意思是说，与webpack.config.js所在的目录同级的地方；
    // path.resolve(__dirname, 'dist')意思是说，在webpack.config.js的同级目录创建一个dist文件，用来放置打包好的bundle.js
    path: path.resolve(__dirname, 'dist'),
  },
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
      {
        test: /\.(eot|ttf|svg)$/,
        use: {
          loader: 'file-loader'
        }
      },
      // css-loader会分析好css文件之间，彼此的依赖关系，最终，合并为一个css
      // style-loader会在html文件的header部分，生成一个style标签，来挂载css-loader生成的css
      // 如果是处理scss文件，那么必须安装sass-loader 和 node-sass（node-sass不需要写在下面的数组里面）--这2个loader,是将scss翻译为css
      // postcss-loader先处理，例如增加autoprefix, postcss-loader需要一个配置文件-postcss.config.js
      // loader的执行顺序，是从右边到左边
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              // 如果不加这个importLoaders配置的话，如果入口是index.scss，那么index.scss中，如果出现@import 'a.scss' 那么这个a.scss就不会被sass-loader和postcss-loader处理
              // 设置2的话，就表示，所有的嵌套引入资源，都会经过这些loader处理
              // 0 => no loaders (default); 1 => postcss-loader; 2 => postcss-loader, sass-loader
              importLoaders: 2,
              modules: true,
              localIdentName: '[path][name]__[local]--[hash:base64:8]',
            }
          },
          'sass-loader',
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    // 如果只是写这个HtmlWebpackPlugin，而不设置参数的话，生成的html会没有div#root这个节点
    new HtmlWebpackPlugin({
      // 创建一个模板
      template: 'src/index.html'
    }),
    // 清空dist目录
    new CleanWebpackPlugin()
  ],
}