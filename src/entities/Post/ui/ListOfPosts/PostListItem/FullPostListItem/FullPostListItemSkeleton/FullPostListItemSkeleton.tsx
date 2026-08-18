import { Skeleton as SkeletonDeprecated, SkeletonThemes } from '~/shared/ui/deprecated/Skeleton';
import { Skeleton as SkeletonRedesigned } from '~/shared/ui/redesigned/Skeleton';
import { ToggleFeatures, useToggleFeatures } from '~/entities/User';
import { Card as CardDeprecated } from '~/shared/ui/deprecated/Card';
import { Card as CardRedesigned } from '~/shared/ui/deprecated/Card';
import { HStack } from '~/shared/ui/redesigned/Stack';
import classNames from '~/shared/lib/classNames';

import cls from './FullPostListItemSkeleton.module.scss';

type FullPostListItemSkeletonProps = PropsWithClassName;

const FullPostListItemSkeleton = (props: FullPostListItemSkeletonProps) => {
  const { className } = props;

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
    <div className={classNames(cls.box, {}, [className])}>
      <Card className={classNames(cls['card-wrapper'])}>
        <HStack justify="between" align="center" gap="32">
          <HStack justify="center" align="center" gap="8">
            <ToggleFeatures
              feature="redesign"
              on={<SkeletonRedesigned variant="circle" width={32} height={32} />}
              off={<SkeletonDeprecated theme={SkeletonThemes.CIRCLE} width={32} height={32} />}
            />
            <Skeleton height={24} width={150} />
          </HStack>

          <Skeleton height={24} width={150} />
        </HStack>

        <HStack justify="between" gap="8">
          <Skeleton height={32} width="60%" />
          <Skeleton height={32} width="20%" />
        </HStack>

        <div className={cls.text}>
          <Skeleton height="100%" width="100%" />
        </div>

        <HStack justify="between" align="center" gap="8">
          <Skeleton height={32} width="60%" />
          <Skeleton height={32} width="20%" />
        </HStack>
      </Card>
    </div>
  );
};

export default FullPostListItemSkeleton;
