import { ImgHTMLAttributes, memo, ReactElement, useLayoutEffect, useState } from 'react';

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  Fallback?: ReactElement;
  ErrorFallback?: Nullable<ReactElement>;
}

/**
 * Use new UI elements from 'shared/ui/redesigned' folder
 * @deprecated
 */
const AppImage = memo((props: AppImageProps) => {
  const { className, src, alt = 'Image', ErrorFallback, Fallback, ...otherProps } = props;

  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useLayoutEffect(() => {
    const img = new Image();

    img.src = src ?? '';

    img.onload = () => {
      setIsLoading(false);
    };

    img.onerror = () => {
      setIsLoading(false);
      setHasError(true);
    };
  }, [src]);

  if (isLoading && Fallback) {
    return Fallback;
  }

  if (hasError && ErrorFallback !== undefined) {
    return ErrorFallback;
  }

  return <img className={className} src={src} alt={alt} {...otherProps} />;
});

export default AppImage;
