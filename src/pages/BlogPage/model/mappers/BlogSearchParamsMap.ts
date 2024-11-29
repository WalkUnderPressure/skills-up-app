import { blogPageActions } from '../slices/blogPageSlice';

export type SearchFieldType = 'sort' | 'order' | 'search' | 'tag';

type BlogPageActionsKey = keyof typeof blogPageActions;

const BlogSearchParamsMap = Object.freeze<
  Record<
    SearchFieldType,
    {
      name: SearchFieldType;
      action: BlogPageActionsKey;
    }
  >
>({
  sort: {
    name: 'sort',
    action: 'setSortField',
  },
  order: {
    name: 'order',
    action: 'setSortOrder',
  },
  search: {
    name: 'search',
    action: 'setSearch',
  },
  tag: {
    name: 'tag',
    action: 'setSearchTag',
  },
});

export default BlogSearchParamsMap;
