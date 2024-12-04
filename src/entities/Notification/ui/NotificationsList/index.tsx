import { useTranslation } from 'react-i18next';

import classNames from '~/shared/lib/classNames';
import { VStack } from '~/shared/ui/Stack';
import { Text } from '~/shared/ui/Text';
import { useNotifications, NOTIFICATIONS_REFRESH_INTERVAL } from '../../api/notificationsApi';
import NotificationSkeleton from '../NotificationSkeleton';
import NotificationItem from '../NotificationItem';
import * as cls from './NotificationsList.module.scss';

export type NotificationsListProps = {
  itemsClassName?: string;
} & PropsWithClassName;

const NotificationsList = (props: NotificationsListProps) => {
  const { className, itemsClassName } = props;

  const { t } = useTranslation();

  const { data: notifications = [], isLoading } = useNotifications(null, {
    pollingInterval: NOTIFICATIONS_REFRESH_INTERVAL,
  });

  return (
    <VStack gap="8" className={classNames(cls.list, {}, [className])}>
      <Text text={t('notifications.title', { defaultValue: 'Notifications' })} />

      <VStack gap="16" fullW className={itemsClassName}>
        {isLoading && (
          <>
            <NotificationSkeleton />
            <NotificationSkeleton />
            <NotificationSkeleton />
            <NotificationSkeleton />
          </>
        )}

        {!isLoading && (
          <>
            {notifications.map((notification) => {
              return <NotificationItem key={notification.id} notification={notification} />;
            })}
          </>
        )}
      </VStack>
    </VStack>
  );
};

export default NotificationsList;
