import {
  ProgressPlugin,
  WebpackPluginInstance,
  DefinePlugin,
  HotModuleReplacementPlugin,
} from 'webpack';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import buildMiniCssExtractPlugin from './plugins/buildMiniCssExtractPlugin';
import { BuildOptions } from './types';

function buildPlugins(options: BuildOptions): Array<WebpackPluginInstance> {
  const {
    paths: { html },
    isDev,
    apiUrl,
    withAnalyze,
  } = options;

  const plugins = [
    new ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: html,
    }),
    buildMiniCssExtractPlugin(),
    new DefinePlugin({
      __IS_DEV__: isDev,
      __API_URL__: JSON.stringify(apiUrl),
    }),
  ];

  if (withAnalyze) {
    plugins.push(new BundleAnalyzerPlugin());
  }

  if (isDev) {
    plugins.push(
      ...[
        new HotModuleReplacementPlugin(),
        new ReactRefreshWebpackPlugin({
          overlay: false,
        }),
      ],
    );
  }

  return plugins;
}

export default buildPlugins;
