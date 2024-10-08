import { CurrencyMapKey } from 'entities/Currency';
import { CountryMapKey } from 'entities/Country';

enum ProfileErrorCode {
  REQUIRED = 'REQUIRED',
  PROFILE_NOT_FOUND = 'PROFILE_NOT_FOUND',
  CANT_UPDATE_PROFILE = 'CANT_UPDATE_PROFILE',
}

interface Profile {
  id?: string;
  userId?: string;
  username?: string;
  firstName?: string;
  lastName?: string;
  age?: number;
  currency?: CurrencyMapKey;
  country?: CountryMapKey;
  city?: string;
  avatar?: string;
}

type ProfileKeys = keyof Profile;

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

export { Profile, ProfileKeys, ProfileStateSchema, ProfileErrorCode, ValidationErrors };
