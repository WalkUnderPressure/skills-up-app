import { PluginItem } from '@babel/core';

import babelRemovePropsPlugin from '../../babel/babelRemovePropsPlugin';
import { BuildOptions } from '../types';

type CustomPluginType = (...args: Array<unknown>) => PluginItem;

type BabelPlugin = string | [string, object] | CustomPluginType | [CustomPluginType, object];

type BuildBabelLoaderParams = {
  isTsx?: boolean;
} & BuildOptions;

function buildBabelLoader(options: BuildBabelLoaderParams) {
  const { isDev, isTsx } = options;

  const babelPlugins: Array<BabelPlugin> = [
    [
      '@babel/plugin-transform-typescript',
      {
        isTsx,
      },
    ],
  ];

  if (isTsx) {
    babelPlugins.push([
      babelRemovePropsPlugin,
      {
        props: ['data-testid'],
      },
    ]);
  }

  if (isDev) {
    babelPlugins.push('react-refresh/babel');
  }

  return {
    test: isTsx ? /\.[jt]sx?$/ : /\.[jt]s?$/,
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
}

export default buildBabelLoader;
