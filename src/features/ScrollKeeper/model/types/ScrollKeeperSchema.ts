// <page pathname, scroll offset>
type ScrollSchema = Record<string, number>;

type ScrollKeeperSchema = {
  scroll: ScrollSchema;
};

export { ScrollSchema, ScrollKeeperSchema };
