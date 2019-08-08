const webpack = require('webpack')
const merge = require('webpack-merge')
const commonConfig = require('./webpack.common')

const devConfig = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    // contenBase: './dist',
    open: true,
    port: 8080,
    hot: true,
    overlay: {
      errors: true
    },
    host: '0.0.0.0',
    proxy: {
      '/api': {
        target: 'http://open.ximalaya.com',
        // bypass: function(req, res, proxyOptions) {
        //   // alert('111')
        //   if (req.headers.accept.includes('html')) {
        //     // return {
        //     //   code: 0,
        //     //   message: '哈哈哈'
        //     // }
        //     return false
        //   }
        // }
        changeOrigin: true,
        pathRewrite: {
          '/api': ''
        },
        headers: {
          cookie: 'ssss',
          host: '1111'
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2
            }
          },
          'sass-loader',
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js'
  }
}

module.exports = merge(commonConfig, devConfig)
