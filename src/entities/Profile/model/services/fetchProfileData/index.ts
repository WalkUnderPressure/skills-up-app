import { AsyncThunkRejectValue, createAppAsyncThunk } from 'app/providers/StoreProvider';
import { Profile, ProfileErrorCode } from '../../types/ProfileStateSchema';

const fetchProfileData = createAppAsyncThunk<
  Profile,
  void,
  AsyncThunkRejectValue<ProfileErrorCode>
>('profile/fetchProfileData', async (_, thunkAPI) => {
  const {
    getState,
    rejectWithValue,
    extra: { api },
  } = thunkAPI;

  const state = getState();

  try {
    const userId = state?.user?.authData?.id || '';
    let userProfileData = null;

    if (userId) {
      const response = await api.get<Array<Profile>>(`/profiles/?user_id=${userId}`);
      userProfileData = response.data.at(0);
    }

    if (!userProfileData) {
      throw new Error();
    }

    return userProfileData;
  } catch (error) {
    return rejectWithValue(ProfileErrorCode.PROFILE_NOT_FOUND);
  }
});

export { fetchProfileData };
