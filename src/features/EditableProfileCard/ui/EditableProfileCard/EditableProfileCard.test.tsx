import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';

import { MockProfileData } from '~/entities/Profile/mock/MockProfileData';
import {
  ProvidersOptions,
  renderWithProviders,
} from '~/shared/config/tests/providers/renderWithProviders';
import { ProfileCardDataTestIds } from '~/entities/Profile';
import { InputErrorDataTestId } from '~/shared/ui/Input';
import $api from '~/shared/api/api';
import { EditableProfileDataTestIds } from '../EditableProfileCard.test-ids';
import { profileReducer } from '../../model/slices/editableProfileCardSlice';
import EditableProfileCard from '.';

const USER_ID = MockProfileData.userId || '';

const options: ProvidersOptions = {
  store: {
    initialState: {
      profile: {
        isReadonly: true,
        data: MockProfileData,
        form: MockProfileData,
      },
      user: {
        authData: { id: USER_ID },
      },
    },
    initialReducers: {
      profile: profileReducer,
    },
  },
};

describe('Features/EditableProfileCard', () => {
  test('Read-only mode should switch', async () => {
    renderWithProviders(<EditableProfileCard profileUserId={USER_ID} />, options);

    await userEvent.click(screen.getByTestId(EditableProfileDataTestIds.editBtnDataTestId));

    expect(screen.getByTestId(EditableProfileDataTestIds.resetBtnDataTestId)).toBeInTheDocument();
    expect(screen.getByTestId(EditableProfileDataTestIds.saveBtnDataTestId)).toBeInTheDocument();
  });

  test('When click reset btn, entered values should return to initial values', async () => {
    renderWithProviders(<EditableProfileCard profileUserId={USER_ID} />, options);

    await userEvent.click(screen.getByTestId(EditableProfileDataTestIds.editBtnDataTestId));

    await userEvent.clear(screen.getByTestId(ProfileCardDataTestIds.firstName));
    await userEvent.clear(screen.getByTestId(ProfileCardDataTestIds.lastName));

    await userEvent.type(screen.getByTestId(ProfileCardDataTestIds.firstName), 'user');
    await userEvent.type(screen.getByTestId(ProfileCardDataTestIds.lastName), 'user');

    expect(screen.getByTestId(ProfileCardDataTestIds.firstName)).toHaveValue('user');
    expect(screen.getByTestId(ProfileCardDataTestIds.lastName)).toHaveValue('user');

    await userEvent.click(screen.getByTestId(EditableProfileDataTestIds.resetBtnDataTestId));

    expect(screen.getByTestId(ProfileCardDataTestIds.firstName)).toHaveValue(
      MockProfileData.firstName,
    );
    expect(screen.getByTestId(ProfileCardDataTestIds.lastName)).toHaveValue(
      MockProfileData.lastName,
    );
  });

  test('Validation error should appear', async () => {
    renderWithProviders(<EditableProfileCard profileUserId={USER_ID} />, options);

    await userEvent.click(screen.getByTestId(EditableProfileDataTestIds.editBtnDataTestId));

    await userEvent.clear(screen.getByTestId(ProfileCardDataTestIds.firstName));

    await userEvent.click(screen.getByTestId(EditableProfileDataTestIds.saveBtnDataTestId));

    expect(
      screen.getByTestId(ProfileCardDataTestIds.firstName + InputErrorDataTestId),
    ).toBeInTheDocument();
  });

  test('When validation error are empty PUT request should send to server', async () => {
    const mockPatchReq = jest.spyOn($api, 'patch');

    renderWithProviders(<EditableProfileCard profileUserId={USER_ID} />, options);

    await userEvent.click(screen.getByTestId(EditableProfileDataTestIds.editBtnDataTestId));

    await userEvent.type(screen.getByTestId(ProfileCardDataTestIds.firstName), 'user');

    await userEvent.click(screen.getByTestId(EditableProfileDataTestIds.saveBtnDataTestId));

    expect(mockPatchReq).toHaveBeenCalled();
  });
});
