import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';

import { BuildOptions } from './types';

function buildDevServer(options: BuildOptions): WebpackDevServerConfiguration {
  const { port } = options;

  return {
    liveReload: true,
    open: true,
    port,
    historyApiFallback: true,
    hot: true,
    client: {
      overlay: false,
    },
  };
}

export default buildDevServer;
