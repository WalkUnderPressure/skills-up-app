import { ReactNode } from 'react';

import { useFeatureFlags } from '../model/selectors/getUserFeatures';
import { FeatureFlags } from '../model/types/FeatureFlagsSchema';

interface ToggleFeaturesParams {
  feature: keyof FeatureFlags;
  on: ReactNode;
  off: ReactNode;
}

function ToggleFeatures(props: ToggleFeaturesParams) {
  const { feature, on, off } = props;

  const featureFlags = useFeatureFlags();

  const isFeatureEnabled = featureFlags[feature];

  return isFeatureEnabled ? on : off;
}

export default ToggleFeatures;
