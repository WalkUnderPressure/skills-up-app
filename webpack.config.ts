import path from 'path'

import { BuildOptions } from './config/build/types';
import buildWebpackConfig from './config/build/buildWebpackConfig';

const BUILD_MODE = process.env.NODE_ENV === 'production' ? 'production' : 'development'

const options: BuildOptions = {
  mode: BUILD_MODE,
  paths: {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    output: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
  },
}

const config = buildWebpackConfig(options);

export default config;
