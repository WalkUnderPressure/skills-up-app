import { buildAppAsyncThunk } from '~/app/providers/StoreProvider';
import { Profile, ProfileErrorCode, ProfileValidationErrors } from '~/entities/Profile';
import { isValidForm, validateProfileData } from '../../services/validateProfileData';
import { getProfileFormData } from '../../selectors/getProfileFormData';

export type SubmitErrorData = {
  validation?: ProfileValidationErrors;
  error?: ProfileErrorCode;
};

export const [updateProfileData, useUpdateProfileData] = buildAppAsyncThunk<
  Profile,
  void,
  SubmitErrorData
>('profile/updateProfileData', async (_, thunkAPI) => {
  const {
    getState,
    rejectWithValue,
    extra: { api },
  } = thunkAPI;

  const state = getState();
  const profileFormData = getProfileFormData(state);
  const validationErrors = validateProfileData(profileFormData ?? {});
  const profileId = state?.profile?.data?.id || '';
  const isValid = isValidForm(validationErrors);

  try {
    let profileData = null;

    if (profileId && profileFormData && isValid) {
      const response = await api.patch<Profile>(`/profiles/${profileId}`, profileFormData);
      profileData = response.data;
    }

    if (!profileData) {
      throw new Error();
    }

    return profileData;
  } catch (error) {
    let errorData: SubmitErrorData = { error: ProfileErrorCode.CANT_UPDATE_PROFILE };

    if (!isValid) {
      errorData = { validation: validationErrors };
    }

    return rejectWithValue(errorData);
  }
});
