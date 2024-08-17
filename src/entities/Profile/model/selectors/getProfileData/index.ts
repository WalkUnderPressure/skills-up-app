import { StoreStateSchema } from 'app/providers/StoreProvider';
import { Profile } from '../../types/ProfileStateSchema';

const getProfileData = (state: StoreStateSchema): Profile | EmptyObject => {
  return state['profile']?.data || {};
};

export default getProfileData;
