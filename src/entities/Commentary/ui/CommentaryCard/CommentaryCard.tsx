import { memo } from 'react';

import { Avatar, AvatarSize } from 'shared/ui/Avatar';
import { Text } from 'shared/ui/Text';
import classNames from 'shared/lib/classNames';
import { Commentary } from '../../model/types/commentary';
import * as cls from './CommentaryCard.module.scss';

type CommentaryCardProps = {
  className?: string;
  commentary?: Commentary;
};

const CommentaryCard = memo((props: CommentaryCardProps) => {
  const { className, commentary } = props;

  const userAvatarSrc = commentary?.profile.avatar || '';

  return (
    <div className={classNames(cls['commentary-card'], {}, [className])}>
      <div className={classNames(cls.header)}>
        {Boolean(userAvatarSrc) && <Avatar size={AvatarSize.XS} src={userAvatarSrc} />}

        <Text title={commentary?.profile.username} />
      </div>

      <Text text={commentary?.text} />
    </div>
  );
});

export default CommentaryCard;
