import { EntityState } from '@reduxjs/toolkit';

import { Post, PostSortFieldsKey, PostTagsKey, PostViewKey } from '~/entities/Post';
import IInitialized from '~/shared/types/IInitialized';
import { SortOrder } from '~/shared/types/SortOrder';

type BlogPageSchema = {
  isLoading?: boolean;
  error?: string;

  // view type
  viewType: PostViewKey;

  // pagination
  page: number;
  limit: number;
  hasMore: boolean;

  // filters
  sortOrder: SortOrder;
  sortField: PostSortFieldsKey;
  search: string;
  searchTag: PostTagsKey;
} & IInitialized &
  EntityState<Post, string>;

export default BlogPageSchema;
