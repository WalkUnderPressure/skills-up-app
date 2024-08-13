import { StoreStateSchema } from 'app/providers/StoreProvider';

const getSignInFormPassword = (state: StoreStateSchema) => {
  return state['sign-in_username']?.password || '';
};

export default getSignInFormPassword;
