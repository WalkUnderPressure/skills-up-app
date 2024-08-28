import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ScrollKeeperSchema } from '../types/ScrollKeeperSchema';

type SetScrollPositionPayload = {
  path: string;
  position: number;
};

const initialState: ScrollKeeperSchema = {
  scroll: {},
};

export const scrollKeeperSlice = createSlice({
  name: 'scrollKeeperSlice',
  initialState,
  reducers: {
    setScrollPosition: (state, { payload }: PayloadAction<SetScrollPositionPayload>) => {
      state.scroll[payload.path] = payload.position;
    },
  },
});

// Action creators are generated for each case reducer function
export const { actions: scrollKeeperActions } = scrollKeeperSlice;
export const { reducer: scrollKeeperReducer } = scrollKeeperSlice;
