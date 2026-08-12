import { CSSProperties, memo, useMemo } from 'react';

import classNames from '~/shared/lib/classNames';
import cls from './Skeleton.module.scss';

export type SkeletonVariant = 'rect' | 'circle';

type SkeletonProps = {
  height?: string | number;
  width?: string | number;
  variant?: SkeletonVariant;
  withSize?: boolean;
} & PropsWithClassName;

const DEFAULT_SIZE = '100px';

const Skeleton = memo((props: SkeletonProps) => {
  const {
    className,
    height = DEFAULT_SIZE,
    width = DEFAULT_SIZE,
    withSize = true,
    variant = 'rect',
  } = props;

  const styles: CSSProperties = useMemo(
    () =>
      withSize
        ? {
            width,
            height,
            minHeight: height,
            minWidth: width,
          }
        : {},
    [height, width, withSize],
  );

  return <div className={classNames(cls.skeleton, {}, [className, cls[variant]])} style={styles} />;
});

export default Skeleton;
