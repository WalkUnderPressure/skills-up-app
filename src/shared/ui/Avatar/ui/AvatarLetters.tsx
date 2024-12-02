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
  size?: AvatarSize;
  username?: string;
} & PropsWithClassName;

const AvatarLetters = (props: AvatarProps) => {
  const { username = 'U', className, size = AvatarSize.M } = props;

  return (
    <span className={classNames(cls['avatar-letters'], {}, [className, cls[size]])}>
      {username.slice(0, 2).toUpperCase()}
    </span>
  );
};

export default AvatarLetters;
