import { buildAppSelector } from '~/shared/lib/store';

export const [useSignInFormIsFailed, getSignInFormIsFailed] = buildAppSelector((state) => {
  return state['sign-in_username']?.isFailed || false;
});

export default getSignInFormIsFailed;
