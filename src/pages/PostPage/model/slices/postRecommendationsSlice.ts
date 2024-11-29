import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { StoreStateSchema } from 'app/providers/StoreProvider';
import { Post } from 'entities/Post';
import fetchPostRecommendations from '../services/fetchPostRecommendations';
import PostRecommendationsSchema from '../types/PostRecommendationsSchema';

const recommendationsAdapter = createEntityAdapter({
  selectId: (post: Post) => post.id,
});

const initialState: PostRecommendationsSchema = {
  ids: [],
  entities: {},
  error: '',
  isLoading: false,
};

export const getPostRecommendations = recommendationsAdapter.getSelectors<StoreStateSchema>(
  (state) => {
    return state?.postPage?.postRecommendations || initialState;
  },
);

const postRecommendationsSlice = createSlice({
  name: 'postRecommendationsSlice',
  initialState: recommendationsAdapter.getInitialState(initialState),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostRecommendations.pending, (state) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(fetchPostRecommendations.fulfilled, (state, action) => {
        const posts = action.payload;

        state.isLoading = false;
        state.error = '';

        recommendationsAdapter.setAll(state, posts);
      })
      .addCase(fetchPostRecommendations.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: postRecommendationsReducer } = postRecommendationsSlice;
