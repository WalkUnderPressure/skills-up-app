import VirtPostsList from './ui/ListOfPosts/PostsList/VirtPostsList';
import PostsList from './ui/ListOfPosts/PostsList/PostsList';
import PostDetails from './ui/OnePost/PostDetails';

import { getPostDetails } from './model/selectors/postDetailsSelectors';
import { PostDetailsSchema } from './model/types/PostDetailsSchema';
import { fetchPostById } from './model/services/fetchPostById';
import {
  Post,
  PostViewMap,
  PostViewKey,
  PostSortFieldsMap,
  PostSortFieldsKey,
  PostTagsMap,
  PostTagsKey,
} from './model/types/Post';

export {
  PostDetails,
  fetchPostById,
  getPostDetails,
  VirtPostsList,
  PostsList,
  PostTagsMap,
  PostViewMap,
  PostSortFieldsMap,
};
export type { PostDetailsSchema, Post, PostTagsKey, PostViewKey, PostSortFieldsKey };
