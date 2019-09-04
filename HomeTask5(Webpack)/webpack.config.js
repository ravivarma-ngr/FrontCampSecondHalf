var path = require('path');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
require('es6-promise').polyfill();


module.exports = {
    entry: ["@babel/polyfill","./src/pageController"],
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          },
          {
            test:/\.css$/,
            use:['style-loader','css-loader']
          }

        ]
      },
      optimization: {
        minimizer: [
          new UglifyJSPlugin({
            uglifyOptions: {
              compress: {
                drop_console: true,
              }
            }
          })
        ]
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: './index.html'
        })
      ]
  }