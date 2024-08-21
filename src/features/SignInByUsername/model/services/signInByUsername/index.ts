import { AsyncThunkRejectValue, createAppAsyncThunk } from 'app/providers/StoreProvider';
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
    const createdUser = response.data;

    if (!createdUser) {
      throw new Error();
    }

    dispatch(userActions.setAuthData(createdUser));
    navigate('/profile');

    return createdUser;
  } catch (error) {
    return rejectWithValue(SignInErrorCode.INCORRECT_DATA);
  }
});

export { signInByUsername };
