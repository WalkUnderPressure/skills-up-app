import { BuildOptions } from '../types';

function buildTsLoader(_options: BuildOptions) {
  return {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };
}

export default buildTsLoader;
