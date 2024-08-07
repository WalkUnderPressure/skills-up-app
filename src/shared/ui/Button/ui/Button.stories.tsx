import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import withOverriddenThemes from 'shared/config/storybook/helpers/withOverriddenThemes';
import { ButtonTheme, ButtonSize, ButtonRounded } from 'shared/ui/Button/types';
import Button from './Button';

const meta = {
  title: 'Shared/Button',
  component: Button,
  args: {
    children: 'Read more',
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DefaultRoundedM: Story = {
  args: {
    rounded: ButtonRounded.M,
  },
};

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

export const OutlineRoundedM: Story = {
  args: {
    theme: ButtonTheme.OUTLINE,
    rounded: ButtonRounded.M,
  },
};

export const OutlineInverted: Story = {
  args: {
    theme: ButtonTheme.OUTLINE_INVERTED,
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

export const SquareSizeXLRoundedM: Story = {
  args: {
    size: ButtonSize.XL,
    isSquare: true,
    children: '+',
    rounded: ButtonRounded.M,
  },
};

export const BackgroundTheme: Story = {
  args: {
    theme: ButtonTheme.BG,
  },
};

export const BackgroundThemeRoundedM: Story = {
  args: {
    theme: ButtonTheme.BG,
    rounded: ButtonRounded.M,
  },
};

export const InvertedBackgroundTheme: Story = {
  args: {
    theme: ButtonTheme.BG_INVERTED,
  },
};

export const InvertedBackgroundThemeRoundedM: Story = {
  args: {
    theme: ButtonTheme.BG_INVERTED,
    rounded: ButtonRounded.M,
  },
};
