const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const OptimizeJsPlugin = require('optimize-js-plugin')

const env = process.env.NODE_ENV || 'development'

const plugins = [new HtmlWebpackPlugin({
  template: './src/index.ejs',
  filename: 'index.html',
  inject: 'body'
})];

if (env === 'production') {
    plugins.push(
        new webpack.optimize.UglifyJsPlugin(),
        new OptimizeJsPlugin({
            sourceMap: false
        })
    );
}

module.exports = {
  entry: [
    'react-hot-loader/patch',
    './src/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'app.bundle.js'
  },

  module: {
    rules: [{
        test: /\.js$/,
        loader: "babel-loader",
        exclude: __dirname + '/node_modules'
      },
      {
        test: /\.scss$/,
        use: [{
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },

  plugins: plugins
}
