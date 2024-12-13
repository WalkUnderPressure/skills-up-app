import { useUserAuthData } from '~/entities/User';
import { useProfileData } from '../../model/selectors/getProfileData';

function useIsCanEdit() {
  const userAuthData = useUserAuthData();
  const profileData = useProfileData();

  const isCanEdit = userAuthData?.id === profileData?.userId;

  return isCanEdit;
}

export default useIsCanEdit;
