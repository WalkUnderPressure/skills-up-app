import { Skeleton, SkeletonThemes } from '~/shared/ui/Skeleton';
import classNames from '~/shared/lib/classNames';
import { AppImage } from '~/shared/ui/AppImage';
import cls from './Avatar.module.scss';

import AvatarFallback from '~/shared/assets/icons/avatar-fallback.svg';

export enum AvatarSize {
  XS = 'size-xs',
  S = 'size-s',
  M = 'size-m',
  L = 'size-l',
  XL = 'size-xl',
}

type AvatarProps = {
  size?: AvatarSize;
  src: string;
  alt?: string;
  isInverted?: boolean;
} & PropsWithClassName;

const Avatar = (props: AvatarProps) => {
  const { src, alt, className, size = AvatarSize.M, isInverted = false } = props;

  const avatarWithSizeClass = classNames(cls.avatar, {}, [cls[size]]);

  const Fallback = (
    <Skeleton withSize={false} theme={SkeletonThemes.CIRCLE} className={avatarWithSizeClass} />
  );

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
