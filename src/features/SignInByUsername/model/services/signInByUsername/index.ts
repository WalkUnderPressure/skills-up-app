import { buildAppAsyncThunk } from '~/app/providers/StoreProvider';
import { SignInErrorCode } from '../../types/SignInSchema';
import { User, userActions } from '~/entities/User';
import { authApiRoutes } from '~/features/SignInByUsername/api/authApiRoutes';

export type SignInByUsernameData = {
  username: string;
  password: string;
};

export const [signInByUsername, useSignInByUsername] = buildAppAsyncThunk<
  User,
  SignInByUsernameData,
  SignInErrorCode
>('sign-in/signInByUsername', async (signInData, thunkAPI) => {
  const {
    dispatch,
    rejectWithValue,
    extra: { api },
  } = thunkAPI;

  try {
    const response = await api.post<User>(authApiRoutes.signIn, signInData);
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
