import { StoreStateSchema } from '~/app/providers/StoreProvider';
import { getSignInFormUsername } from '.';

describe('getSignInFormUsername', () => {
  test('get sign-in form username from filled store', () => {
    const expectedResult: string = 'admin';

    const state: DeepPartial<StoreStateSchema> = {
      'sign-in_username': {
        username: expectedResult,
      },
    };

    const actualResult = getSignInFormUsername(state as StoreStateSchema);

    expect(actualResult).toEqual(expectedResult);
  });

  test('get sign-in form username from empty store', () => {
    const actualResult = getSignInFormUsername({} as StoreStateSchema);
    expect(actualResult).toEqual('');
  });
});
