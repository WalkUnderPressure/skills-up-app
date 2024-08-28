import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';

import getSafeLocalStorageValue from 'shared/lib/helpers/getSafeValueFromLS';
import fetchBlogPosts from '../services/fetchBlogPosts/fetchBlogPosts';
import { StoreStateSchema } from 'app/providers/StoreProvider';
import { Post, PostViewMap, PostViewKey } from 'entities/Post';
import { LS_BLOG_VIEW } from 'shared/constants/localStorage';
import BlogPageSchema from '../types/BlogPageSchema';

const blogPostsAdapter = createEntityAdapter({
  selectId: (post: Post) => post.id,
});

export const DEFAULT_POST_VIEW_TYPE = PostViewMap.SHORT;
export const DEFAULT_POST_SHORT_LIMIT = 12;
export const DEFAULT_POST_FULL_LIMIT = 4;

const initialState: BlogPageSchema = {
  ids: [],
  entities: {},
  error: '',
  isLoading: false,
  viewType: DEFAULT_POST_VIEW_TYPE,
  page: 1,
  hasMore: true,
};

export const getBlogPosts = blogPostsAdapter.getSelectors<StoreStateSchema>((state) => {
  return state?.blogPage || initialState;
});

const blogPageSlice = createSlice({
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
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogPosts.pending, (state) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(fetchBlogPosts.fulfilled, (state, action: PayloadAction<Array<Post>>) => {
        state.isLoading = false;
        state.error = '';

        const posts = action.payload;

        blogPostsAdapter.addMany(state, posts);
        state.hasMore = posts.length > 0;
      })
      .addCase(fetchBlogPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: blogPageReducer, actions: blogPageActions } = blogPageSlice;
