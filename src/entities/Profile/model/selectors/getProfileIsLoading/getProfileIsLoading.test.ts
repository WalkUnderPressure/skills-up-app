import { StoreStateSchema } from 'app/providers/StoreProvider';
import getProfileIsLoading from '.';

describe('getProfileIsLoading', () => {
  test('get profile isLoading from filled store', () => {
    const expectedResult: boolean = false;

    const state: DeepPartial<StoreStateSchema> = {
      profile: {
        isLoading: expectedResult,
      },
    };

    const actualResult = getProfileIsLoading(state as StoreStateSchema);

    expect(actualResult).toEqual(expectedResult);
  });

  test('get profile isLoading from empty store', () => {
    const actualResult = getProfileIsLoading({} as StoreStateSchema);
    expect(actualResult).toEqual(false);
  });
});
