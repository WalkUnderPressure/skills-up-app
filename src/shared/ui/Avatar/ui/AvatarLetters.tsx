import classNames from '~/shared/lib/classNames';
import { AvatarSize } from './Avatar';
import cls from './Avatar.module.scss';

type AvatarProps = {
  size?: AvatarSize;
  username?: string;
} & PropsWithClassName;

const AvatarLetters = (props: AvatarProps) => {
  const { username = 'U', className, size = AvatarSize.M } = props;

  return (
    <span className={classNames(cls['avatar-letters'], {}, [className, cls.avatar, cls[size]])}>
      {username.slice(0, 2).toUpperCase()}
    </span>
  );
};

export default AvatarLetters;
