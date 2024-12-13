import { PayloadAction } from '@reduxjs/toolkit';

import { ScrollKeeperSchema } from '../types/ScrollKeeperSchema';
import { buildAppSlice } from '~/shared/lib/store';

type SetScrollPositionPayload = {
  path: string;
  position: number;
};

const initialState: ScrollKeeperSchema = {
  scroll: {},
  // TODO: Maybe need save map of indexes
  idx: 0,
};

export const scrollKeeperSlice = buildAppSlice({
  name: 'scrollKeeperSlice',
  initialState,
  reducers: {
    setScrollPosition: (state, { payload }: PayloadAction<SetScrollPositionPayload>) => {
      state.scroll[payload.path] = payload.position;
    },
    setScrollIndex: (state, action: PayloadAction<number>) => {
      state.idx = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  actions: scrollKeeperActions,
  reducer: scrollKeeperReducer,
  useActions: useScrollKeeperActions,
} = scrollKeeperSlice;
