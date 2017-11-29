'use strict'

// Keep this as reference to an old webpack config, that worked for me using ES6 + Angular 1

const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './app.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
    publicPath: '/assets'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015'] },
        }]
      },
	  {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      // Loaders for other file types can go here
      {
        test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
        use: "file-loader"
      }
    ],
  },

  devServer: {
    contentBase: path.resolve(__dirname, './src'),  // New
  },


  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'commons',
      filename: 'commons.js',
      minChunks: 2
    })
  ]
};

