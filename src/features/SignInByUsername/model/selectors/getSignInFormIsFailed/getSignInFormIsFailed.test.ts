import { StoreStateSchema } from '~/app/providers/StoreProvider';
import getSignInFormIsFailed from '.';

describe('getSignInFormIsFailed', () => {
  test('get sign-in form isFailed for positive default value', () => {
    const expectedResult: boolean = true;

    const state: DeepPartial<StoreStateSchema> = {
      'sign-in_username': {
        isFailed: expectedResult,
      },
    };

    const actualResult = getSignInFormIsFailed(state as StoreStateSchema);

    expect(actualResult).toEqual(expectedResult);
  });

  test('get sign-in form isFailed for negative default value', () => {
    const expectedResult: boolean = false;

    const state: DeepPartial<StoreStateSchema> = {
      'sign-in_username': {
        isFailed: expectedResult,
      },
    };

    const actualResult = getSignInFormIsFailed(state as StoreStateSchema);

    expect(actualResult).toEqual(expectedResult);
  });

  test('get sign-in form isFailed from empty store', () => {
    const actualResult = getSignInFormIsFailed({} as StoreStateSchema);
    expect(actualResult).toEqual(false);
  });
});
