import { StoreStateSchema } from 'app/providers/StoreProvider';
import { ProfileErrorCode } from 'entities/Profile';
import getProfileErrorData from '.';

describe('getProfileErrorData', () => {
  test('get profile error data from filled store', () => {
    const expectedResult: ErrorData<ProfileErrorCode> = {
      isFailed: true,
      errorCode: ProfileErrorCode.PROFILE_NOT_FOUND,
    };

    const state: DeepPartial<StoreStateSchema> = {
      profile: {
        isFailed: expectedResult.isFailed,
        errorCode: expectedResult.errorCode,
      },
    };

    const actualResult = getProfileErrorData(state as StoreStateSchema);

    expect(actualResult).toEqual(expectedResult);
  });

  test('get profile error data from empty store', () => {
    const actualResult = getProfileErrorData({} as StoreStateSchema);
    expect(actualResult).toEqual({
      isFailed: false,
      errorCode: null,
    });
  });
});
