import type { Meta, StoryObj } from '@storybook/react';

import withOverriddenThemes from '~/shared/config/storybook/helpers/withOverriddenThemes';

import { ProfileValidationErrors } from '../../model/types/ProfileStateSchema';
import { MockProfileWithAvatar } from '~/entities/Profile/mock/MockProfileData';
import ProfileErrorCode from '../../model/consts/ProfileErrorCode';
import ProfileCard from '.';

const meta = {
  title: 'Entities/Profile/ProfileCard',
  component: ProfileCard,
  args: {
    profile: MockProfileWithAvatar,
  },
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;

export const DefaultDark = withOverriddenThemes<Story>({})() satisfies Story;

export const DefaultEditable = {
  args: {
    isReadonly: false,
  },
} satisfies Story;

export const DefaultEditableDark = withOverriddenThemes<Story>({
  args: {
    isReadonly: false,
  },
})() satisfies Story;

export const DefaultLoading = {
  args: {
    isLoading: true,
  },
} satisfies Story;

export const DefaultLoadingDark = withOverriddenThemes<Story>({
  args: {
    isLoading: true,
  },
})() satisfies Story;

export const DefaultError = {
  args: {
    errorData: {
      errorCode: ProfileErrorCode.PROFILE_NOT_FOUND,
      isFailed: true,
    } as ErrorData<ProfileErrorCode>,
  },
} satisfies Story;

export const DefaultErrorDark = withOverriddenThemes<Story>({
  args: {
    errorData: {
      errorCode: ProfileErrorCode.PROFILE_NOT_FOUND,
      isFailed: true,
    } as ErrorData<ProfileErrorCode>,
  },
})() satisfies Story;

const validationErrors: ProfileValidationErrors = {
  username: [ProfileErrorCode.REQUIRED],
  firstName: [ProfileErrorCode.REQUIRED],
  lastName: [ProfileErrorCode.REQUIRED],
  city: [ProfileErrorCode.REQUIRED],
  age: [ProfileErrorCode.REQUIRED],
};

export const DefaultValidationErrors = {
  args: {
    isReadonly: false,
    validationErrors,
  },
} satisfies Story;

export const DefaultValidationErrorsDark = withOverriddenThemes<Story>({
  args: {
    isReadonly: false,
    validationErrors,
  },
})() satisfies Story;
