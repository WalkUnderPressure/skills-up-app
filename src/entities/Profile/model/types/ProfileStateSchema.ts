import { CurrencyMapKey } from 'entities/Currency';
import { CountryMapKey } from 'entities/Country';
import ProfileErrorCode from '../consts/ProfileErrorCode';

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

type ProfileValidationErrors = PartialRecord<ProfileKeys, Array<ProfileErrorCode>>;

export type { Profile, ProfileKeys, ProfileValidationErrors };
