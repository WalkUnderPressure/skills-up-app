import mapEnum from 'shared/lib/helpers/mapEnum';

enum Currency {
  'EUR' = 'EUR',
  'USD' = 'USD',
  'UAH' = 'UAH',
}

export const CurrencyMap = mapEnum(Currency);

export default Currency;
