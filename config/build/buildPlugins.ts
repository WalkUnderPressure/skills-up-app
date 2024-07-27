import { ProgressPlugin, WebpackPluginInstance } from "webpack"
import HtmlWebpackPlugin from "html-webpack-plugin"

import { BuildOptions } from "./types"

function buildPlugins(options: BuildOptions): Array<WebpackPluginInstance> {
    const { paths: { html } } = options

    return [
        new ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: html,
        }),
    ]
}

export default buildPlugins
