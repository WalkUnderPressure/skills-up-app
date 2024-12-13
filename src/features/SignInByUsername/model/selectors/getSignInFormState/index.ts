import { buildAppSelector } from '~/shared/lib/store';

export const [useSignInFormState, getSignInFormState] = buildAppSelector(
  (state) => state['sign-in_username'] || {},
);
