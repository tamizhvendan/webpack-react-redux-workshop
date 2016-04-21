var path = require('path')
var BUILD_DIR = path.resolve(__dirname, "public");
var APP_DIR = path.resolve(__dirname, "app");
var STYLES_DIR = path.resolve(__dirname, "styles");
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
  entry : {
    app : APP_DIR + "/index.js",
    vendor: ["mustache"]
  },
  output: {
    path: BUILD_DIR,
    filename : 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.js/,
        include : APP_DIR,
        loaders : ['babel']
      },
      {
        test : /\.css/,
        include : STYLES_DIR,
        loaders: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js"),
    new HtmlWebpackPlugin({
      inject : true,
      template : './index.html'
    }),
  ]
}

module.exports = config

