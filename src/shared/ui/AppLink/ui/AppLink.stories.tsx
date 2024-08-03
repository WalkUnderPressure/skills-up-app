import type { Meta, StoryObj } from '@storybook/react';

import withOverriddenThemes from 'shared/config/storybook/helpers/withOverriddenThemes';
import AppLink, { AppLinkTheme } from './AppLink';

const meta = {
  title: 'Shared/AppLink',
  component: AppLink,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    to: '/',
    children: 'Read more',
  },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const PrimaryDark: Story = withOverriddenThemes({})();

export const Secondary: Story = {
  args: {
    theme: AppLinkTheme.SECONDARY,
  },
};

export const SecondaryDark: Story = withOverriddenThemes({
  args: {
    theme: AppLinkTheme.SECONDARY,
  },
})();

export const Warning: Story = {
  args: {
    theme: AppLinkTheme.WARNING,
  },
};

export const WarningDark: Story = withOverriddenThemes({
  args: {
    theme: AppLinkTheme.WARNING,
  },
})();
