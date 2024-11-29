import { Profile, ProfileKeys } from 'entities/Profile';

enum ProfileErrorCode {
  REQUIRED = 'REQUIRED',
  PROFILE_NOT_FOUND = 'PROFILE_NOT_FOUND',
  CANT_UPDATE_PROFILE = 'CANT_UPDATE_PROFILE',
}

type ValidationErrors = PartialRecord<ProfileKeys, Array<ProfileErrorCode>>;

interface ProfileStateSchema {
  data?: Nullable<Profile>;
  form?: Nullable<Profile>;
  isLoading?: boolean;
  isReadonly: boolean;
  isFailed: boolean;
  errorCode?: Nullable<ProfileErrorCode>;
  isSaving?: boolean;
  validationErrors?: ValidationErrors;
}

export { ProfileErrorCode, ValidationErrors, ProfileStateSchema };
