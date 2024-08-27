const getSafeLocalStorageValue = <ET>(
  localStorageKey: string,
  valuesMap: Record<string, string>,
  defaultValue: ET,
): ET => {
  let resultValue = defaultValue;
  const valueFromLS = localStorage.getItem(localStorageKey) || '';

  if (Object.values(valuesMap).includes(valueFromLS)) {
    resultValue = valueFromLS as ET;
  }

  return resultValue;
};

export default getSafeLocalStorageValue;
