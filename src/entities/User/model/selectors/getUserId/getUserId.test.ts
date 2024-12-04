import { StoreStateSchema } from '~/app/providers/StoreProvider';
import getUserId from '.';

describe('getUserId', () => {
  test('get user id from filled store', () => {
    const userId = '5615';

    const expectedResult = userId;

    const state: DeepPartial<StoreStateSchema> = {
      user: {
        authData: { id: userId, username: 'user' },
      },
    };

    const actualResult = getUserId(state as StoreStateSchema);

    expect(actualResult).toEqual(expectedResult);
  });

  test('get user id from empty store', () => {
    const actualResult = getUserId({} as StoreStateSchema);
    expect(actualResult).toEqual('');
  });
});
