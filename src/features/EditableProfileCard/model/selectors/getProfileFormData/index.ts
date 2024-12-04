import { StoreStateSchema } from '~/app/providers/StoreProvider';
import { Profile } from '~/entities/Profile';

const getProfileFormData = (state: StoreStateSchema): Nullable<Profile> => {
  return state['profile']?.form || null;
};

export default getProfileFormData;
