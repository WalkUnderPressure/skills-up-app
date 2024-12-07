import { useCallback, useEffect, useState } from 'react';

import useEventListener from '~/shared/lib/hooks/useEventListener';

type UseModalProps = {
  isOpen?: boolean;
  onClose?: () => void;
};

function useModal(props: UseModalProps) {
  const { isOpen, onClose } = props;

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  const escClickHandler = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape' && onClose) {
        onClose();
      }
    },
    [onClose],
  );

  useEventListener('keydown', escClickHandler, {
    isNeedAddHandler: isOpen,
  });

  return { isMounted };
}

export default useModal;
