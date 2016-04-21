var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

config.entry = [
  config.entry,
  'webpack-dev-server/client?http://0.0.0.0:3000',
  'webpack/hot/only-dev-server'
];

config.plugins =
  config.plugins.concat(new webpack.HotModuleReplacementPlugin());

config.module.loaders[0].loaders.unshift("react-hot");

var server = new WebpackDevServer(webpack(config), {
  publicPath : config.output.publicPath
})

server.listen(3000);