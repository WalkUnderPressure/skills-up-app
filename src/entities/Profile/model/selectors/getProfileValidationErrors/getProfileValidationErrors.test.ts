import { StoreStateSchema } from 'app/providers/StoreProvider';
import { ProfileErrorCode, ValidationErrors } from '../../types/ProfileStateSchema';
import getProfileValidationErrors from '.';

describe('getProfileValidationErrors', () => {
  test('get profile validation errors from filled store', () => {
    const expectedResult: ValidationErrors = {
      first_name: [ProfileErrorCode.REQUIRED],
      last_name: [ProfileErrorCode.REQUIRED],
    };

    const state: DeepPartial<StoreStateSchema> = {
      profile: {
        validationErrors: expectedResult,
      },
    };

    const actualResult = getProfileValidationErrors(state as StoreStateSchema);

    expect(actualResult).toEqual(expectedResult);
  });

  test('get profile validation errors from empty store', () => {
    const actualResult = getProfileValidationErrors({} as StoreStateSchema);
    expect(actualResult).toEqual(null);
  });
});
