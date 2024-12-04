import { Skeleton, SkeletonThemes } from '~/shared/ui/Skeleton';
import classNames from '~/shared/lib/classNames';
import { HStack, VStack } from '~/shared/ui/Stack';

import * as cls from './CommentaryCardSkeleton.module.scss';

const AVATAR_SIZE = 32;

const CommentaryCardSkeleton = () => {
  return (
    <VStack gap="8" fullW className={classNames(cls['block'])}>
      <HStack gap="8" fullW align="center" justify="start">
        <Skeleton width={AVATAR_SIZE} height={AVATAR_SIZE} theme={SkeletonThemes.CIRCLE} />
        <Skeleton height={24} width="30%" />
      </HStack>

      <Skeleton height={24} width="100%" />
    </VStack>
  );
};

export default CommentaryCardSkeleton;
