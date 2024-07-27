const path = require('path');

const BUILD_MODE = process.env.NODE_ENV || 'production'

module.exports = {
  mode: BUILD_MODE,
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'build'),
  },
};
