var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var express = require('express');
var url = require('url');
var config = require('./webpack.config');

var app = express();
app.get('/data/:data.json', function(req, res) {
  res.sendFile(`${__dirname}/public/data/${req.params.data}.json`);
});

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true
  }
}).listen(3000, 'localhost', function (err) {
  if (err) {
    console.log(err);
  }

  console.log(`Listening at localhost:3000`);
});

app.listen(3001);
