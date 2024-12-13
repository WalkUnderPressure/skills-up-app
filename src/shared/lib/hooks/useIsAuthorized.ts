import { useUserAuthData } from '~/entities/User';

function useIsAuthorized() {
  const isAuthorized = useUserAuthData();

  return { isAuthorized };
}

export default useIsAuthorized;
