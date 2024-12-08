import {
  ProgressPlugin,
  WebpackPluginInstance,
  DefinePlugin,
  HotModuleReplacementPlugin,
} from 'webpack';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import CircularDependencyPlugin from 'circular-dependency-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';

import buildMiniCssExtractPlugin from './plugins/buildMiniCssExtractPlugin';
import { BuildOptions } from './types';

function buildPlugins(options: BuildOptions): Array<WebpackPluginInstance> {
  const {
    paths: { html },
    isDev,
    apiUrl,
    withAnalyze,
    project,
  } = options;

  const plugins = [
    new ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: html,
    }),
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
      __API_URL__: JSON.stringify(apiUrl),
      __PROJECT__: JSON.stringify(project),
    }),
    new CircularDependencyPlugin({
      exclude: /node_modules/,
      failOnError: true,
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true,
        },
        mode: 'write-references',
      },
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

  if (!isDev) {
    const { locales, buildLocales } = options.paths;

    plugins.push(
      new CopyPlugin({
        patterns: [{ from: locales, to: buildLocales }],
      }),
    );

    // Add MiniCssExtractPlugin to plugins if it's production
    plugins.push(buildMiniCssExtractPlugin());
  }

  return plugins;
}

export default buildPlugins;
