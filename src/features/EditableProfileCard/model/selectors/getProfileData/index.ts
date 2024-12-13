import { buildAppSelector } from '~/shared/lib/store';
import { Profile } from '~/entities/Profile';

export const [useProfileData, getProfileData] = buildAppSelector((state): Nullable<Profile> => {
  return state['profile']?.data || null;
});
