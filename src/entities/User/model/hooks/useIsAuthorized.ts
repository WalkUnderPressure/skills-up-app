import { useAppSelector } from 'app/providers/StoreProvider';
import getUserAuthData from '../selectors/getUserAuthData';

function useIsAuthorized() {
  const isAuthorized = useAppSelector(getUserAuthData);

  return { isAuthorized };
}

export default useIsAuthorized;
