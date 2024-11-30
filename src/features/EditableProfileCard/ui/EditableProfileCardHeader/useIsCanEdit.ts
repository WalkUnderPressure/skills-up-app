import { useAppSelector } from 'app/providers/StoreProvider';
import { getUserAuthData } from 'entities/User';
import getProfileData from '../../model/selectors/getProfileData';

function useIsCanEdit() {
  const userAuthData = useAppSelector(getUserAuthData);
  const profileData = useAppSelector(getProfileData);

  const isCanEdit = userAuthData?.id === profileData?.userId;

  return isCanEdit;
}

export default useIsCanEdit;
