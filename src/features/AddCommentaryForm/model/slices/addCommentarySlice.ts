import { PayloadAction } from '@reduxjs/toolkit';

import { AddCommentaryFormSchema } from '../types/AddCommentaryFormSchema';
import { buildAppSlice } from '~/shared/lib/store';

const initialState: AddCommentaryFormSchema = {
  isLoading: false,
  error: '',
  text: '',
};

export const addCommentarySlice = buildAppSlice({
  name: 'addCommentary',
  initialState,
  reducers: {
    updateText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
});

export const {
  actions: addCommentaryActions,
  reducer: addCommentaryReducer,
  useActions: useAddCommentaryActions,
} = addCommentarySlice;
