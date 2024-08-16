import { StoreStateSchema } from 'app/providers/StoreProvider';

const getProfileLastName = (state: StoreStateSchema) => {
  return state['profile']?.data?.last_name || '';
};

export default getProfileLastName;
