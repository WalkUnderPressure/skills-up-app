import { AsyncThunkRejectValue, createAppAsyncThunk } from 'app/providers/StoreProvider';
import { AppRoutes, RouterPaths } from 'shared/config/routerConfig';
import { User, userActions } from 'entities/User';
import { SignInErrorCode } from '../../types/SignInSchema';

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
    extra: { api, navigate },
  } = thunkAPI;

  try {
    const response = await api.post<User>('/sign-in/', signInData);
    const authorizedUser = response.data;

    if (!authorizedUser) {
      throw new Error();
    }

    dispatch(userActions.setAuthData(authorizedUser));
    navigate(`${RouterPaths[AppRoutes.PROFILE]}${authorizedUser.id}`);

    return authorizedUser;
  } catch (error) {
    return rejectWithValue(SignInErrorCode.INCORRECT_DATA);
  }
});

export { signInByUsername };
