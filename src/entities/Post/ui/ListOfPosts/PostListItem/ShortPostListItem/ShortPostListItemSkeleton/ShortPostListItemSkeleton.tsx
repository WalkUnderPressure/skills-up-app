import { Skeleton } from 'shared/ui/Skeleton';
import { Card } from 'shared/ui/Card';

import * as cls from './ShortPostListItemSkeleton.module.scss';

const ShortPostListItemSkeleton = () => {
  return (
    <Card>
      <div className={cls['card-img']}>
        <Skeleton width="100%" height="100%" />
      </div>

      <div className={cls.info}>
        <Skeleton width="70%" height={24} />
        <Skeleton width="20%" height={24} />
      </div>

      <Skeleton width="100%" height={32} />
    </Card>
  );
};

export default ShortPostListItemSkeleton;
