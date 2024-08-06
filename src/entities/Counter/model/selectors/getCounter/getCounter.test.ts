import { StoreStateSchema } from 'app/providers/StoreProvider';
import getCounter from './getCounter';

describe('getCounter', () => {
  test('getCounter check get part of state', () => {
    const expectedResult = { value: 10 };

    const state: DeepPartial<StoreStateSchema> = {
      counter: expectedResult,
    };

    const actualResult = getCounter(state as StoreStateSchema);

    expect(actualResult).toEqual(expectedResult);
  });
});
