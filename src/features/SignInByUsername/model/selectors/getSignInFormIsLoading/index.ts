import { buildAppSelector } from '~/shared/lib/store';

export const [useSignInFormIsLoading, getSignInFormIsLoading] = buildAppSelector((state) => {
  return state['sign-in_username']?.isLoading || false;
});
