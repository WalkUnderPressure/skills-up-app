import { MockProfileData } from 'entities/Profile/mock/MockProfileData';
import { Profile } from 'entities/Profile';
import { ProfileErrorCode } from 'entities/Profile';
import { EditableProfileStateSchema } from '../types/EditableProfileCardStateSchema';
import { profileReducer, profileActions } from './editableProfileCardSlice';
import { updateProfileData } from '../services/updateProfileData';

describe('editableProfileCardSlice.test', () => {
  test('setIsReadonly', () => {
    const nextIsReadonly = true;
    const initState: DeepPartial<EditableProfileStateSchema> = {
      isReadonly: false,
    };

    const result = profileReducer(
      initState as EditableProfileStateSchema,
      profileActions.setIsReadonly(nextIsReadonly),
    );

    expect(result.isReadonly).toEqual(nextIsReadonly);
  });

  test('resetFormData', () => {
    const initState: DeepPartial<EditableProfileStateSchema> = {
      form: { ...MockProfileData, username: 'NewUser' },
      data: MockProfileData,
      isReadonly: false,
      validationErrors: { city: [ProfileErrorCode.REQUIRED] },
    };

    const { form, isReadonly, validationErrors } = profileReducer(
      initState as EditableProfileStateSchema,
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

    const initState: DeepPartial<EditableProfileStateSchema> = {
      form: MockProfileData,
      data: MockProfileData,
      validationErrors: {
        age: [ProfileErrorCode.REQUIRED],
      },
    };

    const { form, validationErrors } = profileReducer(
      initState as EditableProfileStateSchema,
      profileActions.updateProfileFormData(dataForUpdate),
    );

    // Check that form data updated
    expect(form).toEqual({ ...MockProfileData, ...dataForUpdate });

    // Check that validation errors reset
    expect({ validationErrors }).toEqual({ validationErrors: {} });
  });

  // Check extra reducers
  test('updateProfileData.pending', () => {
    const initState: DeepPartial<EditableProfileStateSchema> = {
      isSaving: false,
      isFailed: true,
      errorCode: ProfileErrorCode.PROFILE_NOT_FOUND,
    };

    const { isSaving, isFailed, errorCode } = profileReducer(
      initState as EditableProfileStateSchema,
      updateProfileData.pending('', undefined, null),
    );

    expect({ isSaving, isFailed, errorCode }).toEqual({
      isSaving: true,
      isFailed: false,
      errorCode: null,
    });
  });
});
