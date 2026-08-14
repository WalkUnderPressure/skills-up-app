import { Skeleton as SkeletonDeprecated, SkeletonThemes } from '~/shared/ui/deprecated/Skeleton';
import { Skeleton as SkeletonRedesigned } from '~/shared/ui/redesigned/Skeleton';
import { VStack } from '~/shared/ui/redesigned/Stack';
import cls from './PostDetailsSkeleton.module.scss';
import classNames from '~/shared/lib/classNames';
import { ToggleFeatures, useToggleFeatures } from '~/entities/FeatureFlags';

const BANNER_SIZE = 160;

const PostDetailsSkeleton = () => {
  const { Skeleton } = useToggleFeatures({
    feature: 'redesign',
    on: () => ({
      Skeleton: SkeletonRedesigned,
    }),
    off: () => ({
      Skeleton: SkeletonDeprecated,
    }),
  });

  return (
    <VStack fullW fullH gap="24">
      <ToggleFeatures
        feature="redesign"
        on={
          <SkeletonRedesigned
            className={classNames(cls.banner, {}, [cls['banner-box']])}
            height={BANNER_SIZE}
            width={BANNER_SIZE}
            variant="circle"
          />
        }
        off={
          <SkeletonDeprecated
            className={classNames(cls.banner, {}, [cls['banner-box']])}
            height={BANNER_SIZE}
            width={BANNER_SIZE}
            theme={SkeletonThemes.CIRCLE}
          />
        }
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
