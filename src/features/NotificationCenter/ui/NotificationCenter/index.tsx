import { memo } from 'react';

import { NotificationsList } from 'entities/Notification';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Popover } from 'shared/ui/Popups';
import BellIcon from 'shared/assets/icons/bell.svg';
import * as cls from './NotificationCenter.module.scss';

type NotificationCenterProps = {
  className?: string;
};

const NotificationCenter = memo((props: NotificationCenterProps) => {
  const { className } = props;

  return (
    <Popover
      trigger={
        <Button theme={ButtonTheme.CLEAR}>
          <BellIcon width={26} height={32} fill="var(--bg-color)" />
        </Button>
      }
      direction="bottom-left"
      className={className}
    >
      <NotificationsList
        className={cls['notification-center']}
        itemsClassName={cls.notifications}
      />
    </Popover>
  );
});

export default NotificationCenter;
