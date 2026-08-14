import { Skeleton as SkeletonDeprecated } from '~/shared/ui/deprecated/Skeleton';
import { Skeleton as SkeletonRedesigned } from '~/shared/ui/redesigned/Skeleton';
import { Card as CardDeprecated } from '~/shared/ui/deprecated/Card';
import { Card as CardRedesigned } from '~/shared/ui/redesigned/Card';
import { useToggleFeatures } from '~/entities/FeatureFlags';
import { HStack } from '~/shared/ui/redesigned/Stack';

import cls from './ShortPostListItemSkeleton.module.scss';

const ShortPostListItemSkeleton = () => {
  const { Card, Skeleton } = useToggleFeatures({
    feature: 'redesign',
    on: () => ({
      Skeleton: SkeletonRedesigned,
      Card: CardRedesigned,
    }),
    off: () => ({
      Skeleton: SkeletonDeprecated,
      Card: CardDeprecated,
    }),
  });

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
