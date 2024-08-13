import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { SignInByUsernameErrorCode } from 'features/SignInByUsername';
import { LS_AUTH_USER } from 'shared/constants/localStorage';
import { User, userActions } from 'entities/User';

type SignInByUsernameData = {
  username: string;
  password: string;
};

const signInByUsername = createAsyncThunk<
  User,
  SignInByUsernameData,
  { rejectValue: SignInByUsernameErrorCode }
>('sign-in/signInByUsername', async (signInData, thunkAPI) => {
  try {
    const response = await axios.post<User>('http://localhost:7000/sign-in/', signInData);
    const createdUser = response.data;

    if (!createdUser) {
      throw new Error();
    }

    thunkAPI.dispatch(userActions.setAuthData(createdUser));
    localStorage.setItem(LS_AUTH_USER, JSON.stringify(createdUser));

    return createdUser;
  } catch (error) {
    return thunkAPI.rejectWithValue(SignInByUsernameErrorCode.INCORRECT_DATA);
  }
});

export default signInByUsername;
