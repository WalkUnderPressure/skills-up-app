import { useCallback } from 'react';

import useEventListener from '~/shared/lib/hooks/useEventListener';
import useModalState from '~/shared/ui/Modal/lib/useModalState';

function useModal() {
  const { isOpen, openModal, closeModal } = useModalState();

  const escClickHandler = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    },
    [closeModal],
  );

  useEventListener('keydown', escClickHandler, {
    isNeedAddHandler: isOpen,
  });

  return { isOpen, openModal, closeModal };
}

export default useModal;
