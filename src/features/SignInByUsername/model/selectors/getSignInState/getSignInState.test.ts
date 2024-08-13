import { StoreStateSchema } from 'app/providers/StoreProvider';
import { SignInSchema } from '../../types/SignInSchema';
import getSignInState from './getSignInState';

describe('getSignInState', () => {
  test('getSignInState check get part of state', () => {
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

    const actualResult = getSignInState(state as StoreStateSchema);

    expect(actualResult).toEqual(expectedResult);
  });
});
