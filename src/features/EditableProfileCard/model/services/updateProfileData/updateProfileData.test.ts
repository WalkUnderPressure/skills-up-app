import { AxiosResponse } from 'axios';

import { TestAsyncThunk } from 'shared/config/tests/TestAsyncThunk';
import { MockProfileWithAvatar } from 'entities/Profile/mock/MockProfileData';
import { Profile, ProfileErrorCode, ProfileValidationErrors } from 'entities/Profile';
import { SubmitErrorData, updateProfileData } from '.';

describe('updateProfileData', () => {
  test('successful updateProfileData when data exist', async () => {
    const newProfileData = { ...MockProfileWithAvatar, username: 'NewUser' };

    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: { data: { id: '1' }, form: newProfileData },
    });

    thunk.api.patch.mockReturnValue(
      Promise.resolve<Partial<AxiosResponse<Profile>>>({
        data: newProfileData,
      }),
    );

    const result = await thunk.callThunk();

    expect(thunk.api.patch).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.payload).toEqual(newProfileData);
  });

  test('failed updateProfileData when data exist', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: { data: { id: '1' }, form: MockProfileWithAvatar },
    });

    thunk.api.patch.mockReturnValue(
      Promise.resolve<Partial<AxiosResponse<Profile>>>({
        status: 403,
      }),
    );

    const result = await thunk.callThunk();
    const errorData = result.payload as SubmitErrorData;

    expect(thunk.api.patch).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(errorData.error).toEqual(ProfileErrorCode.CANT_UPDATE_PROFILE);
  });

  test('failed updateProfileData when form invalid', async () => {
    const validationErrors: ProfileValidationErrors = {
      username: [ProfileErrorCode.REQUIRED],
      city: [ProfileErrorCode.REQUIRED],
    };

    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        data: { id: '1' },
        form: {
          ...MockProfileWithAvatar,
          username: undefined,
          city: undefined,
        },
      },
    });

    thunk.api.patch.mockReturnValue(
      Promise.resolve<Partial<AxiosResponse<Profile>>>({
        data: MockProfileWithAvatar,
      }),
    );

    const result = await thunk.callThunk();
    const errorData = result.payload as SubmitErrorData;

    expect(thunk.api.patch).not.toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(errorData.validation).toEqual(validationErrors);
  });
});
