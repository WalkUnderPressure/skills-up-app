import { Skeleton, SkeletonThemes } from 'shared/ui/Skeleton';
import classNames from 'shared/lib/classNames';
import { HStack } from 'shared/ui/Stack';
import { Card } from 'shared/ui/Card';

import * as cls from './FullPostListItemSkeleton.module.scss';

type FullPostListItemSkeletonProps = {
  className?: string;
};

const FullPostListItemSkeleton = (props: FullPostListItemSkeletonProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls.box, {}, [className])}>
      <Card className={classNames(cls['card-wrapper'])}>
        <HStack justify="between" align="center" gap="32">
          <HStack justify="center" align="center" gap="8">
            <Skeleton theme={SkeletonThemes.CIRCLE} width={32} height={32} />
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
