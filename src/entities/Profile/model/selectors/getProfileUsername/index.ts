import { StoreStateSchema } from 'app/providers/StoreProvider';

const getProfileUsername = (state: StoreStateSchema) => {
  return state['profile']?.data?.username || '';
};

export default getProfileUsername;
