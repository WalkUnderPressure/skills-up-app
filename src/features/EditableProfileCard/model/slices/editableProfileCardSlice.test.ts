import { MockProfileData } from 'entities/Profile/mock/MockProfileData';
import { Profile } from 'entities/Profile';
import { ProfileErrorCode, ProfileStateSchema } from '../types/EditableProfileCardStateSchema';
import { profileReducer, profileActions } from './editableProfileCardSlice';
import { updateProfileData } from '../services/updateProfileData';

describe('editableProfileCardSlice.test', () => {
  test('setIsReadonly', () => {
    const nextIsReadonly = true;
    const initState: DeepPartial<ProfileStateSchema> = {
      isReadonly: false,
    };

    const result = profileReducer(
      initState as ProfileStateSchema,
      profileActions.setIsReadonly(nextIsReadonly),
    );

    expect(result.isReadonly).toEqual(nextIsReadonly);
  });

  test('resetFormData', () => {
    const initState: DeepPartial<ProfileStateSchema> = {
      form: { ...MockProfileData, username: 'NewUser' },
      data: MockProfileData,
      isReadonly: false,
      validationErrors: { city: [ProfileErrorCode.REQUIRED] },
    };

    const { form, isReadonly, validationErrors } = profileReducer(
      initState as ProfileStateSchema,
      profileActions.resetFormData(),
    );

    expect({ form, isReadonly, validationErrors }).toEqual({
      form: MockProfileData,
      isReadonly: true,
      validationErrors: {},
    });
  });

  test('updateProfileFormData', () => {
    const dataForUpdate: Partial<Profile> = {
      firstName: 'First',
      lastName: 'Last',
    };

    const initState: DeepPartial<ProfileStateSchema> = {
      form: MockProfileData,
      data: MockProfileData,
      validationErrors: {
        age: [ProfileErrorCode.REQUIRED],
      },
    };

    const { form, validationErrors } = profileReducer(
      initState as ProfileStateSchema,
      profileActions.updateProfileFormData(dataForUpdate),
    );

    // Check that form data updated
    expect(form).toEqual({ ...MockProfileData, ...dataForUpdate });

    // Check that validation errors reset
    expect({ validationErrors }).toEqual({ validationErrors: {} });
  });

  // Check extra reducers
  test('updateProfileData.pending', () => {
    const initState: DeepPartial<ProfileStateSchema> = {
      isSaving: false,
      isFailed: true,
      errorCode: ProfileErrorCode.PROFILE_NOT_FOUND,
    };

    const { isSaving, isFailed, errorCode } = profileReducer(
      initState as ProfileStateSchema,
      updateProfileData.pending('', undefined, null),
    );

    expect({ isSaving, isFailed, errorCode }).toEqual({
      isSaving: true,
      isFailed: false,
      errorCode: null,
    });
  });
});
