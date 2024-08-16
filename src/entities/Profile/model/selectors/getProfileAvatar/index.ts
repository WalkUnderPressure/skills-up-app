import { StoreStateSchema } from 'app/providers/StoreProvider';

const getProfileAvatar = (state: StoreStateSchema) => {
  return state['profile']?.data?.avatar || '';
};

export default getProfileAvatar;
