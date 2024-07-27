import { RuleSetRule } from "webpack";

import { BuildOptions } from "./types";

function buildLoaders(options: BuildOptions): Array<RuleSetRule> {
  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // !IMPORTANT: Order of loaders matters
      // Creates `style` nodes from JS strings
      "style-loader",
      // Translates CSS into CommonJS
      "css-loader",
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
