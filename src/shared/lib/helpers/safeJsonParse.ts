type Params = {
  reviver?: (this: unknown, key: string, value: unknown) => unknown;
  defaultValue?: Nullable<unknown>;
};

function safeJsonParse<T = null>(text: Nullable<string>, params: Params = {}): T {
  const { reviver, defaultValue } = params;
  let result;

  try {
    result = JSON.parse(text || '', reviver);
  } catch (error) {
    result = defaultValue;
  }

  return result;
}

export default safeJsonParse;
