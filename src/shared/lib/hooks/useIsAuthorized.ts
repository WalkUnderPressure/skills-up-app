import { useAppSelector } from 'app/providers/StoreProvider';
import { getUserAuthData } from 'entities/User';

function useIsAuthorized() {
  const isAuthorized = useAppSelector(getUserAuthData);

  return { isAuthorized };
}

export default useIsAuthorized;
