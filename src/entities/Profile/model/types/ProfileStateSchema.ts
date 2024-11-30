import { CurrencyMapKey } from 'entities/Currency';
import { CountryMapKey } from 'entities/Country';

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

export type { Profile, ProfileKeys };
