import { StoreStateSchema } from 'app/providers/StoreProvider';
import { User } from '../../types/UserStateSchema';
import getUserAuthData from '.';

describe('getUserAuthData', () => {
  test('get user auth data from filled store', () => {
    const expectedResult: User = { id: '1', username: 'moderator' };

    const state: DeepPartial<StoreStateSchema> = {
      user: {
        authData: expectedResult,
      },
    };

    const actualResult = getUserAuthData(state as StoreStateSchema);

    expect(actualResult).toEqual(expectedResult);
  });

  test('get user auth data from empty store', () => {
    const actualResult = getUserAuthData({} as StoreStateSchema);
    expect(actualResult).toEqual(null);
  });
});
