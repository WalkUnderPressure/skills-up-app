const CountryMap = Object.freeze({
  USA: 'USA',
  Ukraine: 'Ukraine',
  Germany: 'Germany',
});

type CountryMapKey = (typeof CountryMap)[keyof typeof CountryMap];

export { CountryMap };
export type { CountryMapKey };
