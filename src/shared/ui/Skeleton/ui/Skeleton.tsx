import { CSSProperties, memo } from 'react';

import classNames from 'shared/lib/classNames';
import * as cls from './Skeleton.module.scss';

export enum SkeletonThemes {
  RECT = 'rect',
  CIRCLE = 'circle',
}

interface SkeletonProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  theme?: SkeletonThemes;
}

const DEFAULT_SIZE = '100px';

const Skeleton = memo((props: SkeletonProps) => {
  const {
    className,
    height = DEFAULT_SIZE,
    width = DEFAULT_SIZE,
    theme = SkeletonThemes.RECT,
  } = props;

  const styles: CSSProperties = {
    width,
    height,
    minHeight: height,
    minWidth: width,
  };

  return <div className={classNames(cls.skeleton, {}, [className, cls[theme]])} style={styles} />;
});

export default Skeleton;
