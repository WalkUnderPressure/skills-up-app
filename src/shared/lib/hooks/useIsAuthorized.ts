import { useUserAuthData } from '~/entities/User';

function useIsAuthorized() {
  const userAuthData = useUserAuthData();
  const isAuthorized = Boolean(userAuthData?.id);

  return isAuthorized;
}

export default useIsAuthorized;
