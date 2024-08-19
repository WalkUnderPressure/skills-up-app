import { AsyncThunkRejectValue, createAppAsyncThunk } from 'app/providers/StoreProvider';
import { Profile, ProfileErrorCode, ValidationErrors } from '../../types/ProfileStateSchema';
import getProfileValidationErrors from '../../selectors/getProfileValidationErrors';
import getProfileFormData from '../../selectors/getProfileFormData';
import { isValidForm } from 'entities/Profile/model/services/validateProfileData';

type ErrorDataType = {
  validation?: ValidationErrors;
  error?: ProfileErrorCode;
};

const updateProfileData = createAppAsyncThunk<Profile, void, AsyncThunkRejectValue<ErrorDataType>>(
  'profile/updateProfileData',
  async (_, thunkAPI) => {
    const {
      getState,
      rejectWithValue,
      extra: { api },
    } = thunkAPI;

    const state = getState();
    const profileFormData = getProfileFormData(state);
    const validationErrors = getProfileValidationErrors(state);
    const postId = state?.profile?.data?.id || '';
    const isValid = isValidForm(validationErrors);

    try {
      let profileData = null;

      if (postId && profileFormData && isValid) {
        const response = await api.patch<Profile>(`/profiles/${postId}`, profileFormData);
        profileData = response.data;
      }

      if (!profileData) {
        throw new Error();
      }

      return profileData;
    } catch (error) {
      let errorData: ErrorDataType = { error: ProfileErrorCode.CANT_UPDATE_PROFILE };

      if (!isValid) {
        errorData = { validation: validationErrors };
      }

      return rejectWithValue(errorData);
    }
  },
);

export { updateProfileData };
