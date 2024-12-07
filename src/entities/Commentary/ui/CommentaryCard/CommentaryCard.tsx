import { memo } from 'react';

import { AppRoutes, RouterPaths } from '~/shared/constants/appRoutes';
import { Avatar, AvatarSize } from '~/shared/ui/Avatar';
import { HStack, VStack } from '~/shared/ui/Stack';
import classNames from '~/shared/lib/classNames';
import { AppLink } from '~/shared/ui/AppLink';
import { Text } from '~/shared/ui/Text';
import { Commentary } from '../../model/types/commentary';
import cls from './CommentaryCard.module.scss';

type CommentaryCardProps = {
  commentary?: Commentary;
} & PropsWithClassName;

const CommentaryCard = memo((props: CommentaryCardProps) => {
  const { className, commentary } = props;

  const userAvatarSrc = commentary?.profile.avatar || '';
  const authorUserId = commentary?.profile.userId || '';

  return (
    <VStack gap="8" fullW className={classNames(cls['commentary-card'], {}, [className])}>
      <AppLink to={`${RouterPaths[AppRoutes.PROFILE]}${authorUserId}`}>
        <HStack justify="start" align="center" gap="8">
          {Boolean(userAvatarSrc) && <Avatar size={AvatarSize.XS} src={userAvatarSrc} />}

          <Text title={commentary?.profile.username} />
        </HStack>
      </AppLink>

      <Text text={commentary?.text} />
    </VStack>
  );
});

export default CommentaryCard;
