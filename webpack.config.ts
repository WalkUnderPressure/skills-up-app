import path from 'path';

import { BuildEnv, BuildOptions } from './config/build/types';
import buildWebpackConfig from './config/build/buildWebpackConfig';

export default (env: BuildEnv) => {
  const API_URL = env.apiUrl || 'http://localhost:7000';
  const BUILD_MODE = env.mode || 'development';
  const WITH_ANALYZE = env.analyze || false;
  const PORT = env.port || 3000;

  const localesFolder = 'locales';
  const buildFolder = 'build';

  const options: BuildOptions = {
    mode: BUILD_MODE,
    isDev: BUILD_MODE === 'development',
    apiUrl: API_URL,
    withAnalyze: WITH_ANALYZE,
    paths: {
      entry: path.resolve(__dirname, 'src', 'index.tsx'),
      output: path.resolve(__dirname, buildFolder),
      html: path.resolve(__dirname, 'public', 'index.html'),
      src: path.resolve(__dirname, 'src'),
      locales: path.resolve(__dirname, 'public', localesFolder),
      buildLocales: path.resolve(__dirname, '', buildFolder, localesFolder),
    },
    port: PORT,
    project: 'app',
  };

  const config = buildWebpackConfig(options);

  return config;
};
