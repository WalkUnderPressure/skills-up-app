import classNames from 'shared/lib/classNames';
import * as cls from './Avatar.module.scss';

export enum AvatarSize {
  XS = 'size-xs',
  S = 'size-s',
  M = 'size-m',
  L = 'size-l',
  XL = 'size-xl',
}

type AvatarProps = {
  className?: string;
  size?: AvatarSize;
  src: string;
  alt?: string;
};

const Avatar = (props: AvatarProps) => {
  const { src, alt, className, size = AvatarSize.M } = props;

  return (
    <img
      src={src}
      alt={alt || 'Avatar'}
      className={classNames(cls['avatar'], {}, [className, cls[size]])}
    />
  );
};

export default Avatar;
