import { RuleSetRule } from 'webpack';

import buildBabelLoader from './loaders/buildBabelLoader';
import buildFileLoader from './loaders/buildFileLoader';
import buildCssLoader from './loaders/buildCssLoader';
import buildSvgLoader from './loaders/buildSvgLoader';
import buildTsLoader from './loaders/buildTsLoader';
import { BuildOptions } from './types';

function buildLoaders(options: BuildOptions): Array<RuleSetRule> {
  const babelLoader = buildBabelLoader(options);

  // If not using TS, need include "babel-loader"
  const tsLoader = buildTsLoader(options);

  const cssLoader = buildCssLoader(options);

  const svgLoader = buildSvgLoader();

  const fileLoader = buildFileLoader();

  // Order important
  return [babelLoader, tsLoader, cssLoader, svgLoader, fileLoader];
}

export default buildLoaders;
