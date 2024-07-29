type Mods = Record<string, boolean | string>

function classNames(cls: string, mods: Mods = {}, additional: Array<string> = []): string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter((mod) => Boolean(mod[1]))
            .map(([className]) => className)
    ].filter(Boolean).join(' ')
}

export default classNames
