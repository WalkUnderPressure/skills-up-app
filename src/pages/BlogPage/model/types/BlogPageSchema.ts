import { EntityState } from '@reduxjs/toolkit';

import IInitialized from 'shared/types/IInitialized';
import { Post, PostViewKey } from 'entities/Post';

type BlogPageSchema = {
  isLoading?: boolean;
  error?: string;
  viewType: PostViewKey;

  // pagination
  page: number;
  limit?: number;
  hasMore: boolean;
} & IInitialized &
  EntityState<Post, string>;

export default BlogPageSchema;
