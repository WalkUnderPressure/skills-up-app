import { memo } from 'react';

import { getRouteProfile } from '~/shared/constants/appRoutes';
import { Avatar as AvatarDeprecated, AvatarSize } from '~/shared/ui/deprecated/Avatar';
import { Avatar } from '~/shared/ui/redesigned/Avatar';
import { HStack, VStack } from '~/shared/ui/redesigned/Stack';
import classNames from '~/shared/lib/classNames';
import { AppLink as AppLinkDeprecated } from '~/shared/ui/deprecated/AppLink';
import { AppLink as AppLinkRedesigned } from '~/shared/ui/redesigned/AppLink';
import { Text as TextDeprecated } from '~/shared/ui/deprecated/Text';
import { Text as TextRedesigned } from '~/shared/ui/redesigned/Text';
import { Commentary } from '../../model/types/commentary';
import cls from './CommentaryCard.module.scss';
import { CommentaryCardDataTestIds } from '~/entities/Commentary/constants';
import { ToggleFeatures, useToggleFeatures } from '~/entities/FeatureFlags';

type CommentaryCardProps = {
  commentary?: Commentary;
} & PropsWithClassName;

const CommentaryCard = memo((props: CommentaryCardProps) => {
  const { className, commentary } = props;

  const userAvatarSrc = commentary?.profile.avatar || '';
  const authorUserId = commentary?.profile.userId || '';

  const { Text, AppLink, cardCls } = useToggleFeatures({
    feature: 'redesign',
    on: () => ({
      Text: TextRedesigned,
      AppLink: AppLinkRedesigned,
      cardCls: cls['commentary-card-redesigned'],
    }),
    off: () => ({
      Text: TextDeprecated,
      AppLink: AppLinkDeprecated,
      cardCls: cls['commentary-card'],
    }),
  });

  return (
    <VStack
      gap="8"
      fullW
      className={classNames(cardCls, {}, [className])}
      data-testid={CommentaryCardDataTestIds.Item}
    >
      <AppLink to={getRouteProfile(authorUserId)}>
        <HStack justify="start" align="center" gap="8">
          {Boolean(userAvatarSrc) && (
            <ToggleFeatures
              feature="redesign"
              on={<Avatar size="xs" src={userAvatarSrc} />}
              off={<AvatarDeprecated size={AvatarSize.XS} src={userAvatarSrc} />}
            />
          )}

          <Text title={commentary?.profile.username} />
        </HStack>
      </AppLink>

      <Text text={commentary?.text} />
    </VStack>
  );
});

export default CommentaryCard;
