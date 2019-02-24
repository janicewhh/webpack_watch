const merge = require('webpack-merge');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin') //压缩css插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //从js里提取抽离css
const uglifyjs = require('uglifyjs-webpack-plugin'); //压缩js插件
const common = require('./webpack.common.js');
console.log('$$$$$$$$$$$$$$$$$$')
module.exports = merge(common, {
  plugins: [
    new uglifyjs(),
    new OptimizeCssAssetsPlugin(),   //压缩css
    new MiniCssExtractPlugin({
      filename: './css/style.css' 
   }),
  ],
  optimization:{
    splitChunks:{
        cacheGroups: {
            commons: {
                name: 'vendor',
                chunks: 'initial',
                minChunks: 2
            }
        }
    }
  },
  module:{
    rules: [
        {
            test: /\.less$/, 
            // use: ['style-loader', 'css-loader', 'less-loader'],
            use:[ 
                'style-loader',
                MiniCssExtractPlugin.loader,
                'css-loader',
                'less-loader'
            ]
        },
        {
            test: /\.styl$/,
            // use: ['style-loader', 'css-loader', 'stylus-loader']
            use: [
                'style-loader',
                MiniCssExtractPlugin.loader,
                
                'css-loader',
                'stylus-loader'

            ]
            
        },
        {
            test: /\.css$/, 
            // use: ['style-loader','css-loader']
            use: [
                'style-loader',
                MiniCssExtractPlugin.loader,
                'css-loader'
            ]
        },
        {
            test:/\.(png|svg|jpg|gif)$/,
            use:{
                loader: 'file-loader',
                options: {
                    name:'[name][hash].[ext]',
                    outputPath: './images/',   //配置自定义文件 context，默认为 webpack.config.js
                    publicPath: '../images/'   //为你的文件配置自定义 public 发布目录
                }
            }
            
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: {
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: './font',
                    publicPath: '../font'
                }
            }
        },
        {
            test: /\.(xml|json)$/,
            use: {
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: './data',
                    publicPath: '../data'
                }
            }
        }
          
      ]
  }
})