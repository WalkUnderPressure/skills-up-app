import { ProgressPlugin, WebpackPluginInstance, DefinePlugin } from "webpack"
import HtmlWebpackPlugin from "html-webpack-plugin"
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import { BuildOptions } from "./types"

function buildPlugins(options: BuildOptions): Array<WebpackPluginInstance> {
    const { paths: { html }, isDev } = options

    return [
        new ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: html,
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new DefinePlugin({
            __IS_DEV__: isDev,
        })
    ]
}

export default buildPlugins
