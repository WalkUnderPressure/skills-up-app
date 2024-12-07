import { forwardRef, memo } from 'react';

import { DesktopView, MobileView } from '~/shared/ui/DevicesViews';
import { NotificationsList } from '~/entities/Notification';
import { Button, ButtonTheme } from '~/shared/ui/Button';
import { useModalState } from '~/shared/ui/Modal';
import { Popover } from '~/shared/ui/Popups';
import { Drawer } from '~/shared/ui/Drawer';
import BellIcon from '~/shared/assets/icons/bell.svg';
import cls from './NotificationCenter.module.scss';

const TriggerButton = forwardRef<HTMLButtonElement, { onClick?: () => void }>((props, ref) => {
  const { onClick } = props;

  return (
    <Button ref={ref} theme={ButtonTheme.CLEAR} onClick={onClick}>
      <BellIcon width={26} height={32} fill="var(--bg-color)" />
    </Button>
  );
});

type NotificationCenterProps = PropsWithClassName;

const NotificationCenter = memo((props: NotificationCenterProps) => {
  const { className } = props;

  const { isOpen, openModal, closeModal } = useModalState();

  return (
    <>
      <MobileView>
        <TriggerButton onClick={openModal} />

        <Drawer isOpen={isOpen} onClose={closeModal}>
          <NotificationsList
            className={cls['notification-drawer']}
            itemsClassName={cls.notifications}
          />
        </Drawer>
      </MobileView>

      <DesktopView additional={['tablet']}>
        <Popover trigger={<TriggerButton />} direction="bottom-left" className={className}>
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
