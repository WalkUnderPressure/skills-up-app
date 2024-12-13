import { createSelector } from '@reduxjs/toolkit';

import { buildAppSelector } from '~/shared/lib/store';

export const [useScrollKeeperState, getScrollKeeperState] = buildAppSelector(
  (state) => state.scrollKeeper.scroll,
);

export const getScrollByPath = createSelector(
  [getScrollKeeperState, (state, path) => path],
  (scroll, path) => scroll[path] || 0,
);

export const [useScrollIndex, getScrollIndex] = buildAppSelector(
  (state) => state.scrollKeeper?.idx ?? 0,
);
