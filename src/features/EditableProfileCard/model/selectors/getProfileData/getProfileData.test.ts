import { MockProfileWithAvatar } from '~/entities/Profile/mock/MockProfileData';
import { StoreStateSchema } from '~/app/providers/StoreProvider';
import { Profile } from '~/entities/Profile';
import { getProfileData } from '.';

describe('getProfileData', () => {
  test('get profile data from filled store', () => {
    const expectedResult: Profile = MockProfileWithAvatar;

    const state: DeepPartial<StoreStateSchema> = {
      profile: {
        data: expectedResult,
      },
    };

    const actualResult = getProfileData(state as StoreStateSchema);

    expect(actualResult).toEqual(expectedResult);
  });

  test('get profile data from empty store', () => {
    const actualResult = getProfileData({} as StoreStateSchema);
    expect(actualResult).toEqual(null);
  });
});
