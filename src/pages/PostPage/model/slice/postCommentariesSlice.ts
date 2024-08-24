import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { StoreStateSchema } from 'app/providers/StoreProvider';
import { Commentary } from 'entities/Commentary';
import fetchCommentariesByPostId from '../services/fetchCommentariesByPostId';
import PostCommentarySchema from '../types/PostCommentarySchema';
import { addCommentaryToPost } from '../services/addCommentaryToPost';

const commentariesAdapter = createEntityAdapter({
  selectId: (commentary: Commentary) => commentary.id,
  // Add createdAt field to Commentary and then sort commentaries by createdAt
  // sortComparer: (a: Commentary, b: Commentary) => a.createdAt,
});

const initialState: PostCommentarySchema = {
  ids: [],
  entities: {},
  error: '',
  isLoading: false,
};

export const getPostCommentaries = commentariesAdapter.getSelectors<StoreStateSchema>((state) => {
  return state?.postCommentaries || initialState;
});

const postCommentariesSlice = createSlice({
  name: 'commentaries',
  initialState: commentariesAdapter.getInitialState(initialState),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentariesByPostId.pending, (state) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(
        fetchCommentariesByPostId.fulfilled,
        (state, action: PayloadAction<Array<Commentary>>) => {
          state.isLoading = false;
          state.error = '';

          const commentaries = action.payload;

          commentariesAdapter.setAll(state, commentaries);
        },
      )
      .addCase(fetchCommentariesByPostId.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addCommentaryToPost.fulfilled, (state, action: PayloadAction<Commentary>) => {
        const commentary = action.payload;

        commentariesAdapter.addOne(state, commentary);
      });
  },
});

export const { reducer: postCommentariesReducer, actions: postCommentariesActions } =
  postCommentariesSlice;
