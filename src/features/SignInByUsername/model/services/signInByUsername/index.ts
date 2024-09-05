import { AsyncThunkRejectValue, createAppAsyncThunk } from 'app/providers/StoreProvider';
import { SignInErrorCode } from '../../types/SignInSchema';
import { User, userActions } from 'entities/User';

export type SignInByUsernameData = {
  username: string;
  password: string;
};

const signInByUsername = createAppAsyncThunk<
  User,
  SignInByUsernameData,
  AsyncThunkRejectValue<SignInErrorCode>
>('sign-in/signInByUsername', async (signInData, thunkAPI) => {
  const {
    dispatch,
    rejectWithValue,
    extra: { api },
  } = thunkAPI;

  try {
    const response = await api.post<User>('/auth/sign-in/', signInData);
    const authorizedUser = response.data;

    if (!authorizedUser) {
      throw new Error();
    }

    dispatch(userActions.setAuthData(authorizedUser));

    return authorizedUser;
  } catch (error) {
    return rejectWithValue(SignInErrorCode.INCORRECT_DATA);
  }
});

export { signInByUsername };
