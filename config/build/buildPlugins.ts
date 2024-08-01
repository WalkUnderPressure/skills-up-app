import {
  ProgressPlugin,
  WebpackPluginInstance,
  DefinePlugin,
  HotModuleReplacementPlugin,
} from 'webpack';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import { BuildOptions } from './types';

function buildPlugins(options: BuildOptions): Array<WebpackPluginInstance> {
  const {
    paths: { html },
    isDev,
    withAnalyze,
  } = options;

  const plugins = [
    new ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: html,
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new DefinePlugin({
      __IS_DEV__: isDev,
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
