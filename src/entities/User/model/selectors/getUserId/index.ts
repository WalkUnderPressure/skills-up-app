import { buildAppSelector } from '~/shared/lib/store';

export const [useUserId, getUserId] = buildAppSelector((state) => state.user?.authData?.id || '');
