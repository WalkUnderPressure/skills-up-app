import { AsyncThunkRejectValue, createAppAsyncThunk } from 'app/providers/StoreProvider';
import { Profile } from 'entities/Profile';
import { ValidationErrors, ProfileErrorCode } from '../../types/EditableProfileCardStateSchema';
import { isValidForm, validateProfileData } from '../../services/validateProfileData';
import getProfileFormData from '../../selectors/getProfileFormData';

type SubmitErrorData = {
  validation?: ValidationErrors;
  error?: ProfileErrorCode;
};

const updateProfileData = createAppAsyncThunk<
  Profile,
  void,
  AsyncThunkRejectValue<SubmitErrorData>
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

export { updateProfileData, SubmitErrorData };
