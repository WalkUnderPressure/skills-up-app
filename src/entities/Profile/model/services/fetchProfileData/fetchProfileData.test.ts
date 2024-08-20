import { AxiosResponse } from 'axios';

import { TestAsyncThunk } from 'shared/config/tests/TestAsyncThunk';
import { Profile, ProfileErrorCode } from '../../types/ProfileStateSchema';
import { MockProfileData } from '../../../mock/MockProfileData';
import { fetchProfileData } from '.';

describe('fetchProfileData', () => {
  test('successful fetchProfileData when userId exist', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData, {
      user: { authData: { id: '1' } },
    });

    thunk.api.get.mockReturnValue(
      Promise.resolve<Partial<AxiosResponse<Array<Profile>>>>({
        data: [MockProfileData],
      }),
    );

    const result = await thunk.callThunk();

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.payload).toEqual(MockProfileData);
  });

  test('failed fetchProfileData when userId exist', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData, {
      user: { authData: { id: '1' } },
    });

    thunk.api.get.mockReturnValue(
      Promise.resolve<Partial<AxiosResponse<Profile>>>({
        status: 403,
      }),
    );

    const result = await thunk.callThunk();

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.payload).toEqual(ProfileErrorCode.PROFILE_NOT_FOUND);
  });
});
