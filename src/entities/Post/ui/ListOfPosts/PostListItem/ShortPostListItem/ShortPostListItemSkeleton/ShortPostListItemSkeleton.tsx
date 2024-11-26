import { Skeleton } from 'shared/ui/Skeleton';
import { HStack } from 'shared/ui/Stack';
import { Card } from 'shared/ui/Card';

import * as cls from './ShortPostListItemSkeleton.module.scss';

const ShortPostListItemSkeleton = () => {
  return (
    <Card>
      <div className={cls['card-img']}>
        <Skeleton width="100%" height="100%" />
      </div>

      <HStack justify="between" gap="16">
        <Skeleton width="70%" height={24} />
        <Skeleton width="20%" height={24} />
      </HStack>

      <Skeleton width="100%" height={32} />
    </Card>
  );
};

export default ShortPostListItemSkeleton;
