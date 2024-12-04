import { memo } from 'react';

import { DesktopView, MobileView } from '~/shared/ui/DevicesViews';
import { NotificationsList } from '~/entities/Notification';
import { Button, ButtonTheme } from '~/shared/ui/Button';
import { Popover } from '~/shared/ui/Popups';
import BellIcon from '~/shared/assets/icons/bell.svg';
import { useModal } from '~/shared/ui/Modal';
import { Drawer } from '~/shared/ui/Drawer';
import * as cls from './NotificationCenter.module.scss';

type NotificationCenterProps = PropsWithClassName;

const NotificationCenter = memo((props: NotificationCenterProps) => {
  const { className } = props;

  const { isOpen, openModal, closeModal } = useModal();

  const trigger = (
    <Button theme={ButtonTheme.CLEAR} onClick={openModal}>
      <BellIcon width={26} height={32} fill="var(--bg-color)" />
    </Button>
  );

  return (
    <>
      <MobileView>
        {trigger}

        <Drawer isOpen={isOpen} onClose={closeModal}>
          <NotificationsList
            className={cls['notification-drawer']}
            itemsClassName={cls.notifications}
          />
        </Drawer>
      </MobileView>

      <DesktopView additional={['tablet']}>
        <Popover trigger={trigger} direction="bottom-left" className={className}>
          <NotificationsList
            className={cls['notification-popover']}
            itemsClassName={cls.notifications}
          />
        </Popover>
      </DesktopView>
    </>
  );
});

export default NotificationCenter;
