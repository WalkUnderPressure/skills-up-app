import { StoreStateSchema } from '~/app/providers/StoreProvider';

const getSignInFormUsername = (state: StoreStateSchema) => {
  return state['sign-in_username']?.username || '';
};

export default getSignInFormUsername;
