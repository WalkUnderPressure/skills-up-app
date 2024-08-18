function mapEnum(enumToMap: unknown) {
  return Object.keys(enumToMap as Record<string, string>) as Array<keyof typeof enumToMap>;
}

export default mapEnum;
