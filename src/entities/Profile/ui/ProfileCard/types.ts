import {
  Profile,
  ProfileKeys,
  ProfileValidationErrors,
} from '../../model/types/ProfileStateSchema';
import ProfileErrorCode from '../../model/consts/ProfileErrorCode';

export type ProfileProps = {
  profile?: Nullable<Profile>;
  validationErrors?: ProfileValidationErrors;
  isLoading?: boolean;
  isReadonly?: boolean;
  isDisabled?: boolean;
  errorData?: Nullable<ErrorData<ProfileErrorCode>>;
  onChange?: (fieldName: ProfileKeys, value: string) => void;
} & PropsWithClassName;

export type ErrorTranslates = Record<ProfileErrorCode, string>;
