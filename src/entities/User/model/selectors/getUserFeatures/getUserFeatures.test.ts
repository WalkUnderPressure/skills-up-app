import { FeatureFlags } from '../../types/FeatureFlagsSchema';
import { StoreStateSchema } from '~/app/providers/StoreProvider';
import { DEFAULT_FEATURE_FLAGS } from '../../../constants/feature-flags';
import { getFeatureFlags } from '.';

describe('getUserFeatures', () => {
  test('get user features from filled store', () => {
    const features: FeatureFlags = {
      notifications: false,
      post_rating: true,
      redesign: false,
    };

    const state: DeepPartial<StoreStateSchema> = {
      user: {
        authData: {
          id: '5615',
          username: 'user',
          features,
        },
      },
    };

    const actualResult = getFeatureFlags(state as StoreStateSchema);

    expect(actualResult).toEqual(features);
  });

  test('get default features when user is missing', () => {
    const state: DeepPartial<StoreStateSchema> = {};

    const actualResult = getFeatureFlags(state as StoreStateSchema);

    expect(actualResult).toEqual(DEFAULT_FEATURE_FLAGS);
  });

  test('get default features when authData is missing', () => {
    const state: DeepPartial<StoreStateSchema> = {
      user: {},
    };

    const actualResult = getFeatureFlags(state as StoreStateSchema);

    expect(actualResult).toEqual(DEFAULT_FEATURE_FLAGS);
  });

  test('get default features when features is missing', () => {
    const state: DeepPartial<StoreStateSchema> = {
      user: {
        authData: {
          id: '5615',
          username: 'user',
        },
      },
    };

    const actualResult = getFeatureFlags(state as StoreStateSchema);

    expect(actualResult).toEqual(DEFAULT_FEATURE_FLAGS);
  });
});
