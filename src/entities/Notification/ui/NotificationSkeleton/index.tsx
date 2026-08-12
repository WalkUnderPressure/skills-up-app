import { ToggleFeatures } from '~/entities/FeatureFlags';
import { Skeleton as SkeletonDeprecated } from '~/shared/ui/deprecated/Skeleton';
import { Skeleton } from '~/shared/ui/redesigned/Skeleton';

const NotificationSkeleton = () => {
  return (
    <ToggleFeatures
      feature="redesign"
      on={<Skeleton width="100%" height="56px" />}
      off={<SkeletonDeprecated width="100%" height="56px" />}
    />
  );
};

export default NotificationSkeleton;
