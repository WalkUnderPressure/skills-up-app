const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const BUILD_MODE = process.env.NODE_ENV || 'production'

module.exports = {
  mode: BUILD_MODE,
  entry: './src/index.js',
  output: {
    filename: 'main.[contenthash].js',
    path: path.resolve(__dirname, 'build'),
    clean: true,
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public', 'index.html'),
    }),
  ],
};
