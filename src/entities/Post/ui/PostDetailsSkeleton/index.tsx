import { Skeleton, SkeletonThemes } from 'shared/ui/Skeleton';
import classNames from 'shared/lib/classNames';
import * as cls from './PostDetailsSkeleton.module.scss';

const AVATAR_SIZE = 240;

const PostDetailsSkeleton = () => {
  return (
    <div className={classNames(cls['skeletons-block'])}>
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
    </div>
  );
};

export default PostDetailsSkeleton;
