import type { Meta, StoryObj } from '@storybook/react';

import { SignInByUsernameSchema, SignInByUsernameErrorCode } from 'features/SignInByUsername';
import withOverriddenThemes from 'shared/config/storybook/helpers/withOverriddenThemes';
import StoreDecorator from 'shared/config/storybook/decorators/StoreDecorator';
import SignInForm from './SignInForm';

const USER_DATA = { username: 'admin', password: '12345' };

const meta = {
  title: 'Features/SignInForm',
  component: SignInForm,
  decorators: StoreDecorator({ 'sign-in_username': USER_DATA }),
} satisfies Meta<typeof SignInForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DefaultDark: Story = withOverriddenThemes<Story>({})();

export const Disabled: Story = {
  decorators: StoreDecorator({
    'sign-in_username': { ...USER_DATA, isLoading: true },
  }),
};

export const DisabledDark: Story = withOverriddenThemes<Story>({
  decorators: StoreDecorator({
    'sign-in_username': { ...USER_DATA, isLoading: true },
  }),
})();

const FAILED_STATE = {
  'sign-in_username': {
    ...USER_DATA,
    isLoading: false,
    isFailed: true,
    errorCode: SignInByUsernameErrorCode.INCORRECT_DATA,
  } as SignInByUsernameSchema,
};

export const Failed: Story = {
  decorators: StoreDecorator(FAILED_STATE),
};

export const FailedDark: Story = withOverriddenThemes({
  decorators: StoreDecorator(FAILED_STATE),
})();
