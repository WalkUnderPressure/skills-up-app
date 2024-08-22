import { Post } from './Post';

export interface PostDetailsSchema {
  isLoading: boolean;
  error?: string;
  data?: Post;
}
