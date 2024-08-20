import { BuildOptions } from '../types';

function buildBabelLoader(options: BuildOptions) {
  const { isDev } = options;

  const babelPlugins = [];
  if (isDev) {
    babelPlugins.push('react-refresh/babel');
  }

  return {
    test: /\.[jt]sx?$/,
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
