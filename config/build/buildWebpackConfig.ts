import { Configuration } from "webpack";

import { BuildOptions } from "./types";
import buildResolvers from "./buildResolvers";
import buildPlugins from "./buildPlugins";
import buildLoaders from "./buildLoaders";

function buildWebpackConfig(options: BuildOptions): Configuration {
    const { mode, paths } = options

    return {
        mode: mode,
        entry: paths.entry,
        output: {
          filename: 'main.[contenthash].js',
          path: paths.output,
          clean: true,
        },
        module: {
          rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        plugins: buildPlugins(options),
    }
}

export default buildWebpackConfig
