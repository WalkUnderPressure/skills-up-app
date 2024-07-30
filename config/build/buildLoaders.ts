import { RuleSetRule } from "webpack";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import { BuildOptions } from "./types";

function buildLoaders(options: BuildOptions): Array<RuleSetRule> {
  const { isDev } = options

  const babelPlugins = []
  if (isDev) {
    babelPlugins.push('react-refresh/babel')
  }

  const babelLoader = {
    test: /\.[jt]sx?$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'babel-loader',
        options: {
          plugins: babelPlugins,
        },
      },
    ],
  }

  // If not using TS, need include "babel-loader"
  const tsLoader =  {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // !IMPORTANT: Order of loaders matters
      isDev
        // Creates `style` nodes from JS strings
        ? "style-loader"
        // Extracts CSS into separate files
        : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: true,
            localIdentName: isDev
              ? "[path][name]__[local]--[hash:base64:8]"
              : "[hash:base64:8]",
          },
        },        
      },
      // Compiles Sass to CSS
      "sass-loader",
    ],
  }

  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack'],
  }

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  }

  return [
    babelLoader,
    tsLoader,
    cssLoader,
    svgLoader,
    fileLoader,
  ]
}

export default buildLoaders
