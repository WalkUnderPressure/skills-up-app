import { StoreStateSchema } from 'app/providers/StoreProvider';
import getCounter from '.';

describe('getCounter', () => {
  test('get counter from filled store', () => {
    const expectedResult = { value: 10 };

    const state: DeepPartial<StoreStateSchema> = {
      counter: expectedResult,
    };

    const actualResult = getCounter(state as StoreStateSchema);

    expect(actualResult).toEqual(expectedResult);
  });

  test('get counter from empty store', () => {
    const actualResult = getCounter({} as StoreStateSchema);
    expect(actualResult).toEqual(undefined);
  });
});
