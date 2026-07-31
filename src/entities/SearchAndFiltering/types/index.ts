export type SortOrder = 'asc' | 'desc';

export type SearchAndFiltering = {
  _limit?: number;
  _page?: number;
  _sort?: string;
  _order?: SortOrder;
  q?: string;
};
