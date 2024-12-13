import { buildAppSelector } from '~/shared/lib/store';

export const [useSignInFormErrorCode, getSignInFormErrorCode] = buildAppSelector((state) => {
  return state['sign-in_username']?.errorCode || null;
});

export default getSignInFormErrorCode;
