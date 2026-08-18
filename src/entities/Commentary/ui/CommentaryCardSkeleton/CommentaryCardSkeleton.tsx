import { Skeleton as SkeletonDeprecated, SkeletonThemes } from '~/shared/ui/deprecated/Skeleton';
import { Skeleton as SkeletonRedesigned } from '~/shared/ui/redesigned/Skeleton';
import classNames from '~/shared/lib/classNames';
import { HStack, VStack } from '~/shared/ui/redesigned/Stack';

import cls from './CommentaryCardSkeleton.module.scss';
import { ToggleFeatures, useToggleFeatures } from '~/entities/User';

const AVATAR_SIZE = 32;

const CommentaryCardSkeleton = () => {
  const { Skeleton, blockCls } = useToggleFeatures({
    feature: 'redesign',
    on: () => ({
      Skeleton: SkeletonRedesigned,
      blockCls: cls['block-redesigned'],
    }),
    off: () => ({
      Skeleton: SkeletonDeprecated,
      blockCls: cls['block'],
    }),
  });

  return (
    <VStack gap="8" fullW className={classNames(blockCls)}>
      <HStack gap="8" fullW align="center" justify="start">
        <ToggleFeatures
          feature="redesign"
          on={<Skeleton width={AVATAR_SIZE} height={AVATAR_SIZE} variant="circle" />}
          off={
            <SkeletonDeprecated
              width={AVATAR_SIZE}
              height={AVATAR_SIZE}
              theme={SkeletonThemes.CIRCLE}
            />
          }
        />
        <Skeleton height={24} width="30%" />
      </HStack>

      <Skeleton height={24} width="100%" />
    </VStack>
  );
};

export default CommentaryCardSkeleton;
