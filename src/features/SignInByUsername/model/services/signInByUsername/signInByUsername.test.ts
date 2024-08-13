import { Dispatch } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';

import { StoreStateSchema } from 'app/providers/StoreProvider';
import { User, userActions } from 'entities/User';
import { SignInErrorCode } from '../../types/SignInSchema';
import { signInByUsername, SignInByUsernameData } from '.';

jest.mock('axios');
const mockedAxios = jest.mocked(axios);

describe('signInByUsername', () => {
  let dispatch: Dispatch;
  let getState: () => StoreStateSchema;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
  });

  test('successful sign-in', async () => {
    const userData = { id: 1, username: 'admin' };
    const signInData: SignInByUsernameData = { username: 'admin', password: 'admin' };

    mockedAxios.post.mockReturnValue(
      Promise.resolve<Partial<AxiosResponse<User>>>({
        data: userData,
      }),
    );

    const action = signInByUsername(signInData);
    const result = await action(dispatch, getState, undefined);

    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
    expect(dispatch).toHaveBeenCalledTimes(3);
    expect(result.payload).toEqual(userData);
  });

  test('failed sign-in', async () => {
    const signInData: SignInByUsernameData = { username: 'admin', password: 'admin' };

    mockedAxios.post.mockReturnValue(
      Promise.resolve<Partial<AxiosResponse<User>>>({
        status: 403,
      }),
    );

    const action = signInByUsername(signInData);
    const result = await action(dispatch, getState, undefined);

    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(result.payload).toEqual(SignInErrorCode.INCORRECT_DATA);
  });
});
