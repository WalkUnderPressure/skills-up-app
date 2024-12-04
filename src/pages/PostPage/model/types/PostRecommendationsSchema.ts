import { EntityState } from '@reduxjs/toolkit';

import { Post } from '~/entities/Post';

type PostRecommendationsSchema = {
  isLoading?: boolean;
  error?: string;
} & EntityState<Post, string>;

export default PostRecommendationsSchema;
