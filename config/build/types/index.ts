export type BuildMode = 'development' | 'production'

export type BuildPaths = {
    entry: string,
    output: string,
    html: string,
}

export type BuildOptions = {
    mode: BuildMode,
    paths: BuildPaths,
}
