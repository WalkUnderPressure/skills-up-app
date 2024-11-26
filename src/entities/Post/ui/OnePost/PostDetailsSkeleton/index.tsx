import { Skeleton, SkeletonThemes } from 'shared/ui/Skeleton';
import { VStack } from 'shared/ui/Stack';
import * as cls from './PostDetailsSkeleton.module.scss';

const AVATAR_SIZE = 240;

const PostDetailsSkeleton = () => {
  return (
    <VStack fullW fullH gap="24">
      <Skeleton
        className={cls.avatar}
        height={AVATAR_SIZE}
        width={AVATAR_SIZE}
        theme={SkeletonThemes.CIRCLE}
      />
      <Skeleton height={50} width="100%" />
      <Skeleton height={50} width="70%" />

      <Skeleton height={200} width="100%" />
      <Skeleton height={200} width="100%" />
      <Skeleton height={200} width="100%" />
      <Skeleton height={200} width="100%" />
    </VStack>
  );
};

export default PostDetailsSkeleton;
