function randomInArray<T>(values: Array<T>): T | undefined {
  const index = parseInt(String(Math.random() * values.length));

  return values.at(index) ?? undefined;
}

export default randomInArray;
