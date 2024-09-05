import { memo } from 'react';

import { AppRoutes, RouterPaths } from 'shared/config/routerConfig';
import { Avatar, AvatarSize } from 'shared/ui/Avatar';
import classNames from 'shared/lib/classNames';
import { AppLink } from 'shared/ui/AppLink';
import { Text } from 'shared/ui/Text';
import { Commentary } from '../../model/types/commentary';
import * as cls from './CommentaryCard.module.scss';

type CommentaryCardProps = {
  className?: string;
  commentary?: Commentary;
};

const CommentaryCard = memo((props: CommentaryCardProps) => {
  const { className, commentary } = props;

  const userAvatarSrc = commentary?.profile.avatar || '';
  const authorUserId = commentary?.profile.userId || '';

  return (
    <div className={classNames(cls['commentary-card'], {}, [className])}>
      <AppLink to={`${RouterPaths[AppRoutes.PROFILE]}${authorUserId}`}>
        <div className={classNames(cls.header)}>
          {Boolean(userAvatarSrc) && <Avatar size={AvatarSize.XS} src={userAvatarSrc} />}

          <Text title={commentary?.profile.username} />
        </div>
      </AppLink>

      <Text text={commentary?.text} />
    </div>
  );
});

export default CommentaryCard;
