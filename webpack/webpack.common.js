const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');  //打包生成html文件
const CleanWebpackPlugin = require('clean-webpack-plugin'); //打包前清理dist
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //从js里提取抽离css
const {VueLoaderPlugin} = require('vue-loader')
console.log('*********************')
module.exports = {
  entry:['./src/script/main.js','./src/script/main1.js'] ,
  output: {
    path: path.resolve(__dirname, '../dist/'),
    filename: 'js/[name][hash].js',
    publicPath: '../'   //js,css,图片,打包后的引用文件的目录
  },
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
  "mode": "development",
  resolve:{
    extensions: ['.vue', '.js', '.json', '.styl', '.less', '.css'],
    alias:{
      '@': path.resolve(__dirname, '../src'),
    }
  },
  module:{
    rules: [
        {
            test: /\.less$/, 
            // use: ['style-loader', 'css-loader', 'less-loader'],
            
            include: path.resolve(__dirname, '../src'),   //使用 include 字段仅将 loader 模块应用在实际需要用其转换的位置中：
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
        },
        {
            test: /\.vue$/,
            loader: 'vue-loader'
        }
          
      ]
  },
  plugins:[
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
        title:'test',
        template: './src/template/index.ejs', //模版位置
        filename: './html/index.html',  //打包后html地址
        // files:{
            // css:['style.css'],
            // js:['../../dist/js/main[hash].js','../../dist/js/main1[hash].js']
        // }
    }),
    new MiniCssExtractPlugin({
      filename: './css/style.css' 
    }),
    // new CleanWebpackPlugin(['dist'])  //打包前清理dist, webpac
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),

    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
    })
   ]
}