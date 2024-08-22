import { getEnumValues } from 'shared/lib/helpers/mapEnum';

enum Country {
  USA = 'USA',
  Ukraine = 'Ukraine',
  Germany = 'Germany',
}

export const CountryMap = getEnumValues(Country);

export default Country;
