import { useAppSelector } from 'app/providers/StoreProvider';
import { getProfileData } from 'features/EditableProfileCard';
import { getUserAuthData } from 'entities/User';

function useIsCanEdit() {
  const userAuthData = useAppSelector(getUserAuthData);
  const profileData = useAppSelector(getProfileData);

  const isCanEdit = userAuthData?.id === profileData?.userId;

  return isCanEdit;
}

export default useIsCanEdit;
