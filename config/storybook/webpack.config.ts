import { Configuration, DefinePlugin, RuleSetRule, WebpackPluginInstance } from 'webpack';
import path from 'path';

import buildFileLoader from '../build/loaders/buildFileLoader';
import buildCssLoader from '../build/loaders/buildCssLoader';
import buildSvgLoader from '../build/loaders/buildSvgLoader';

type StorybookWebpackConfig = {
  config: Configuration;
  mode?: string;
};

export default ({ config }: StorybookWebpackConfig) => {
  const isDev = config.mode === 'development';

  // Setup for using absolute imports
  const srcPath = path.resolve(__dirname, '..', '..', 'src');
  config.resolve.modules.push(srcPath);
  config.resolve.extensions.push('.tsx', '.ts');

  // Setup for using css files
  const cssLoader = buildCssLoader({ isDev });
  config.module.rules.push(cssLoader);

  // Setup for using svg
  config.module.rules = config.module.rules.filter((rule: RuleSetRule) => {
    return Boolean(!/svg/g.test(String(rule.test)));
  });
  const svgLoader = buildSvgLoader();
  config.module.rules.push(svgLoader);

  // Setup for using files
  const fileLoader = buildFileLoader();
  config.module.rules.push(fileLoader);

  // Setup for add additional variables to DefinePlugin
  const definePlugin: DefinePlugin | undefined = config.plugins.find(
    (plugin: WebpackPluginInstance) => plugin instanceof DefinePlugin,
  );
  if (definePlugin) {
    definePlugin.definitions['__IS_DEV__'] = isDev;
  }

  return config;
};
