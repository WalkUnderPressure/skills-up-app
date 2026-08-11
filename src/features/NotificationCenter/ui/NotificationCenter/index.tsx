import { forwardRef, memo } from 'react';

import { DesktopView, MobileView } from '~/shared/ui/redesigned/DevicesViews';
import { NotificationsList } from '~/entities/Notification';
import { Button, ButtonTheme } from '~/shared/ui/deprecated/Button';
import { useModalState } from '~/shared/ui/deprecated/Modal';
import { Popover } from '~/shared/ui/deprecated/Popups';
import { Drawer } from '~/shared/ui/deprecated/Drawer';
import BellIcon from '~/shared/assets/icons/bell.svg';
import cls from './NotificationCenter.module.scss';
import { useToggleFeatures } from '~/entities/FeatureFlags';

const TriggerButton = forwardRef<HTMLButtonElement, { onClick?: () => void }>((props, ref) => {
  const { onClick } = props;

  const iconFill = useToggleFeatures({
    feature: 'redesign',
    on: () => 'var(--redesigned-text)',
    off: () => 'var(--bg-color)',
  });

  return (
    <Button ref={ref} theme={ButtonTheme.CLEAR} onClick={onClick}>
      <BellIcon width={26} height={32} fill={iconFill} />
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
