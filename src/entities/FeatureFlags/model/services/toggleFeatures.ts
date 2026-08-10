import { useFeatureFlags } from '~/entities/FeatureFlags/model/selectors/getUserFeatures';
import { FeatureFlags } from '../types/FeatureFlagsSchema';

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
