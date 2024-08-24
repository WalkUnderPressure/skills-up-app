import { AsyncThunkRejectValue, createAppAsyncThunk } from 'app/providers/StoreProvider';
import { Profile, ProfileErrorCode } from '../../types/ProfileStateSchema';

const fetchProfileData = createAppAsyncThunk<
  Profile,
  string | undefined,
  AsyncThunkRejectValue<ProfileErrorCode>
>('profile/fetchProfileData', async (userId, thunkAPI) => {
  const {
    rejectWithValue,
    extra: { api },
  } = thunkAPI;

  try {
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
