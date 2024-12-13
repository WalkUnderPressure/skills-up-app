import { StoreStateSchema } from '~/app/providers/StoreProvider';
import { getProfileIsSaving } from '.';

describe('getProfileIsSaving', () => {
  test('get profile isSaving from filled store', () => {
    const expectedResult: boolean = false;

    const state: DeepPartial<StoreStateSchema> = {
      profile: {
        isSaving: expectedResult,
      },
    };

    const actualResult = getProfileIsSaving(state as StoreStateSchema);

    expect(actualResult).toEqual(expectedResult);
  });

  test('get profile isSaving from empty store', () => {
    const actualResult = getProfileIsSaving({} as StoreStateSchema);
    expect(actualResult).toEqual(false);
  });
});
