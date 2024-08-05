import { useCallback, useState } from 'react';

function useModal() {
  const [isOpen, setIsOpen] = useState(false);

  const switchModal = useCallback(() => setIsOpen((prevState) => !prevState), []);
  const closeModal = useCallback(() => setIsOpen(false), []);
  const openModal = useCallback(() => setIsOpen(true), []);

  return { isOpen, openModal, closeModal, switchModal };
}

export default useModal;
