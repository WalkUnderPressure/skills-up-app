import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";

import { BuildOptions } from "./types";

function buildDevServer(options: BuildOptions): WebpackDevServerConfiguration {
    const { port } = options

    return {
        port,
        liveReload: true,
        open: true,
    }
}

export default buildDevServer
