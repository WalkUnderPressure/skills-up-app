/**
 * Casts `value` as an array if it's not one.
 *
 * castArray(1) => [1]
 * castArray({ 'a': 1 } => [{ 'a': 1 }]
 * castArray('abc') => ['abc']
 * castArray(null) => [null]
 * castArray(undefined) => [undefined]
 */
function castArray<T>(...args: Array<unknown>): Array<T> {
  if (!args.length) {
    return [];
  }

  const value = args[0];

  return Array.isArray(value) ? value : [value];
}

export default castArray;
