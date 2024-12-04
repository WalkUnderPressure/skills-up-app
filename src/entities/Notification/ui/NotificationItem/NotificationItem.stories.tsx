import type { Meta, StoryObj } from '@storybook/react';

import withOverriddenThemes from '~/shared/config/storybook/helpers/withOverriddenThemes';
import NotificationItem from '.';

const meta = {
  title: 'Entities/Notification',
  component: NotificationItem,
  args: {
    notification: {
      id: '1',
      title: 'Test notification',
      description: 'some notification description',
      href: '/',
    },
  },
} satisfies Meta<typeof NotificationItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light = {} satisfies Story;

export const Dark = withOverriddenThemes({})() satisfies Story;
