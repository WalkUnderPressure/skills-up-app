import path from 'path'

import { BuildEnv, BuildOptions } from './config/build/types';
import buildWebpackConfig from './config/build/buildWebpackConfig';

export default (env: BuildEnv) => {
  const BUILD_MODE = env.mode || 'development'
  const PORT = env.port || 3000

  const options: BuildOptions = {
    mode: BUILD_MODE,
    isDev: BUILD_MODE === 'development',
    paths: {
      entry: path.resolve(__dirname, 'src', 'index.ts'),
      output: path.resolve(__dirname, 'build'),
      html: path.resolve(__dirname, 'public', 'index.html'),
    },
    port: PORT,
  }

  const config = buildWebpackConfig(options);

  return config;
};
