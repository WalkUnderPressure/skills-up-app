import { signInReducer, signInActions } from './signInSlice';
import { SignInSchema } from '../types/SignInSchema';

describe('signInSlice', () => {
  test('change username', () => {
    const usernameToSet = 'moderator';

    const expectedResult: DeepPartial<SignInSchema> = { username: usernameToSet };

    const initState: DeepPartial<SignInSchema> = {
      username: 'admin',
    };

    const actualResult = signInReducer(
      initState as SignInSchema,
      signInActions.updateUsername(usernameToSet),
    );

    expect(actualResult).toEqual(expectedResult);
  });

  test('change password', () => {
    const passwordToSet = 'super-password';

    const expectedResult: DeepPartial<SignInSchema> = { password: passwordToSet };

    const initState: DeepPartial<SignInSchema> = {
      password: 'simple-password',
    };

    const actualResult = signInReducer(
      initState as SignInSchema,
      signInActions.updatePassword(passwordToSet),
    );

    expect(actualResult).toEqual(expectedResult);
  });
});
