import { StoreStateSchema } from '~/app/providers/StoreProvider';
import getProfileIsReadonly from '.';

describe('getProfileIsReadonly', () => {
  test('get profile isReadonly from filled store', () => {
    const expectedResult: boolean = false;

    const state: DeepPartial<StoreStateSchema> = {
      profile: {
        isReadonly: expectedResult,
      },
    };

    const actualResult = getProfileIsReadonly(state as StoreStateSchema);

    expect(actualResult).toEqual(expectedResult);
  });

  test('get profile isReadonly from empty store', () => {
    const actualResult = getProfileIsReadonly({} as StoreStateSchema);
    expect(actualResult).toEqual(false);
  });
});
