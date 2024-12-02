import { MouseEvent, PropsWithChildren, useCallback, useEffect, useState } from 'react';

import useEventListener from 'shared/lib/hooks/useEventListener';
import classNames from 'shared/lib/classNames';
import { Portal } from 'shared/ui/Portal';
import * as cls from './Modal.module.scss';

type ModalProps = {
  isOpen?: boolean;
  onClose: () => void;
  lazy?: boolean;
} & PropsWithChildren &
  PropsWithClassName;

const Modal = (props: ModalProps) => {
  const { children, className, isOpen = false, onClose, lazy = true } = props;

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

  useEventListener('keydown', escClickHandler, {
    isNeedAddHandler: isOpen,
  });

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
export type { ModalProps };
