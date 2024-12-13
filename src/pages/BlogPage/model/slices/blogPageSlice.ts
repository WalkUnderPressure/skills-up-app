import { createEntityAdapter, PayloadAction } from '@reduxjs/toolkit';

import { Post, PostViewMap, PostViewKey, PostSortFieldsKey, PostTagsKey } from '~/entities/Post';
import getSafeLocalStorageValue from '~/shared/lib/helpers/getSafeValueFromLS';
import { fetchBlogPosts } from '../services/fetchBlogPosts/fetchBlogPosts';
import { StoreStateSchema } from '~/app/providers/StoreProvider';
import { LS_BLOG_VIEW } from '~/shared/constants/localStorage';
import {
  DEFAULT_POST_FULL_LIMIT,
  DEFAULT_POST_SHORT_LIMIT,
  DEFAULT_POST_VIEW_TYPE,
  DEFAULT_SEARCH_TAG,
  DEFAULT_SORT_FIELD,
  DEFAULT_SORT_ORDER,
} from '../consts/defaultFilterValues';
import BlogPageSchema from '../types/BlogPageSchema';
import { SortOrder } from '~/shared/types/SortOrder';
import { buildAppSelector, buildAppSlice } from '~/shared/lib/store';

export const blogPostsAdapter = createEntityAdapter({
  selectId: (post: Post) => post.id,
});

const initialState: BlogPageSchema = {
  ids: [],
  entities: {},
  error: '',
  isLoading: false,
  viewType: DEFAULT_POST_VIEW_TYPE,
  page: 1,
  hasMore: true,
  isInitialized: false,
  limit: DEFAULT_POST_SHORT_LIMIT,
  sortOrder: DEFAULT_SORT_ORDER,
  sortField: DEFAULT_SORT_FIELD,
  search: '',
  searchTag: DEFAULT_SEARCH_TAG,
};

export const blogPostsSelectors = blogPostsAdapter.getSelectors<StoreStateSchema>((state) => {
  return state?.blogPage || initialState;
});

export const [useBlogPostsSelectAll, getBlogPostsSelectAll] = buildAppSelector(
  blogPostsSelectors.selectAll,
);

const blogPageSlice = buildAppSlice({
  name: 'blogPageSlice',
  initialState: blogPostsAdapter.getInitialState(initialState),
  reducers: {
    setViewType: (state, action: PayloadAction<PostViewKey>) => {
      const nextView = action.payload;
      state.viewType = nextView;

      localStorage.setItem(LS_BLOG_VIEW, nextView);
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setSortOrder: (state, action: PayloadAction<SortOrder>) => {
      state.sortOrder = action.payload;
    },
    setSortField: (state, action: PayloadAction<PostSortFieldsKey>) => {
      state.sortField = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setSearchTag: (state, action: PayloadAction<PostTagsKey>) => {
      state.searchTag = action.payload;
    },
    initState: (state) => {
      const initViewType = getSafeLocalStorageValue<PostViewKey>(
        LS_BLOG_VIEW,
        PostViewMap,
        DEFAULT_POST_VIEW_TYPE,
      );

      const limit =
        initViewType === PostViewMap.FULL ? DEFAULT_POST_FULL_LIMIT : DEFAULT_POST_SHORT_LIMIT;

      state.viewType = initViewType;
      state.limit = limit;

      state.isInitialized = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogPosts.pending, (state, action) => {
        state.isLoading = true;
        state.error = '';

        if (action.meta.arg?.replace) {
          blogPostsAdapter.removeAll(state);
        }
      })
      .addCase(fetchBlogPosts.fulfilled, (state, action) => {
        const posts = action.payload;

        state.hasMore = posts.length >= state.limit;
        state.isLoading = false;
        state.error = '';

        if (action.meta.arg?.replace) {
          blogPostsAdapter.setAll(state, posts);
        } else {
          blogPostsAdapter.addMany(state, posts);
        }
      })
      .addCase(fetchBlogPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {
  reducer: blogPageReducer,
  actions: blogPageActions,
  useActions: useBlogPageActions,
} = blogPageSlice;
