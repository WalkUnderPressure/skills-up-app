import { StoreStateSchema } from 'app/providers/StoreProvider';

const getProfileFirstName = (state: StoreStateSchema) => {
  return state['profile']?.data?.first_name || '';
};

export default getProfileFirstName;
