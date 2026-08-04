import { useFeatureFlags } from '~/entities/FeatureFlags/model/selectors/getUserFeatures';
import { FeatureFlags } from '../types/FeatureFlagsSchema';

interface ToggleFeaturesParams<T> {
  name: keyof FeatureFlags;
  on: () => T;
  off: () => T;
}

function useToggleFeatures<T>(params: ToggleFeaturesParams<T>): T {
  const { off, on, name } = params;

  const featureFlags = useFeatureFlags();

  const isFeatureEnabled = featureFlags[name];

  if (isFeatureEnabled) {
    return on();
  }

  return off();
}

export { useToggleFeatures };
