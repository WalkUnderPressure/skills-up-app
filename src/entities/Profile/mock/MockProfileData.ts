import { Profile } from '../model/types/ProfileStateSchema';
import { CurrencyMap } from '~/entities/Currency';
import { CountryMap } from '~/entities/Country';

import RomeImg from '~/shared/assets/images/rome.jpg';

const MockProfileData: Profile = {
  id: '164',
  userId: '164',
  username: 'maurice_tucker',
  age: 42,
  city: 'Katwicsa',
  firstName: 'Maurice',
  lastName: 'Tucker',
  country: CountryMap.USA,
  currency: CurrencyMap.USD,
  avatar: '',
};

const MockProfileWithAvatar = {
  ...MockProfileData,
  avatar: RomeImg,
};

export { MockProfileData, MockProfileWithAvatar };
