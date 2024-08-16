import { StoreStateSchema } from 'app/providers/StoreProvider';

const getProfileCurrency = (state: StoreStateSchema) => {
  return state['profile']?.data?.currency || null;
};

export default getProfileCurrency;
