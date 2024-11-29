import type { Meta, StoryObj } from '@storybook/react';

import withOverriddenThemes from 'shared/config/storybook/helpers/withOverriddenThemes';
import EditableProfileCard from '.';

const meta = {
  title: 'Features/EditableProfileCard',
  component: EditableProfileCard,
  args: {
    profileUserId: '',
  },
} satisfies Meta<typeof EditableProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light = {} satisfies Story;

export const Dark = withOverriddenThemes({})() satisfies Story;
