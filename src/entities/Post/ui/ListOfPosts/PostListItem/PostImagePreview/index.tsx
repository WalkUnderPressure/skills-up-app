import { Skeleton, SkeletonThemes } from '~/shared/ui/Skeleton';
import { AppImage } from '~/shared/ui/AppImage';
import PostFallback from '~/shared/assets/icons/post-fallback.svg';

type PostImagePreviewProps = {
  src: string;
  alt: string;
  className?: string;
};

const PostImagePreview = (props: PostImagePreviewProps) => {
  const { src, alt, className } = props;

  const Fallback = <Skeleton withSize={false} theme={SkeletonThemes.RECT} className={className} />;

  const ErrorFallback = <PostFallback className={className} />;

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
