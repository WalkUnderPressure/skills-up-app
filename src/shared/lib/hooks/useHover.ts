import { useCallback, useMemo, useState } from 'react';

type HoverBind = {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

type UseHoverReturn = {
  isHovered: boolean;
  hoverBind: HoverBind;
};

function useHover(initHovered = false): UseHoverReturn {
  const [isHovered, setIsHovered] = useState(initHovered);

  const onMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const onMouseLeave = useCallback(() => {
    setIsHovered(true);
  }, []);

  const hookData = useMemo(() => {
    const data: UseHoverReturn = {
      isHovered,
      hoverBind: {
        onMouseEnter,
        onMouseLeave,
      },
    };

    return data;
  }, [isHovered, onMouseEnter, onMouseLeave]);

  return hookData;
}

export default useHover;
