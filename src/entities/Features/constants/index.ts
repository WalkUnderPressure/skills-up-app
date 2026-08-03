import { FeaturesStateSchema } from '../model/types/FeaturesStateSchema';

const DEFAULT_FEATURES: FeaturesStateSchema = Object.freeze({
  notifications: true,
  post_rating: true,
});

export { DEFAULT_FEATURES };
