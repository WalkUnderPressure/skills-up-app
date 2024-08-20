function mapEnum(enumToMap: unknown): Array<string> {
  return Object.keys(enumToMap as Record<string, string>) as Array<keyof typeof enumToMap>;
}

export default mapEnum;
