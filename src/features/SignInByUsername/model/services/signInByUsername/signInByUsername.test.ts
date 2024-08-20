import { AxiosResponse } from 'axios';

import { TestAsyncThunk } from 'shared/config/tests/TestAsyncThunk';
import { User, userActions } from 'entities/User';
import { SignInErrorCode } from '../../types/SignInSchema';
import { signInByUsername, SignInByUsernameData } from '.';

describe('signInByUsername', () => {
  test('successful sign-in', async () => {
    const userData = { id: '1', username: 'admin' };
    const signInData: SignInByUsernameData = { username: 'admin', password: 'admin' };
    const thunk = new TestAsyncThunk(signInByUsername);

    thunk.api.post.mockReturnValue(
      Promise.resolve<Partial<AxiosResponse<User>>>({
        data: userData,
      }),
    );

    const result = await thunk.callThunk(signInData);

    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(result.payload).toEqual(userData);
  });

  test('failed sign-in', async () => {
    const signInData: SignInByUsernameData = { username: 'admin', password: 'admin' };
    const thunk = new TestAsyncThunk(signInByUsername);

    thunk.api.post.mockReturnValue(
      Promise.resolve<Partial<AxiosResponse<User>>>({
        status: 403,
      }),
    );

    const result = await thunk.callThunk(signInData);

    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.payload).toEqual(SignInErrorCode.INCORRECT_DATA);
  });
});
