import { StoreStateSchema } from 'app/providers/StoreProvider';
import { User } from '../../types/UserStateSchema';
import getUserAuthData from './getUserAuthData';

describe('getUserAuthData', () => {
  test('getUserAuthData check get part of state', () => {
    const expectedResult: User = { id: 1, username: 'moderator' };

    const state: DeepPartial<StoreStateSchema> = {
      user: {
        authData: expectedResult,
      },
    };

    const actualResult = getUserAuthData(state as StoreStateSchema);

    expect(actualResult).toEqual(expectedResult);
  });
});
