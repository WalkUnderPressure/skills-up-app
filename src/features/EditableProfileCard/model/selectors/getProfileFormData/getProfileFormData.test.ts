import { MockProfileWithAvatar } from '~/entities/Profile/mock/MockProfileData';
import { StoreStateSchema } from '~/app/providers/StoreProvider';
import { Profile } from '~/entities/Profile';
import { getProfileFormData } from '.';

describe('getProfileFormData', () => {
  test('get profile form data from filled store', () => {
    const expectedResult: Profile = MockProfileWithAvatar;

    const state: DeepPartial<StoreStateSchema> = {
      profile: {
        form: expectedResult,
      },
    };

    const actualResult = getProfileFormData(state as StoreStateSchema);

    expect(actualResult).toEqual(expectedResult);
  });

  test('get profile form data from empty store', () => {
    const actualResult = getProfileFormData({} as StoreStateSchema);
    expect(actualResult).toEqual(null);
  });
});
