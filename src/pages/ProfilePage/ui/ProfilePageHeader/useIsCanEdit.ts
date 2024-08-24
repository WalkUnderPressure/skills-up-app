import { useAppSelector } from 'app/providers/StoreProvider';
import { getProfileData } from 'entities/Profile';
import { getUserAuthData } from 'entities/User';

function useIsCanEdit() {
  const userAuthData = useAppSelector(getUserAuthData);
  const profileData = useAppSelector(getProfileData);
  const isCanEdit = userAuthData?.id === profileData?.id;

  return isCanEdit;
}

export default useIsCanEdit;
