import { buildAppSelector } from '~/shared/lib/store';

export const [useScrollKeeperState, getScrollKeeperState] = buildAppSelector(
  (state) => state.scrollKeeper.scroll,
);

export const [useGetScrollByPath, getScrollByPath] = buildAppSelector(
  (state, path: string): number => {
    const scrollKeeperState = getScrollKeeperState(state);
    return scrollKeeperState[path] || 0;
  },
);

export const [useScrollIndex, getScrollIndex] = buildAppSelector(
  (state) => state.scrollKeeper?.idx ?? 0,
);
