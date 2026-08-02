import { buildAppAsyncThunk } from '~/app/providers/StoreProvider';
import { Profile, ProfileErrorCode, ProfileValidationErrors } from '~/entities/Profile';
import { isValidForm, validateProfileData } from '../../services/validateProfileData';
import { getProfileFormData } from '../../selectors/getProfileFormData';
import { profilesApiRoutes } from '~/entities/Profile/api/profilesApiRoutes';

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
  const userId = state?.profile?.data?.userId || '';
  const isValid = isValidForm(validationErrors);

  try {
    let profileData = null;

    if (userId && profileFormData && isValid) {
      const response = await api.patch<Profile>(
        profilesApiRoutes.byUserId(userId),
        profileFormData,
      );
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
