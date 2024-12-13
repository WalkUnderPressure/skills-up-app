import { buildAppSelector } from '~/shared/lib/store';

export const [useSignInFormPassword, getSignInFormPassword] = buildAppSelector((state) => {
  return state['sign-in_username']?.password || '';
});
