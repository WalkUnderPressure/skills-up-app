type BooleanTypes = boolean | string | null | undefined;

export type Mods = Record<string, BooleanTypes>;

function classNames(
  cls: BooleanTypes,
  mods: Mods = {},
  additional: Array<BooleanTypes> = [],
): string {
  return [
    ...[cls, ...additional].filter(Boolean),
    ...Object.entries(mods)
      .filter((mod) => Boolean(mod[1]))
      .map(([className]) => className),
  ]
    .filter(Boolean)
    .join(' ');
}

export default classNames;
