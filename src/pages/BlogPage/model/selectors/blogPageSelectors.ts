import {
  DEFAULT_POST_SHORT_LIMIT,
  DEFAULT_POST_VIEW_TYPE,
  DEFAULT_SEARCH_TAG,
  DEFAULT_SORT_FIELD,
  DEFAULT_SORT_ORDER,
} from '../consts/defaultFilterValues';
import { StoreStateSchema } from '~/app/providers/StoreProvider';

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

const getBlogPostsPageInitialized = (state: StoreStateSchema) => {
  return state.blogPage?.isInitialized ?? false;
};

// filters
const getBlogPostsSortOrder = (state: StoreStateSchema) => {
  return state.blogPage?.sortOrder || DEFAULT_SORT_ORDER;
};

const getBlogPostsSortField = (state: StoreStateSchema) => {
  return state.blogPage?.sortField || DEFAULT_SORT_FIELD;
};

const getBlogPostsSearch = (state: StoreStateSchema) => {
  return state.blogPage?.search ?? '';
};

const getBlogPostsSearchTag = (state: StoreStateSchema) => {
  return state.blogPage?.searchTag ?? DEFAULT_SEARCH_TAG;
};

export {
  getBlogPostViewType,
  getBlogPostsIsLoading,
  getBlogPostsLimit,
  getBlogPostsHasMore,
  getBlogPostsPage,
  getBlogPostsPageInitialized,
  getBlogPostsSortOrder,
  getBlogPostsSortField,
  getBlogPostsSearch,
  getBlogPostsSearchTag,
};
