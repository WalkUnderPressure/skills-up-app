import { DEFAULT_FEATURE_FLAGS } from '../../constants/feature-flags';
import { buildAppAsyncThunk } from '~/app/providers/StoreProvider';
import { usersApiRoutes } from '../../api/usersApiRoutes';
import { FeatureFlags } from '../types/FeatureFlagsSchema';
import UserErrorCode from '../consts/UserErrorCode';
import { User } from '../types/UserStateSchema';
import { userActions } from '../slices/userSlice';

export type SubmitErrorData = {
  error?: UserErrorCode;
};

export const [updateUserFeatures, useUpdateUserFeatures] = buildAppAsyncThunk<
  User,
  Partial<FeatureFlags>,
  SubmitErrorData
>('user/updateUserFeatures', async (newFeatureFlags, thunkAPI) => {
  const {
    getState,
    rejectWithValue,
    dispatch,
    extra: { api },
  } = thunkAPI;

  const state = getState();
  const authData = state?.user.authData;
  const userId = authData?.id || '';

  try {
    let userData: Nullable<User> = null;

    if (userId && Object.keys(newFeatureFlags).length) {
      const response = await api.patch<User, { data: User }, Pick<User, 'features'>>(
        usersApiRoutes.byId(userId),
        {
          features: {
            ...DEFAULT_FEATURE_FLAGS,
            ...newFeatureFlags,
          },
        },
      );

      userData = response.data;

      dispatch(
        userActions.setAuthData({
          ...authData,
          ...userData,
        }),
      );
    }

    if (!userData) {
      throw new Error();
    }

    return userData;
  } catch (error) {
    const errorData: SubmitErrorData = { error: UserErrorCode.CANT_UPDATE_USER };

    return rejectWithValue(errorData);
  }
});
