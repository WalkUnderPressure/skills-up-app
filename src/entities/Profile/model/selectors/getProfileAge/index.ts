import { StoreStateSchema } from 'app/providers/StoreProvider';

const getProfileAge = (state: StoreStateSchema) => {
  return state['profile']?.data?.age || null;
};

export default getProfileAge;
