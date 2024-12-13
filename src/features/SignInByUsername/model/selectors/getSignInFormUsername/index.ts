import { buildAppSelector } from '~/shared/lib/store';

export const [useSignInFormUsername, getSignInFormUsername] = buildAppSelector((state) => {
  return state['sign-in_username']?.username || '';
});
