import { memo } from 'react';

import { Notification } from '../../model/types/NotificationStateSchema';
import NotificationItemRedesigned from './NotificationItemRedesigned';
import NotificationItemDeprecated from './NotificationItemDeprecated';
import { ToggleFeatures } from '~/entities/FeatureFlags';

type NotificationProps = {
  notification: Notification;
} & PropsWithClassName;

const NotificationItem = memo((props: NotificationProps) => {
  return (
    <ToggleFeatures
      feature="redesign"
      on={<NotificationItemRedesigned {...props} />}
      off={<NotificationItemDeprecated {...props} />}
    />
  );
});

export default NotificationItem;
