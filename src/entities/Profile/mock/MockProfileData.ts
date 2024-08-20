import { Profile } from '../model/types/ProfileStateSchema';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

import RomeImg from 'shared/assets/images/rome.jpg';

const MockProfileData: Profile = {
  id: '164',
  username: 'maurice_tucker',
  age: 42,
  city: 'Katwicsa',
  first_name: 'Maurice',
  last_name: 'Tucker',
  country: Country.USA,
  currency: Currency.USD,
  avatar: '',
};

const MockProfileWithAvatar = {
  ...MockProfileData,
  avatar: RomeImg,
};

export { MockProfileData, MockProfileWithAvatar };
