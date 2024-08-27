import { Profile } from '../../src/entities/Profile/model/types/ProfileStateSchema';
import { CurrencyMap } from '../../src/entities/Currency/model/types/currencies';
import { CountryMap } from '../../src/entities/Country/model/types/countries';

type ProfileSchema = { user_id: string } & Profile;

function getProfiles(): { profiles: Array<ProfileSchema> } {
  const data = {
    profiles: [
      {
        id: '1',
        user_id: '1',
        first_name: 'Oleksandr',
        last_name: 'Brynzei',
        age: 25,
        currency: CurrencyMap.USD,
        country: CountryMap.USA,
        city: 'Sacramento',
        username: 'admin',
        avatar: 'https://images.pexels.com/photos/1033142/pexels-photo-1033142.jpeg',
      },
      {
        id: '2',
        user_id: '2',
        first_name: 'Vincent',
        last_name: 'Roberts',
        age: 22,
        currency: CurrencyMap.EUR,
        country: CountryMap.Germany,
        city: 'Frankfurt',
        username: 'user',
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
      },
    ],
  };

  return data;
}

export { getProfiles, ProfileSchema };
