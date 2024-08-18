import { AsyncThunkRejectValue, createAppAsyncThunk } from 'app/providers/StoreProvider';
import getProfileFormData from 'entities/Profile/model/selectors/getProfileFormData';
import { Profile, ProfileErrorCode } from '../../types/ProfileStateSchema';

const updateProfileData = createAppAsyncThunk<
  Profile,
  void,
  AsyncThunkRejectValue<ProfileErrorCode>
>('profile/updateProfileData', async (_, thunkAPI) => {
  const {
    getState,
    rejectWithValue,
    extra: { api },
  } = thunkAPI;

  const state = getState();

  try {
    const profileFormData = getProfileFormData(state);
    const postId = state?.profile?.data?.id || '';

    let profileData = null;

    if (postId && profileFormData) {
      const response = await api.patch<Profile>(`/profiles/${postId}`, profileFormData);
      profileData = response.data;
    }

    if (!profileData) {
      throw new Error();
    }

    return profileData;
  } catch (error) {
    return rejectWithValue(ProfileErrorCode.CANT_UPDATE_PROFILE);
  }
});

export { updateProfileData };
