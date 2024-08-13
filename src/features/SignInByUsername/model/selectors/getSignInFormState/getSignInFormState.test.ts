import { StoreStateSchema } from 'app/providers/StoreProvider';
import { SignInSchema } from '../../types/SignInSchema';
import getSignInFormState from '.';

describe('getSignInFormState', () => {
  test('get sign-in form state from filled store', () => {
    const expectedResult: SignInSchema = {
      username: 'admin',
      password: 'admin',
      isLoading: false,
      isFailed: true,
      errorCode: null,
    };

    const state: DeepPartial<StoreStateSchema> = {
      'sign-in_username': expectedResult,
    };

    const actualResult = getSignInFormState(state as StoreStateSchema);

    expect(actualResult).toEqual(expectedResult);
  });

  test('get sign-in form state from empty store', () => {
    const actualResult = getSignInFormState({} as StoreStateSchema);
    expect(actualResult).toEqual({});
  });
});
