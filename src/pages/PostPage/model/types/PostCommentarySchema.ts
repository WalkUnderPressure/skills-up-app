import { EntityState } from '@reduxjs/toolkit';

import { Commentary } from 'entities/Commentary';

type PostCommentarySchema = {
  isLoading?: boolean;
  error?: string;
} & EntityState<Commentary, string>;

export default PostCommentarySchema;
