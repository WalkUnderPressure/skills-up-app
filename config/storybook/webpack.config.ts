import { Configuration, DefinePlugin, RuleSetRule } from 'webpack';
import path from 'path';

import buildMiniCssExtractPlugin from '../build/plugins/buildMiniCssExtractPlugin';
import buildFileLoader from '../build/loaders/buildFileLoader';
import buildCssLoader from '../build/loaders/buildCssLoader';
import buildSvgLoader from '../build/loaders/buildSvgLoader';

const API_URL = 'http://localhost:7000';

type StorybookWebpackConfig = {
  config: Configuration;
  mode?: string;
};

export default ({ config }: StorybookWebpackConfig) => {
  const isDev = config.mode === 'development';

  // Setup for using absolute imports
  const srcPath = path.resolve(__dirname, '..', '..', 'src');
  config.resolve?.modules?.push(srcPath);
  config.resolve?.extensions?.push('.tsx', '.ts');

  // Setup aliases
  if (config.resolve?.alias) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '~': srcPath,
    };
  }

  // Setup for using css files
  const cssLoader = buildCssLoader({ isDev });
  config.module?.rules?.push(cssLoader);

  // Add MiniCssExtractPlugin to plugins if it's production
  if (!isDev) {
    config.plugins?.push(buildMiniCssExtractPlugin());
  }

  // Setup for using svg
  if (Array.isArray(config.module?.rules)) {
    config.module.rules = config.module?.rules?.filter((rule) => {
      const ruleTestStr = String((rule as RuleSetRule).test || '');

      return Boolean(!/svg/g.test(ruleTestStr));
    });
  }
  const svgLoader = buildSvgLoader();
  config.module?.rules?.push(svgLoader);

  // Setup for using files
  const fileLoader = buildFileLoader();
  config.module?.rules?.push(fileLoader);

  // Setup for add additional variables to DefinePlugin
  const definePlugin: DefinePlugin | undefined = config.plugins?.find(
    (plugin) => plugin instanceof DefinePlugin,
  );

  if (definePlugin) {
    // Run code like in production
    definePlugin.definitions['__IS_DEV__'] = false;
    definePlugin.definitions['__API_URL__'] = JSON.stringify(API_URL);
    definePlugin.definitions['__PROJECT__'] = JSON.stringify('storybook');
  }

  return config;
};
