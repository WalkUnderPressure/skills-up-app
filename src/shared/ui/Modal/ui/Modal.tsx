import { MouseEvent, PropsWithChildren, useCallback } from 'react';

import useEventListener from 'shared/lib/hooks/useEventListener';
import classNames from 'shared/lib/classNames';
import { Portal } from 'shared/ui/Portal';
import * as cls from './Modal.module.scss';

type ModalProps = {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
} & PropsWithChildren;

const Modal = (props: ModalProps) => {
  const { children, className, isOpen, onClose } = props;

  const onCloseHandler = useCallback(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  const preventClose = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  const escClickHandler = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onCloseHandler();
      }
    },
    [onCloseHandler],
  );

  useEventListener('keydown', escClickHandler, { isNeedAddListener: isOpen });

  const mods = { [cls.open]: isOpen };

  return (
    <Portal>
      <div className={classNames(cls.modal, mods, [className])}>
        <div className={classNames(cls.overlay)} onClick={onCloseHandler}>
          <div className={classNames(cls.content)} onClick={preventClose}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
export { ModalProps };
