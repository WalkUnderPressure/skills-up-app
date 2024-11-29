import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AddCommentaryFormSchema } from '../types/AddCommentaryFormSchema';

const initialState: AddCommentaryFormSchema = {
  isLoading: false,
  error: '',
  text: '',
};

export const addCommentarySlice = createSlice({
  name: 'addCommentary',
  initialState,
  reducers: {
    updateText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
});

export const { actions: addCommentaryActions } = addCommentarySlice;
export const { reducer: addCommentaryReducer } = addCommentarySlice;
