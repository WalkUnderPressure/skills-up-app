import { Profile, ProfileErrorCode, ProfileValidationErrors } from '~/entities/Profile';

interface EditableProfileStateSchema {
  data?: Nullable<Profile>;
  form?: Nullable<Profile>;
  isLoading?: boolean;
  isReadonly: boolean;
  isFailed: boolean;
  errorCode?: Nullable<ProfileErrorCode>;
  isSaving?: boolean;
  validationErrors?: ProfileValidationErrors;
}

export type { EditableProfileStateSchema };
