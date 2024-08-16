import { StoreStateSchema } from 'app/providers/StoreProvider';

const getProfileCountry = (state: StoreStateSchema) => {
  return state['profile']?.data?.country || null;
};

export default getProfileCountry;
