import { StoreStateSchema } from 'app/providers/StoreProvider';

const getProfileCity = (state: StoreStateSchema) => {
  return state['profile']?.data?.city || '';
};

export default getProfileCity;
