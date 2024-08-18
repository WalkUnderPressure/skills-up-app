import { StoreStateSchema } from 'app/providers/StoreProvider';
import { Profile } from '../../types/ProfileStateSchema';

const getProfileFormData = (state: StoreStateSchema): Nullable<Profile> => {
  return state['profile']?.form || null;
};

export default getProfileFormData;
