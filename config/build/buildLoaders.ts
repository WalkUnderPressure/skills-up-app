import { RuleSetRule } from 'webpack';

import buildFileLoader from './loaders/buildFileLoader';
import buildCssLoader from './loaders/buildCssLoader';
import buildSvgLoader from './loaders/buildSvgLoader';
import { BuildOptions } from './types';

function buildLoaders(options: BuildOptions): Array<RuleSetRule> {
  const { isDev } = options;

  const babelPlugins = [];
  if (isDev) {
    babelPlugins.push('react-refresh/babel');
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
  };

  // If not using TS, need include "babel-loader"
  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const cssLoader = buildCssLoader(options);

  const svgLoader = buildSvgLoader();

  const fileLoader = buildFileLoader();

  return [babelLoader, tsLoader, cssLoader, svgLoader, fileLoader];
}

export default buildLoaders;
