import { buildAppSelector } from '~/shared/lib/store';
import {
  DEFAULT_POST_SHORT_LIMIT,
  DEFAULT_POST_VIEW_TYPE,
  DEFAULT_SEARCH_TAG,
  DEFAULT_SORT_FIELD,
  DEFAULT_SORT_ORDER,
} from '../consts/defaultFilterValues';

export const [useBlogPostViewType, getBlogPostViewType] = buildAppSelector((state) => {
  return state.blogPage?.viewType || DEFAULT_POST_VIEW_TYPE;
});

export const [useBlogPostsIsLoading, getBlogPostsIsLoading] = buildAppSelector((state) => {
  return state.blogPage?.isLoading || false;
});

export const [useBlogPostsLimit, getBlogPostsLimit] = buildAppSelector((state) => {
  return state.blogPage?.limit || DEFAULT_POST_SHORT_LIMIT;
});

export const [useBlogPostsHasMore, getBlogPostsHasMore] = buildAppSelector((state) => {
  return state.blogPage?.hasMore ?? true;
});

export const [useBlogPostsPage, getBlogPostsPage] = buildAppSelector((state) => {
  return state.blogPage?.page || 1;
});

export const [useBlogPostsPageInitialized, getBlogPostsPageInitialized] = buildAppSelector(
  (state) => {
    return state.blogPage?.isInitialized ?? false;
  },
);

// filters
export const [useBlogPostsSortOrder, getBlogPostsSortOrder] = buildAppSelector((state) => {
  return state.blogPage?.sortOrder || DEFAULT_SORT_ORDER;
});

export const [useBlogPostsSortField, getBlogPostsSortField] = buildAppSelector((state) => {
  return state.blogPage?.sortField || DEFAULT_SORT_FIELD;
});

export const [useBlogPostsSearch, getBlogPostsSearch] = buildAppSelector((state) => {
  return state.blogPage?.search ?? '';
});

export const [useBlogPostsSearchTag, getBlogPostsSearchTag] = buildAppSelector((state) => {
  return state.blogPage?.searchTag ?? DEFAULT_SEARCH_TAG;
});
