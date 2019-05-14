module.exports = {
  // parser: 'sugarss', // 一种更简洁的css语法格式
  plugins: {
    'postcss-import': {}, // @import等
    'postcss-preset-env': {}, // 增加autoprefixer等
    'cssnano': {}, // 相同的css合并，如.a{width:10px}, .b{width:10px}合并为.a,.b{width:10px}
    'postcss-flexbugs-fixes': {},// 修复flex布局的缺陷，但是在低版本浏览器，还是不能用
  }
}