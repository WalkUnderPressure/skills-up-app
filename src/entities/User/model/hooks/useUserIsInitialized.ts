import { useAppSelector } from 'app/providers/StoreProvider';
import getUserIsInitialized from '../selectors/getUserIsInitialized';

function useUserIsInitialized() {
  const isUserInitialized = useAppSelector(getUserIsInitialized);

  return { isUserInitialized };
}

export default useUserIsInitialized;
