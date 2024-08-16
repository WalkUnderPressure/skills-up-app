import { AsyncThunkRejectValue, createAppAsyncThunk } from 'app/providers/StoreProvider';
import { SignInByUsernameErrorCode } from 'features/SignInByUsername';
import { LS_AUTH_USER } from 'shared/constants/localStorage';
import { User, userActions } from 'entities/User';

export type SignInByUsernameData = {
  username: string;
  password: string;
};

const signInByUsername = createAppAsyncThunk<
  User,
  SignInByUsernameData,
  AsyncThunkRejectValue<SignInByUsernameErrorCode>
>('sign-in/signInByUsername', async (signInData, thunkAPI) => {
  const {
    dispatch,
    rejectWithValue,
    extra: { api, navigate },
  } = thunkAPI;

  try {
    const response = await api.post<User>('/sign-in/', signInData);
    const createdUser = response.data;

    if (!createdUser) {
      throw new Error();
    }

    dispatch(userActions.setAuthData(createdUser));
    localStorage.setItem(LS_AUTH_USER, JSON.stringify(createdUser));
    navigate('/profile');

    return createdUser;
  } catch (error) {
    return rejectWithValue(SignInByUsernameErrorCode.INCORRECT_DATA);
  }
});

export { signInByUsername };
