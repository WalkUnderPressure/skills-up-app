import { PropsWithChildren } from 'react';

import { Overlay } from '~/shared/ui/redesigned/Overlay';
import { Portal } from '~/shared/ui/redesigned/Portal';
import { VStack } from '~/shared/ui/redesigned/Stack';
import classNames from '~/shared/lib/classNames';
import useModal from '../lib/useModal';
import cls from './Modal.module.scss';

type ModalProps = {
  isOpen?: boolean;
  onClose: () => void;
  lazy?: boolean;
} & PropsWithChildren &
  PropsWithClassName;

const Modal = (props: ModalProps) => {
  const { children, className, isOpen = false, onClose, lazy = true } = props;

  const { isMounted } = useModal({ isOpen, onClose });

  if (lazy && !isMounted) {
    return null;
  }

  const mods = { [cls.open]: isOpen };

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
