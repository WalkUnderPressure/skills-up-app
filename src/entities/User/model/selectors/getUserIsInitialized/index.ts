import { buildAppSelector } from '~/shared/lib/store';

export const [useUserIsInitialized, getUserIsInitialized] = buildAppSelector(
  (state) => state.user?.isInitialized || false,
);
