import mapEnum from 'shared/lib/helpers/mapEnum';

enum Country {
  USA = 'USA',
  Ukraine = 'Ukraine',
  Germany = 'Germany',
}

export const CountryMap = mapEnum(Country);

export default Country;
