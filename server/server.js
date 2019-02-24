const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const path = require('path');

const app = express(),
      DIST_DIR = path.join(__dirname,'../dist'),
      PORT = 3000;
const config = require('../webpack.config.js');
const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  quiet: true
}));
console.log(DIST_DIR,'########################',config.output.publicPath,'###############')
app.use(express.static(DIST_DIR));
app.listen(PORT, function(){
  console.log('Example app listening on port 3000!\n')
})