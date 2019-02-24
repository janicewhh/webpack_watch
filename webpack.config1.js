const packagejson = require('./package.json');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');  //打包生成html文件
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //从js里提取抽离css
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin') //压缩css插件
const uglifyjs = require('uglifyjs-webpack-plugin'); //压缩js插件
const CleanWebpackPlugin = require('clean-webpack-plugin'); //打包前清理dist

const path = require('path');
module.exports = {
    // entry:{
    //     main:'./src/script/main.js',
    //     main1: './src/script/main1.js',
    //     vendor: Object.keys(packagejson.dependencies)    //提取公用插件
    // } ,
    entry:['./src/script/main.js','./src/script/main1.js'] ,
    devtool: 'inline-source-map',  //提示报错位置
    //webpack-dev-server 为你提供了一个简单的 web 服务器，并且能够实时重新加载(live reloading)
    devServer: {
        index: 'main.html', // 为了可以展示目录
        contentBase: __dirname, // 默认值就是项目根目录
        host: 'localhost',
        port: 3000,
    },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'js/[name][hash].js',
        publicPath: '../'   //js,css,图片,打包后的引用文件的目录
    },
    plugins:[
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
        new OptimizeCssAssetsPlugin(),   //压缩css
        new uglifyjs(),   //压缩js
        // new CleanWebpackPlugin(['dist'])  //打包前清理dist, webpack-dev-server启动也会清理dist

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
    
    
    "mode": "development",
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
}