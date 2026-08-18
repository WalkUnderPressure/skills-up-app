import { useFeatureFlags } from '../selectors/getUserFeatures';
import { FeatureFlags } from '../../../User/model/types/FeatureFlagsSchema';

interface ToggleFeaturesParams<T> {
  feature: keyof FeatureFlags;
  on: () => T;
  off: () => T;
}

function useToggleFeatures<T>(params: ToggleFeaturesParams<T>): T {
  const { off, on, feature } = params;

  const featureFlags = useFeatureFlags();

  const isFeatureEnabled = featureFlags[feature];

  if (isFeatureEnabled) {
    return on();
  }

  return off();
}

export { useToggleFeatures };
