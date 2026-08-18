import { useTranslation } from 'react-i18next';

import classNames from '~/shared/lib/classNames';
import { VStack } from '~/shared/ui/redesigned/Stack';
import { Text as TestDeprecated } from '~/shared/ui/deprecated/Text';
import { Text } from '~/shared/ui/redesigned/Text';
import { useNotifications, NOTIFICATIONS_REFRESH_INTERVAL } from '../../api/notificationsApi';
import NotificationSkeleton from '../NotificationSkeleton';
import cls from './NotificationsList.module.scss';
import { ToggleFeatures } from '~/entities/User';
import NotificationItem from '../NotificationItem';

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
      <ToggleFeatures
        feature="redesign"
        on={
          <Text
            text={t('notifications.title', { defaultValue: 'Notifications' })}
            className={cls.title}
          />
        }
        off={<TestDeprecated text={t('notifications.title', { defaultValue: 'Notifications' })} />}
      />

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
