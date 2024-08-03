import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import withOverriddenThemes from 'shared/config/storybook/helpers/withOverriddenThemes';
import { ButtonTheme } from 'shared/ui/Button/types';
import Button from './Button';

const meta = {
  title: 'Shared/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    children: 'Read more',
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Clear: Story = {
  args: {
    theme: ButtonTheme.CLEAR,
  },
};

export const Outline: Story = {
  args: {
    theme: ButtonTheme.OUTLINE,
  },
};

export const OutlineDark: Story = withOverriddenThemes({
  args: {
    theme: ButtonTheme.OUTLINE,
  },
})();
