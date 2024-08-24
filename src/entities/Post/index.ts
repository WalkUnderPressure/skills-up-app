import PostDetails from './ui/PostDetails';

import { getPostDetails } from './model/selectors/postDetailsSelectors';
import { PostDetailsSchema } from './model/types/PostDetailsSchema';
import { fetchPostById } from './model/services/fetchPostById';
import { Post } from './model/types/Post';

export { PostDetails, PostDetailsSchema, Post, fetchPostById, getPostDetails };
