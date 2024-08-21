import { Configuration as WebpackConfiguration } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

import { BuildOptions } from './types';
import buildDevServer from './buildDevServer';
import buildResolvers from './buildResolvers';
import buildPlugins from './buildPlugins';
import buildLoaders from './buildLoaders';

function buildWebpackConfig(options: BuildOptions): Configuration {
  const { mode, isDev, paths } = options;

  return {
    mode: mode,
    entry: paths.entry,
    output: {
      filename: 'main.[contenthash].js',
      path: paths.output,
      clean: true,
      publicPath: '/',
    },
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    plugins: buildPlugins(options),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}

export default buildWebpackConfig;
