'use strict';

const ExtractText = require('extract-text-webpack-plugin');
const HTMLPlugin = require('html-webpack-plugin');

module.exports = {
  entry: `${__dirname}/app/entry.js`,
  output: {
    path: `${__dirname}/build`,
    filename: 'bundle.js'
  },
  plugins: [
    new HTMLPlugin({template: `${__dirname}/app/index.html`}),
    new ExtractText('bundle.css'),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        loader: ExtractText.extract(['css-loader', 'sass-loader']),
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      }
    ],
  }
};
