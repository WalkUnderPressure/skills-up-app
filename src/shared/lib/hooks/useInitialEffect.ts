import { useEffect } from 'react';

function useInitialEffect(callback: () => void, deps: Array<unknown>) {
  useEffect(() => {
    if (__PROJECT__ !== 'storybook' && __PROJECT__ !== 'jest') {
      callback();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps]);
}

export default useInitialEffect;
