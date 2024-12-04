import { StoreStateSchema } from '~/app/providers/StoreProvider';

const getSignInFormIsLoading = (state: StoreStateSchema) => {
  return state['sign-in_username']?.isLoading || false;
};

export default getSignInFormIsLoading;
