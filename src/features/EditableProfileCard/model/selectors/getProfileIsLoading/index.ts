import { StoreStateSchema } from '~/app/providers/StoreProvider';

const getProfileIsLoading = (state: StoreStateSchema) => {
  return state['profile']?.isLoading || false;
};

export default getProfileIsLoading;
