import { ProfileErrorCode, ValidationErrors } from '../../types/ProfileStateSchema';
import { MockProfileWithAvatar } from '../../../mock/MockProfileData';
import { validateProfileData } from '.';

describe('validateProfileData', () => {
  test('successful validateProfileData', () => {
    const formData = MockProfileWithAvatar;
    const result = validateProfileData(formData);

    expect(result).toEqual({});
  });

  test('failed validateProfileData', () => {
    const expectedResult: ValidationErrors = {
      username: [ProfileErrorCode.REQUIRED],
      firstName: [ProfileErrorCode.REQUIRED],
    };

    const formData = {
      ...MockProfileWithAvatar,
      username: undefined,
      firstName: undefined,
      avatar: undefined,
    };

    const result = validateProfileData(formData);

    expect(result).toEqual(expectedResult);
  });
});
