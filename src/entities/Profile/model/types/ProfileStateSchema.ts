import Currency from 'shared/constants/currencies';
import Country from 'shared/constants/countries';

enum ProfileErrorCode {
  INCORRECT_DATA = 'INCORRECT_DATA',
}

interface Profile {
  first_name: string;
  last_name: string;
  age: number;
  currency: Currency;
  country: Country;
  city: string;
  username: string;
  avatar: string;
}

interface ProfileStateSchema {
  data?: Profile;
  isLoading?: boolean;
  isReadonly: boolean;
  isFailed: boolean;
  errorCode?: ProfileErrorCode;
}

export { Profile, ProfileStateSchema, ProfileErrorCode };
