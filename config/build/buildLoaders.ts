import { RuleSetRule } from "webpack";

import { BuildOptions } from "./types";

function buildLoaders(options: BuildOptions): Array<RuleSetRule> {

    return [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
    ]
}

export default buildLoaders
