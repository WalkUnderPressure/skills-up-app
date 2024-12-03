import { memo, PropsWithChildren, useEffect } from 'react';

import classNames, { Mods } from 'shared/lib/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { Overlay } from 'shared/ui/Overlay';
import { Portal } from 'shared/ui/Portal';
import * as cls from './Drawer.module.scss';

export type DrawerProps = {
  isOpen?: boolean;
  onClose?: () => void;
} & PropsWithChildren &
  PropsWithClassName;

const Drawer = memo((props: DrawerProps) => {
  const { className, children, onClose, isOpen } = props;
  const { theme } = useTheme();

  const mods: Mods = {
    [cls.open]: isOpen,
  };

  useEffect(() => {
    return onClose;
  }, [onClose]);

  return (
    <Portal>
      <div className={classNames(cls.drawer, mods, [className, theme])}>
        <Overlay onClick={onClose} />
        <div className={cls.content}>{children}</div>
      </div>
    </Portal>
  );
});

export default Drawer;
