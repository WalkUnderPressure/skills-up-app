import { StoreStateSchema } from '~/app/providers/StoreProvider';

const getSignInFormErrorCode = (state: StoreStateSchema) => {
  return state['sign-in_username']?.errorCode || null;
};

export default getSignInFormErrorCode;
