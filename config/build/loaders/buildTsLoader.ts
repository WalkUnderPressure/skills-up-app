import { BuildOptions } from '../types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function buildTsLoader(options: BuildOptions) {
  return {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };
}

export default buildTsLoader;
