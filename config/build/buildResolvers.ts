import { ResolveOptions } from "webpack";

import { BuildOptions } from "./types";

function buildResolvers(options: BuildOptions): ResolveOptions {

    return {
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
    }
}

export default buildResolvers
