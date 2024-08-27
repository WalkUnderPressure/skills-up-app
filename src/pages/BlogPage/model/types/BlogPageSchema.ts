import { EntityState } from '@reduxjs/toolkit';

import { Post, PostViewKey } from 'entities/Post';

type BlogPageSchema = {
  isLoading?: boolean;
  error?: string;
  viewType: PostViewKey;
} & EntityState<Post, string>;

export default BlogPageSchema;
