import { CSSProperties, memo, useMemo } from 'react';

import classNames from '~/shared/lib/classNames';
import cls from './Skeleton.module.scss';

export enum SkeletonThemes {
  RECT = 'rect',
  CIRCLE = 'circle',
}

type SkeletonProps = {
  height?: string | number;
  width?: string | number;
  theme?: SkeletonThemes;
  withSize?: boolean;
} & PropsWithClassName;

const DEFAULT_SIZE = '100px';

const Skeleton = memo((props: SkeletonProps) => {
  const {
    className,
    height = DEFAULT_SIZE,
    width = DEFAULT_SIZE,
    withSize = true,
    theme = SkeletonThemes.RECT,
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

  return <div className={classNames(cls.skeleton, {}, [className, cls[theme]])} style={styles} />;
});

export default Skeleton;
