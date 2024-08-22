import { getEnumValues } from 'shared/lib/helpers/mapEnum';

enum Currency {
  'EUR' = 'EUR',
  'USD' = 'USD',
  'UAH' = 'UAH',
}

export const CurrencyMap = getEnumValues(Currency);

export default Currency;
