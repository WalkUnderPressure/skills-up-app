/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useRef } from 'react';

function useThrottle(callback: (...args: Array<any>) => void, delay: number) {
  const needThrottleRef = useRef(false);

  return useCallback(
    (...args: Array<any>) => {
      if (!needThrottleRef.current) {
        callback(...args);
        needThrottleRef.current = true;

        setTimeout(() => {
          needThrottleRef.current = false;
        }, delay);
      }
    },
    [callback, delay],
  );
}

export default useThrottle;
