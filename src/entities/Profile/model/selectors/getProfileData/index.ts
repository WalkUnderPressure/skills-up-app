import { StoreStateSchema } from 'app/providers/StoreProvider';
import { Profile } from '../../types/ProfileStateSchema';

const getProfileData = (state: StoreStateSchema): Nullable<Profile> => {
  return state['profile']?.data || null;
};

export default getProfileData;
