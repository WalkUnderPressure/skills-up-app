import { StoreStateSchema } from 'app/providers/StoreProvider';
import getCounterValue from './getCounterValue';

describe('getCounterValue', () => {
  test('getCounterValue check get part of state', () => {
    const expectedResult = 10;

    const state: DeepPartial<StoreStateSchema> = {
      counter: { value: expectedResult },
    };

    const actualResult = getCounterValue(state as StoreStateSchema);

    expect(actualResult).toEqual(expectedResult);
  });
});
