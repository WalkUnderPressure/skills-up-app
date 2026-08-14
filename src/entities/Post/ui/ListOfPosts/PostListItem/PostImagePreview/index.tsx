import { Skeleton as SkeletonRedesign, SkeletonThemes } from '~/shared/ui/deprecated/Skeleton';
import { ToggleFeatures, useToggleFeatures } from '~/entities/FeatureFlags';
import { Skeleton } from '~/shared/ui/redesigned/Skeleton';
import { AppImage } from '~/shared/ui/redesigned/AppImage';
import classNames from '~/shared/lib/classNames';

import PostFallback from '~/shared/assets/icons/post-fallback.svg';
import cls from './PostImagePreview.module.scss';

type PostImagePreviewProps = {
  src: string;
  alt: string;
  className?: string;
};

const PostImagePreview = (props: PostImagePreviewProps) => {
  const { src, alt, className } = props;

  const Fallback = (
    <ToggleFeatures
      feature="redesign"
      on={<Skeleton withSize={false} variant="rect" className={className} />}
      off={<SkeletonRedesign withSize={false} theme={SkeletonThemes.RECT} className={className} />}
    />
  );

  const errorFallbackCls = useToggleFeatures({
    feature: 'redesign',
    on: () => cls['error-fallback'],
    off: () => '',
  });

  const ErrorFallback = <PostFallback className={classNames(errorFallbackCls, {}, [className])} />;

  return (
    <AppImage
      Fallback={Fallback}
      ErrorFallback={ErrorFallback}
      src={src}
      alt={alt}
      className={className}
    />
  );
};

export default PostImagePreview;
