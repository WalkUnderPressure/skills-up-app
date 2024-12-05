import { RuleSetRule } from 'webpack';
import { PluginConfig } from 'svgo';

export const svgrRemoveSvgStrokeAndFillPlugin = (): PluginConfig => {
  return {
    name: 'removeAttrs',
    params: {
      attrs: '(stroke|fill)',
    },
  };
};

function buildSvgLoader(): RuleSetRule {
  const svgoConfigPlugins: Array<PluginConfig> = [svgrRemoveSvgStrokeAndFillPlugin()];

  return {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: [
      {
        loader: '@svgr/webpack',
        options: {
          icon: true,
          svgoConfig: {
            plugins: svgoConfigPlugins,
          },
        },
      },
    ],
  };
}

export default buildSvgLoader;
