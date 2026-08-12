import { memo } from 'react';

import classNames from '~/shared/lib/classNames';
import { AppLink } from '~/shared/ui/redesigned/AppLink';
import { Card } from '~/shared/ui/redesigned/Card';
import { Text } from '~/shared/ui/redesigned/Text';
import { Notification } from '../../model/types/NotificationStateSchema';
import cls from './NotificationItem.module.scss';

type NotificationItemRedesignedProps = {
  notification: Notification;
} & PropsWithClassName;

const NotificationItemRedesigned = memo((props: NotificationItemRedesignedProps) => {
  const { className, notification } = props;

  const { title, description, href } = notification;

  const content = (
    <Card className={classNames(cls['notification'], {}, [className])}>
      <Text fullW title={title} text={description} asTitle="p" asText="p" className={cls.text} />
    </Card>
  );

  if (href) {
    return (
      <AppLink to={href} target="_blank">
        {content}
      </AppLink>
    );
  }

  return content;
});

export default NotificationItemRedesigned;
