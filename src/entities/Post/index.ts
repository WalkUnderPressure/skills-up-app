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
import PostSortSelector from './ui/PostSortSelector/PostSortSelector';
import { PostTagsTabs } from './ui/PostTagsTabs';

export {
  PostTagsTabs,
  PostSortSelector,
  PostDetails,
  PostDetailsSchema,
  Post,
  fetchPostById,
  getPostDetails,
  VirtPostsList,
  PostsList,
  PostTagsMap,
  PostTagsKey,
  PostViewMap,
  PostViewKey,
  PostSortFieldsMap,
  PostSortFieldsKey,
};
