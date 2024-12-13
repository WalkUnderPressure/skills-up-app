import { buildAppSelector } from '~/shared/lib/store';

export const [useUserAuthData, getUserAuthData] = buildAppSelector(
  (state) => state.user?.authData || null,
);
