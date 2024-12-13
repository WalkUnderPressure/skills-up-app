import { buildAppSelector } from '~/shared/lib/store';

export const [useProfileIsLoading, getProfileIsLoading] = buildAppSelector((state) => {
  return state['profile']?.isLoading || false;
});
