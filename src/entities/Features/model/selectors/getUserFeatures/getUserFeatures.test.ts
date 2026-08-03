import { FeaturesStateSchema } from '../../../model/types/FeaturesStateSchema';
import { StoreStateSchema } from '~/app/providers/StoreProvider';
import { DEFAULT_FEATURES } from '../../../constants';
import { getUserFeatures } from '.';

describe('getUserFeatures', () => {
  test('get user features from filled store', () => {
    const features: FeaturesStateSchema = {
      notifications: false,
      post_rating: true,
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

    const actualResult = getUserFeatures(state as StoreStateSchema);

    expect(actualResult).toEqual(features);
  });

  test('get default features when user is missing', () => {
    const state: DeepPartial<StoreStateSchema> = {};

    const actualResult = getUserFeatures(state as StoreStateSchema);

    expect(actualResult).toEqual(DEFAULT_FEATURES);
  });

  test('get default features when authData is missing', () => {
    const state: DeepPartial<StoreStateSchema> = {
      user: {},
    };

    const actualResult = getUserFeatures(state as StoreStateSchema);

    expect(actualResult).toEqual(DEFAULT_FEATURES);
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

    const actualResult = getUserFeatures(state as StoreStateSchema);

    expect(actualResult).toEqual(DEFAULT_FEATURES);
  });
});
