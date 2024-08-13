import { StoreStateSchema } from 'app/providers/StoreProvider';
import getSignInFormPassword from '.';

describe('getSignInFormPassword', () => {
  test('get sign-in form password from filled store', () => {
    const expectedResult: string = 'admin';

    const state: DeepPartial<StoreStateSchema> = {
      'sign-in_username': {
        password: expectedResult,
      },
    };

    const actualResult = getSignInFormPassword(state as StoreStateSchema);

    expect(actualResult).toEqual(expectedResult);
  });

  test('get sign-in form password from empty store', () => {
    const actualResult = getSignInFormPassword({} as StoreStateSchema);
    expect(actualResult).toEqual('');
  });
});
