const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
console.log('!@@@@@@@@@@@@@@@@@@@@@@@@')
module.exports = merge(common, {
  devtool: 'inline-source-map',  //提示报错位置
  devServer: {
    index: 'main.html', // 为了可以展示目录
    contentBase: path.resolve(__dirname, '../'), // 默认值就是项目根目录
    host: 'localhost',
    port: 3000,
    hot: true,
    inline: true
  }
})