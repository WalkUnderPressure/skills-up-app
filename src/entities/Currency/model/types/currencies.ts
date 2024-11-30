const CurrencyMap = Object.freeze({
  EUR: 'EUR',
  USD: 'USD',
  UAH: 'UAH',
});

type CurrencyMapKey = (typeof CurrencyMap)[keyof typeof CurrencyMap];

export { CurrencyMap };
export type { CurrencyMapKey };
