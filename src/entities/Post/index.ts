import PostsList from './ui/ListOfPosts/PostsList/PostsList';
import PostDetails from './ui/OnePost/PostDetails';

import { getPostDetails } from './model/selectors/postDetailsSelectors';
import { PostDetailsSchema } from './model/types/PostDetailsSchema';
import { fetchPostById } from './model/services/fetchPostById';
import { Post, PostsViewType } from './model/types/Post';

export {
  PostDetails,
  PostDetailsSchema,
  Post,
  fetchPostById,
  getPostDetails,
  PostsList,
  PostsViewType,
};
