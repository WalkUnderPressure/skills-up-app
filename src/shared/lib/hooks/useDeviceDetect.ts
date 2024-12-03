import { useState, useEffect } from 'react';

export type DeviceType = 'mobile' | 'tablet' | 'desktop';

type State = {
  device: DeviceType;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
};

const useDeviceDetect = () => {
  const [state, setState] = useState<State>({
    device: 'desktop',
    isMobile: false,
    isTablet: false,
    isDesktop: true,
  });

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const updateDeviceType = () => {
      const width = window.innerWidth;
      const userAgent = navigator.userAgent.toLowerCase();

      const isMobileUA = /iphone|android|mobile|windows phone/.test(userAgent);
      const isTabletUA = /ipad|tablet/.test(userAgent);

      // Determine device based on width first, fallback to UA checks
      let newDevice: DeviceType = 'desktop';
      // alternative: width <= 768 || isMobileUA
      if (width < 768 && isMobileUA) {
        newDevice = 'mobile';
      } else if ((width >= 768 && width < 1024) || isTabletUA) {
        newDevice = 'tablet';
      }

      // Only update state if the device type changes
      if (newDevice !== state.device) {
        setState({
          device: newDevice,
          isMobile: newDevice === 'mobile',
          isTablet: newDevice === 'tablet',
          isDesktop: newDevice === 'desktop',
        });
      }
    };

    // Throttle the resize event handling
    const handleResize = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      timeoutId = setTimeout(updateDeviceType, 500); // 500ms throttle
    };

    // Run on mount and on resize
    updateDeviceType();
    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', handleResize);
    };
  }, [state]);

  return state;
};

export default useDeviceDetect;
