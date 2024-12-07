// PayloadAction
import { createSlice } from '@reduxjs/toolkit';

import { RatingStateSchema } from '../types/RatingStateSchema';
// import { your_async_thunk } from '../services/your_async_thunk';

const initialState: RatingStateSchema = {};

export const ratingSlice = createSlice({
  name: 'rating',
  initialState,
  reducers: {
    // template: (state, action: PayloadAction<string>) => {},
  },
  // extraReducers: (builder) => {
  //     builder
  //        .addCase(your_async_thunk.pending, (state) => {
  //             state.error = undefined;
  //             state.isLoading = true;
  //        })
  //        .addCase(your_async_thunk.fulfilled, (state, action: PayloadAction<string>) => {
  //             state.isLoading = false;
  //             state.data = action.payload;
  //        })
  //        .addCase(your_async_thunk.rejected, (state, action: PayloadAction<string>) => {
  //             state.isLoading = false;
  //             state.error = action.payload;
  //        })
  // },
});

export const { actions: ratingActions } = ratingSlice;
export const { reducer: ratingReducer } = ratingSlice;
