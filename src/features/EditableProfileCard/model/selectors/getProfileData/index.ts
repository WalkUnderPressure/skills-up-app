import { StoreStateSchema } from 'app/providers/StoreProvider';
import { Profile } from 'entities/Profile';

const getProfileData = (state: StoreStateSchema): Nullable<Profile> => {
  return state['profile']?.data || null;
};

export default getProfileData;
