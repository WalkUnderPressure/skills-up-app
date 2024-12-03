import { memo, PropsWithChildren, useCallback, useEffect } from 'react';

import {
  useAnimationLibs,
  withAnimationLibsProvider,
} from 'shared/lib/components/AnimationLibsProvider';
import classNames, { Mods } from 'shared/lib/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { Overlay } from 'shared/ui/Overlay';
import { Portal } from 'shared/ui/Portal';
import * as cls from './Drawer.module.scss';

const WINDOW_HEIGHT = window.innerHeight;
const CLOSE_OFFSET = 70;

export type DrawerProps = {
  isOpen?: boolean;
  onClose?: () => void;
} & PropsWithChildren &
  PropsWithClassName;

const Drawer = memo((props: DrawerProps) => {
  const { className, children, onClose, isOpen } = props;

  const { theme } = useTheme();
  const { Spring, Gesture } = useAnimationLibs();

  const mods: Mods = { [cls.open]: isOpen };

  useEffect(() => onClose, [onClose]);

  // Animations
  const [{ y }, api] = Spring.useSpring(() => ({ y: WINDOW_HEIGHT }));

  const openDrawer = useCallback(() => {
    api.start({ y: 0, immediate: false });
  }, [api]);

  const close = useCallback(
    (velocity = 0) => {
      api.start({
        y: WINDOW_HEIGHT,
        immediate: false,
        config: { ...Spring.config.stiff, velocity },
        onResolve: onClose,
      });
    },
    [Spring.config.stiff, api, onClose],
  );

  useEffect(() => {
    if (isOpen) {
      openDrawer();
    } else {
      close();
    }
  }, [isOpen, openDrawer, close]);

  const bind = Gesture.useDrag(
    ({ last, velocity: [, vy], direction: [, dy], movement: [, my], cancel }) => {
      if (my < -CLOSE_OFFSET && cancel) {
        cancel();
        return;
      }

      if (last) {
        if (my > WINDOW_HEIGHT * 0.5 || (vy > 0.5 && dy > 0)) {
          close();
        } else {
          openDrawer();
        }
      } else {
        api.start({ y: my, immediate: true });
      }
    },
    {
      from: () => [0, y.get()],
      filterTaps: true,
      bounds: { top: 0 },
      rubberband: true,
    },
  );

  const display = y.to((py) => (py < WINDOW_HEIGHT ? 'block' : 'none'));

  return (
    <Portal>
      <div className={classNames(cls.drawer, mods, [className, theme])}>
        <Overlay onClick={onClose} />

        <Spring.a.div className={cls.sheet} style={{ display, y }} {...bind()}>
          {children}
        </Spring.a.div>
      </div>
    </Portal>
  );
});

const DrawerSaveUseAnimationLibs = memo((props: DrawerProps) => {
  const { isLoaded } = useAnimationLibs();

  if (!isLoaded) {
    // Add loader or skeleton
    return null;
  }

  return <Drawer {...props} />;
});

export default withAnimationLibsProvider(DrawerSaveUseAnimationLibs);
