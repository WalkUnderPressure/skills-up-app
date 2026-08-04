import { FeatureFlags } from '../model/types/FeatureFlagsSchema';

const DEFAULT_FEATURE_FLAGS: FeatureFlags = Object.freeze({
  notifications: true,
  post_rating: true,
});

export { DEFAULT_FEATURE_FLAGS };
