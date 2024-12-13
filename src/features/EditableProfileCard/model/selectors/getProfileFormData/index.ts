import { buildAppSelector } from '~/shared/lib/store';
import { Profile } from '~/entities/Profile';

export const [useProfileFormData, getProfileFormData] = buildAppSelector(
  (state): Nullable<Profile> => {
    return state['profile']?.form || null;
  },
);
