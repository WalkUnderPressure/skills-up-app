import { Skeleton, SkeletonThemes } from 'shared/ui/Skeleton';
import classNames from 'shared/lib/classNames';

import * as cls from './CommentaryCardSkeleton.module.scss';

const AVATAR_SIZE = 32;

const CommentaryCardSkeleton = () => {
  return (
    <div className={classNames(cls['block'])}>
      <div className={classNames(cls['user-info'])}>
        <Skeleton width={AVATAR_SIZE} height={AVATAR_SIZE} theme={SkeletonThemes.CIRCLE} />
        <Skeleton height={24} width="30%" />
      </div>

      <Skeleton height={24} width="100%" />
    </div>
  );
};

export default CommentaryCardSkeleton;
