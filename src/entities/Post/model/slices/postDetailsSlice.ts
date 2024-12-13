import { PayloadAction } from '@reduxjs/toolkit';

import { PostDetailsSchema } from '../types/PostDetailsSchema';
import { fetchPostById } from '../services/fetchPostById';
import { Post } from '../types/Post';
import { buildAppSlice } from '~/shared/lib/store';

const initialState: PostDetailsSchema = {
  isLoading: false,
  error: undefined,
  data: undefined,
};

export const postDetailsSlice = buildAppSlice({
  name: 'postDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostById.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchPostById.fulfilled, (state, action: PayloadAction<Post>) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchPostById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {
  actions: postDetailsActions,
  reducer: postDetailsReducer,
  useActions: usePostDetailsActions,
} = postDetailsSlice;
