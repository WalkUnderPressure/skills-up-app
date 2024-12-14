import { Skeleton, SkeletonThemes } from '~/shared/ui/Skeleton';
import { VStack } from '~/shared/ui/Stack';
import cls from './PostDetailsSkeleton.module.scss';
import classNames from '~/shared/lib/classNames';

const BANNER_SIZE = 160;

const PostDetailsSkeleton = () => {
  return (
    <VStack fullW fullH gap="24">
      <Skeleton
        className={classNames(cls.banner, {}, [cls['banner-box']])}
        height={BANNER_SIZE}
        width={BANNER_SIZE}
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
