import { RuleSetRule } from 'webpack';
import { PluginConfig } from 'svgo';

function buildSvgLoader(): RuleSetRule {
  const svgoConfigPlugins: Array<PluginConfig> = [
    {
      name: 'removeAttrs',
      params: {
        attrs: '(stroke|fill)',
      },
    },
  ];

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
