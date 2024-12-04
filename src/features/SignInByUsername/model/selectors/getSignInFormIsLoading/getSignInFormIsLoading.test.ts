import { StoreStateSchema } from '~/app/providers/StoreProvider';
import getSignInFormIsLoading from '.';

describe('getSignInFormIsLoading', () => {
  test('get sign-in form isLoading for positive default value', () => {
    const expectedResult: boolean = true;

    const state: DeepPartial<StoreStateSchema> = {
      'sign-in_username': {
        isLoading: expectedResult,
      },
    };

    const actualResult = getSignInFormIsLoading(state as StoreStateSchema);

    expect(actualResult).toEqual(expectedResult);
  });

  test('get sign-in form isLoading for negative default value', () => {
    const expectedResult: boolean = false;

    const state: DeepPartial<StoreStateSchema> = {
      'sign-in_username': {
        isLoading: expectedResult,
      },
    };

    const actualResult = getSignInFormIsLoading(state as StoreStateSchema);

    expect(actualResult).toEqual(expectedResult);
  });

  test('get sign-in form isLoading from empty store', () => {
    const actualResult = getSignInFormIsLoading({} as StoreStateSchema);
    expect(actualResult).toEqual(false);
  });
});
