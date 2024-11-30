import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  stories: ['../../src/**/*.stories.@(ts|tsx)'],

  addons: [
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    '@storybook/addon-webpack5-compiler-babel',
    '@storybook/addon-themes',
    'storybook-addon-mock',
  ],

  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },

  docs: {},

  typescript: {
    check: false,
    checkOptions: {},
    skipCompiler: false,
    reactDocgen: 'react-docgen-typescript',
  },
};

export default config;
