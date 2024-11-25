import { Skeleton, SkeletonThemes } from 'shared/ui/Skeleton';
import classNames from 'shared/lib/classNames';
import { Card } from 'shared/ui/Card';

import * as cls from './FullPostListItemSkeleton.module.scss';

type FullPostListItemSkeletonProps = {
  className?: string;
};

const FullPostListItemSkeleton = (props: FullPostListItemSkeletonProps) => {
  const { className } = props;

  return (
    <div className={classNames(className)}>
      <Card className={classNames(cls['card-wrapper'])}>
        <div className={cls.header}>
          <div className={cls['header-info']}>
            <Skeleton theme={SkeletonThemes.CIRCLE} width={32} height={32} />
            <Skeleton height={24} width={150} />
          </div>

          <Skeleton height={24} width={150} />
        </div>

        <div className={cls.title}>
          <Skeleton height={32} width="60%" />
          <Skeleton height={32} width="20%" />
        </div>

        <div className={cls.text}>
          <Skeleton height="100%" width="100%" />
        </div>

        <div className={cls.footer}>
          <Skeleton height={32} width="60%" />
          <Skeleton height={32} width="20%" />
        </div>
      </Card>
    </div>
  );
};

export default FullPostListItemSkeleton;
