const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: {
    main: './src/index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'bable-loader'
          }
        ]
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name]_[hash].ext',
            outputPath: 'images/',
            limit: 1024 * 10
          }
        }
      },
      {
        test: /\.(eot|ttf|svg)$/,
        use: {
          loader: 'file-loader'
        }
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '../')
    })
  ],
  optimization: {
    runtimeChunk: {
      name: 'runtime'
    },
    usedExports: true,
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          name: 'vendors'
        }
      }
    },
    performance: false,
    output: {
      path: path.resolve(__dirname, '../dist')
    }
  }
}