import type { Meta, StoryObj } from '@storybook/react';

import withOverriddenThemes from '~/shared/config/storybook/helpers/withOverriddenThemes';
import StoreDecorator from '~/shared/config/storybook/decorators/StoreDecorator';
import { MockProfileWithAvatar } from '~/entities/Profile/mock/MockProfileData';
import EditableProfileCard from '.';

const meta = {
  title: 'Features/EditableProfileCard',
  component: EditableProfileCard,
  args: {
    profileUserId: '',
  },
  decorators: [
    StoreDecorator({
      profile: {
        form: MockProfileWithAvatar,
      },
    }),
  ],
} satisfies Meta<typeof EditableProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light = {} satisfies Story;

export const Dark = withOverriddenThemes({})() satisfies Story;
