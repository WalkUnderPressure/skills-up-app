import axios, { AxiosResponse } from 'axios';

import { TestAsyncThunk } from 'shared/config/tests/TestAsyncThunk';
import { User, userActions } from 'entities/User';
import { SignInErrorCode } from '../../types/SignInSchema';
import { signInByUsername, SignInByUsernameData } from '.';

jest.mock('axios');
const mockedAxios = jest.mocked(axios);

describe('signInByUsername', () => {
  test('successful sign-in', async () => {
    const userData = { id: 1, username: 'admin' };
    const signInData: SignInByUsernameData = { username: 'admin', password: 'admin' };

    mockedAxios.post.mockReturnValue(
      Promise.resolve<Partial<AxiosResponse<User>>>({
        data: userData,
      }),
    );

    const thunk = new TestAsyncThunk(signInByUsername);
    const result = await thunk.callThunk(signInData);

    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(result.payload).toEqual(userData);
  });

  test('failed sign-in', async () => {
    const signInData: SignInByUsernameData = { username: 'admin', password: 'admin' };

    mockedAxios.post.mockReturnValue(
      Promise.resolve<Partial<AxiosResponse<User>>>({
        status: 403,
      }),
    );

    const thunk = new TestAsyncThunk(signInByUsername);
    const result = await thunk.callThunk(signInData);

    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.payload).toEqual(SignInErrorCode.INCORRECT_DATA);
  });
});
