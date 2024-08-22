function getEnumValues(enumToMap: unknown): Array<string> {
  return Object.values(enumToMap as Record<string, string>).map((value) => value);
}

function getEnumRecord(enumToMap: unknown): Record<string, string> {
  return Object.entries(enumToMap as Record<string, string>).reduce(
    (acc, [key, value]) => {
      acc[key] = value;
      return acc;
    },
    {} as Record<string, string>,
  );
}

export { getEnumValues, getEnumRecord };
