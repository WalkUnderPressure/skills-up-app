import { RuleSetRule } from 'webpack';

import buildBabelLoader from './loaders/buildBabelLoader';
import buildFileLoader from './loaders/buildFileLoader';
import buildCssLoader from './loaders/buildCssLoader';
import buildSvgLoader from './loaders/buildSvgLoader';
import { BuildOptions } from './types';

function buildLoaders(options: BuildOptions): Array<RuleSetRule> {
  const codeBabelLoader = buildBabelLoader(options);

  const tsxCodeBabelLoader = buildBabelLoader({ ...options, isTsx: true });

  const cssLoader = buildCssLoader(options);

  const svgLoader = buildSvgLoader();

  const fileLoader = buildFileLoader();

  // Order important
  return [codeBabelLoader, tsxCodeBabelLoader, cssLoader, svgLoader, fileLoader];
}

export default buildLoaders;
