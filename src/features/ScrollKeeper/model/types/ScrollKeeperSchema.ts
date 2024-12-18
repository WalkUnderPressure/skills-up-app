// <page pathname, scroll offset>
type ScrollSchema = Record<string, number>;

type ScrollKeeperSchema = {
  scroll: ScrollSchema;
  idx?: number;
};

export type { ScrollSchema, ScrollKeeperSchema };
