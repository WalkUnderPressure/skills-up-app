import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import withOverriddenThemes from 'shared/config/storybook/helpers/withOverriddenThemes';
import { ButtonTheme, ButtonSize } from 'shared/ui/Button/types';
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

export const OutlineSizeM: Story = {
  args: {
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.M,
  },
};

export const OutlineSizeL: Story = {
  args: {
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L,
  },
};

export const OutlineSizeXL: Story = {
  args: {
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL,
  },
};

export const SquareSizeM: Story = {
  args: {
    size: ButtonSize.M,
    isSquare: true,
    children: '+',
  },
};

export const SquareSizeL: Story = {
  args: {
    size: ButtonSize.L,
    isSquare: true,
    children: '+',
  },
};

export const SquareSizeXL: Story = {
  args: {
    size: ButtonSize.XL,
    isSquare: true,
    children: '+',
  },
};

export const BackgroundTheme: Story = {
  args: {
    theme: ButtonTheme.BG,
  },
};

export const InvertedBackgroundTheme: Story = {
  args: {
    theme: ButtonTheme.BG_INVERTED,
  },
};
