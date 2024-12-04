import { StoreStateSchema } from '~/app/providers/StoreProvider';
import { SignInErrorCode } from '../../types/SignInSchema';
import getSignInFormErrorCode from '.';

describe('getSignInFormErrorCode', () => {
  test('get sign-in form errorCode from filled store', () => {
    const expectedResult: SignInErrorCode = SignInErrorCode.INCORRECT_DATA;

    const state: DeepPartial<StoreStateSchema> = {
      'sign-in_username': {
        errorCode: expectedResult,
      },
    };

    const actualResult = getSignInFormErrorCode(state as StoreStateSchema);

    expect(actualResult).toEqual(expectedResult);
  });

  test('get sign-in form errorCode from empty store', () => {
    const actualResult = getSignInFormErrorCode({} as StoreStateSchema);
    expect(actualResult).toEqual(null);
  });
});
