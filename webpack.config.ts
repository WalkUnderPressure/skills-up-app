import path from 'path';

import { BuildEnv, BuildOptions } from './config/build/types';
import buildWebpackConfig from './config/build/buildWebpackConfig';

export default (env: BuildEnv) => {
  const API_URL = env.apiUrl || 'http://localhost:7000';
  const BUILD_MODE = env.mode || 'development';
  const WITH_ANALYZE = env.analyze || false;
  const PORT = env.port || 3000;

  const options: BuildOptions = {
    mode: BUILD_MODE,
    isDev: BUILD_MODE === 'development',
    apiUrl: API_URL,
    withAnalyze: WITH_ANALYZE,
    paths: {
      entry: path.resolve(__dirname, 'src', 'index.tsx'),
      output: path.resolve(__dirname, 'build'),
      html: path.resolve(__dirname, 'public', 'index.html'),
      src: path.resolve(__dirname, 'src'),
    },
    port: PORT,
  };

  const config = buildWebpackConfig(options);

  return config;
};
