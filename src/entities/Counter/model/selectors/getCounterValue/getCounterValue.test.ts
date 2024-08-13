import { StoreStateSchema } from 'app/providers/StoreProvider';
import getCounterValue from '.';

describe('getCounterValue', () => {
  test('get counter value from filled store', () => {
    const expectedResult = 10;

    const state: DeepPartial<StoreStateSchema> = {
      counter: { value: expectedResult },
    };

    const actualResult = getCounterValue(state as StoreStateSchema);

    expect(actualResult).toEqual(expectedResult);
  });

  test('get counter value from empty store', () => {
    const actualResult = getCounterValue({} as StoreStateSchema);
    expect(actualResult).toEqual(0);
  });
});
