import { Skeleton } from '~/shared/ui/redesigned/Skeleton';
import { AppImage } from '~/shared/ui/redesigned/AppImage';
import classNames from '~/shared/lib/classNames';
import cls from './Avatar.module.scss';

import AvatarFallback from '~/shared/assets/icons/avatar-fallback.svg';

export type AvatarSize = 'xs' | 's' | 'm' | 'l' | 'xl';

type AvatarProps = {
  size?: AvatarSize;
  src: string;
  alt?: string;
  isInverted?: boolean;
} & PropsWithClassName;

const Avatar = (props: AvatarProps) => {
  const { src, alt, className, size = 'm', isInverted = false } = props;

  const avatarWithSizeClass = classNames(cls.avatar, {}, [cls[size]]);

  const Fallback = <Skeleton withSize={false} variant="circle" className={avatarWithSizeClass} />;

  const ErrorFallback = (
    <AvatarFallback
      className={classNames(
        avatarWithSizeClass,
        {
          [cls['avatar-inverted']]: isInverted,
        },
        [cls['avatar-fallback']],
      )}
    />
  );

  return (
    <AppImage
      Fallback={Fallback}
      ErrorFallback={ErrorFallback}
      src={src}
      alt={alt}
      className={classNames(avatarWithSizeClass, {}, [className])}
    />
  );
};

export default Avatar;
