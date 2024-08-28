import { DEFAULT_POST_SHORT_LIMIT, DEFAULT_POST_VIEW_TYPE } from '../slice/blogPageSlice';
import { StoreStateSchema } from 'app/providers/StoreProvider';

const getBlogPostViewType = (state: StoreStateSchema) => {
  return state.blogPage?.viewType || DEFAULT_POST_VIEW_TYPE;
};

const getBlogPostsIsLoading = (state: StoreStateSchema) => {
  return state.blogPage?.isLoading || false;
};

const getBlogPostsLimit = (state: StoreStateSchema) => {
  return state.blogPage?.limit || DEFAULT_POST_SHORT_LIMIT;
};

const getBlogPostsHasMore = (state: StoreStateSchema) => {
  return state.blogPage?.hasMore ?? true;
};

const getBlogPostsPage = (state: StoreStateSchema) => {
  return state.blogPage?.page || 1;
};

export {
  getBlogPostViewType,
  getBlogPostsIsLoading,
  getBlogPostsLimit,
  getBlogPostsHasMore,
  getBlogPostsPage,
};
