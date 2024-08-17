import type { Meta, StoryObj } from '@storybook/react';

import { SignInByUsernameSchema, SignInByUsernameErrorCode } from 'features/SignInByUsername';
import withOverriddenThemes from 'shared/config/storybook/helpers/withOverriddenThemes';
import StoreDecorator from 'shared/config/storybook/decorators/StoreDecorator';
import SignInForm from './SignInForm';

const USER_DATA = { username: 'admin', password: '12345' };

const meta = {
  title: 'Features/SignInForm',
  component: SignInForm,
  args: {
    onSuccess: () => {},
  },
  decorators: StoreDecorator({ 'sign-in_username': USER_DATA }),
} satisfies Meta<typeof SignInForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;

export const DefaultDark = withOverriddenThemes<Story>({})() satisfies Story;

export const Disabled = {
  decorators: StoreDecorator({
    'sign-in_username': { ...USER_DATA, isLoading: true },
  }),
} satisfies Story;

export const DisabledDark = withOverriddenThemes<Story>({
  decorators: StoreDecorator({
    'sign-in_username': { ...USER_DATA, isLoading: true },
  }),
})() satisfies Story;

const FAILED_STATE = {
  'sign-in_username': {
    ...USER_DATA,
    isLoading: false,
    isFailed: true,
    errorCode: SignInByUsernameErrorCode.INCORRECT_DATA,
  } as SignInByUsernameSchema,
};

export const Failed = {
  decorators: StoreDecorator(FAILED_STATE),
} satisfies Story;

export const FailedDark = withOverriddenThemes({
  decorators: StoreDecorator(FAILED_STATE),
})() satisfies Story;
