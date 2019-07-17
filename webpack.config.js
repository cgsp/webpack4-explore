const path = require('path')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    library: 'gsp', // 支持script标签引入的，希望通过gsp这个全局变量去使用这个库的方法
    libraryTarget: 'umd', // umd的u的意思是unversial，通用的意思，代表支持，esmodule, common.js, 和AMD规范
    libraryExport: 'default'

    // libraryTarget: 'window' ,
  }
}
