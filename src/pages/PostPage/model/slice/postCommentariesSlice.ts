import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { StoreStateSchema } from 'app/providers/StoreProvider';
import { Commentary } from 'entities/Commentary';
import PostCommentarySchema from '../types/PostCommentarySchema';
import fetchCommentariesByPostId from '../services/fetchCommentariesByPostId';

const commentariesAdapter = createEntityAdapter({
  selectId: (commentary: Commentary) => commentary.id,
});

export const getPostCommentaries = commentariesAdapter.getSelectors<StoreStateSchema>((state) => {
  return state?.postCommentaries || commentariesAdapter.getInitialState();
});

const initialState: PostCommentarySchema = {
  ids: [],
  entities: {},
  error: '',
  isLoading: false,
};

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
      });
  },
});

export const { reducer: postCommentariesReducer, actions: postCommentariesActions } =
  postCommentariesSlice;
