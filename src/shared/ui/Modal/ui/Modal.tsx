import { PropsWithChildren, useEffect, useState } from 'react';

import classNames from '~/shared/lib/classNames';
import { Overlay } from '~/shared/ui/Overlay';
import { Portal } from '~/shared/ui/Portal';
import { VStack } from '~/shared/ui/Stack';
import cls from './Modal.module.scss';

type ModalProps = {
  isOpen?: boolean;
  onClose: () => void;
  lazy?: boolean;
} & PropsWithChildren &
  PropsWithClassName;

const Modal = (props: ModalProps) => {
  const { children, className, isOpen = false, onClose, lazy = true } = props;

  const mods = { [cls.open]: isOpen };

  const [isNeedShow, setIsNeedShow] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsNeedShow(true);
    }
  }, [isOpen]);

  if (lazy && !isNeedShow) {
    return null;
  }

  return (
    <Portal>
      <VStack align="center" justify="center" className={classNames(cls.modal, mods, [className])}>
        <Overlay onClick={onClose} />

        <VStack className={classNames(cls.content)}>{children}</VStack>
      </VStack>
    </Portal>
  );
};

export default Modal;
export type { ModalProps };
