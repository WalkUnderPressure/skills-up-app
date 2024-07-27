import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import path from 'path'

const BUILD_MODE = process.env.NODE_ENV === 'production' ? 'production' : 'development'

console.log('BUILD_MODE', BUILD_MODE);

const config: webpack.Configuration = {
  mode: BUILD_MODE,
  entry: './src/index.ts',
  output: {
    filename: 'main.[contenthash].js',
    path: path.resolve(__dirname, 'build'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts'],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public', 'index.html'),
    }),
  ],
};

export default config;
