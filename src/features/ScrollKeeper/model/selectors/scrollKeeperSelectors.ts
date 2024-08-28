import { createSelector } from '@reduxjs/toolkit';

import { StoreStateSchema } from 'app/providers/StoreProvider';

const getScrollKeeperState = (state: StoreStateSchema) => state.scrollKeeper.scroll;

const getScrollByPath = createSelector(
  getScrollKeeperState,
  (state: StoreStateSchema, path: string) => path,
  (scroll, path) => scroll[path] || 0,
);

export { getScrollKeeperState, getScrollByPath };
