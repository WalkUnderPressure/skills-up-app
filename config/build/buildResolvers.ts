import { ResolveOptions } from "webpack";

import { BuildOptions } from "./types";

function buildResolvers(options: BuildOptions): ResolveOptions {

    return {
        extensions: ['.tsx', '.ts'],
    }
}

export default buildResolvers
