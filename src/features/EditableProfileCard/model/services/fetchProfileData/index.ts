import { buildAppAsyncThunk } from '~/app/providers/StoreProvider';
import { Profile, ProfileErrorCode } from '~/entities/Profile';
import { profilesApiRoutes } from '~/entities/Profile/api/profilesApiRoutes';

export const [fetchProfileData, useFetchProfileData] = buildAppAsyncThunk<
  Profile,
  string | undefined,
  ProfileErrorCode
>('profile/fetchProfileData', async (userId, thunkAPI) => {
  const {
    rejectWithValue,
    extra: { api },
  } = thunkAPI;

  try {
    let userProfileData = null;

    if (userId) {
      const response = await api.get<Profile>(profilesApiRoutes.byUserId(userId));
      userProfileData = response.data;
    }

    if (!userProfileData) {
      throw new Error();
    }

    return userProfileData;
  } catch (error) {
    return rejectWithValue(ProfileErrorCode.PROFILE_NOT_FOUND);
  }
});
