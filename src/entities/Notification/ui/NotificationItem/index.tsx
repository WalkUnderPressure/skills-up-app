import { memo } from 'react';

import classNames from '~/shared/lib/classNames';
import { AppLink } from '~/shared/ui/AppLink';
import { Card } from '~/shared/ui/Card';
import { Text } from '~/shared/ui/Text';
import { Notification } from '../../model/types/NotificationStateSchema';
import * as cls from './NotificationItem.module.scss';

type NotificationProps = {
  notification: Notification;
} & PropsWithClassName;

const NotificationItem = memo((props: NotificationProps) => {
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

export default NotificationItem;
