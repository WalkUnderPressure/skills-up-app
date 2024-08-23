import { useEffect } from 'react';

function useInitialEffect(cb: () => void, da: Array<unknown>) {
  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      cb();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [da]);
}

export default useInitialEffect;
