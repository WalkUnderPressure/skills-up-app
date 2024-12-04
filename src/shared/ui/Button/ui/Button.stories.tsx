import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import withOverriddenThemes from '~/shared/config/storybook/helpers/withOverriddenThemes';
import { ButtonTheme, ButtonSize, ButtonRounded } from '~/shared/ui/Button/types';
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

export const Default = {} satisfies Story;

export const DefaultDisabled = {
  args: {
    disabled: true,
  },
} satisfies Story;

export const DefaultRoundedM = {
  args: {
    rounded: ButtonRounded.M,
  },
} satisfies Story;

export const DefaultRoundedMDisabled = {
  args: {
    rounded: ButtonRounded.M,
    disabled: true,
  },
} satisfies Story;

export const Clear = {
  args: {
    theme: ButtonTheme.CLEAR,
  },
} satisfies Story;

export const Outline = {
  args: {
    theme: ButtonTheme.OUTLINE,
  },
} satisfies Story;

export const OutlineRoundedM = {
  args: {
    theme: ButtonTheme.OUTLINE,
    rounded: ButtonRounded.M,
  },
} satisfies Story;

export const OutlineInverted = {
  args: {
    theme: ButtonTheme.OUTLINE_INVERTED,
  },
} satisfies Story;

export const OutlineDark = withOverriddenThemes<Story>({
  args: {
    theme: ButtonTheme.OUTLINE,
  },
})() satisfies Story;

export const OutlineSizeM = {
  args: {
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.M,
  },
} satisfies Story;

export const OutlineSizeL = {
  args: {
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L,
  },
} satisfies Story;

export const OutlineSizeXL = {
  args: {
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL,
  },
} satisfies Story;

export const SquareSizeM = {
  args: {
    size: ButtonSize.M,
    isSquare: true,
    children: '+',
  },
} satisfies Story;

export const SquareSizeL = {
  args: {
    size: ButtonSize.L,
    isSquare: true,
    children: '+',
  },
} satisfies Story;

export const SquareSizeXL = {
  args: {
    size: ButtonSize.XL,
    isSquare: true,
    children: '+',
  },
} satisfies Story;

export const SquareSizeXLRoundedM = {
  args: {
    size: ButtonSize.XL,
    isSquare: true,
    children: '+',
    rounded: ButtonRounded.M,
  },
} satisfies Story;

export const BackgroundTheme = {
  args: {
    theme: ButtonTheme.BG,
  },
} satisfies Story;

export const BackgroundThemeRoundedM = {
  args: {
    theme: ButtonTheme.BG,
    rounded: ButtonRounded.M,
  },
} satisfies Story;

export const InvertedBackgroundTheme = {
  args: {
    theme: ButtonTheme.BG_INVERTED,
  },
} satisfies Story;

export const InvertedBackgroundThemeRoundedM = {
  args: {
    theme: ButtonTheme.BG_INVERTED,
    rounded: ButtonRounded.M,
  },
} satisfies Story;
