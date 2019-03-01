const merge = require('webpack-merge');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin') //压缩css插件

const uglifyjs = require('uglifyjs-webpack-plugin'); //压缩js插件
const common = require('./webpack.common.js');
console.log('$$$$$$$$$$$$$$$$$$')
module.exports = merge(common, {
  plugins: [
    new uglifyjs({
      sourceMap: true
    }),
    new OptimizeCssAssetsPlugin(),   //压缩css
    
  ],
  
 
})