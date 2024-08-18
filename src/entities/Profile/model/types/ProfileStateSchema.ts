import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

enum ProfileErrorCode {
  PROFILE_NOT_FOUND = 'PROFILE_NOT_FOUND',
  CANT_UPDATE_PROFILE = 'CANT_UPDATE_PROFILE',
}

interface Profile {
  username: string;
  id?: string;
  first_name?: string;
  last_name?: string;
  age?: number;
  currency?: Currency;
  country?: Country;
  city?: string;
  avatar?: string;
}

type ProfileKeys = keyof Profile;

interface ProfileStateSchema {
  data?: Nullable<Profile>;
  form?: Nullable<Profile>;
  isLoading?: boolean;
  isReadonly: boolean;
  isFailed: boolean;
  errorCode?: Nullable<ProfileErrorCode>;
  isSaving?: boolean;
}

export { Profile, ProfileKeys, ProfileStateSchema, ProfileErrorCode };
