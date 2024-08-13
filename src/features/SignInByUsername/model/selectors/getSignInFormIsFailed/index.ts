import { StoreStateSchema } from 'app/providers/StoreProvider';

const getSignInFormIsFailed = (state: StoreStateSchema) => {
  return state['sign-in_username']?.isFailed || false;
};

export default getSignInFormIsFailed;
