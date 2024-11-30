import { MockProfileWithAvatar } from 'entities/Profile/mock/MockProfileData';
import { ProfileErrorCode, ProfileValidationErrors } from 'entities/Profile';
import { validateProfileData } from '.';

describe('validateProfileData', () => {
  test('successful validateProfileData', () => {
    const formData = MockProfileWithAvatar;
    const result = validateProfileData(formData);

    expect(result).toEqual({});
  });

  test('failed validateProfileData', () => {
    const expectedResult: ProfileValidationErrors = {
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
