import { RuleSetRule } from "webpack";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import { BuildOptions } from "./types";

function buildLoaders(options: BuildOptions): Array<RuleSetRule> {
  const { isDev } = options

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

  // If not using TS, need include "babel-loader"
  const tsLoader =  {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  return [
    tsLoader,
    cssLoader,
  ]
}

export default buildLoaders
