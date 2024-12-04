import type { Meta, StoryObj } from '@storybook/react';

import withOverriddenThemes from '~/shared/config/storybook/helpers/withOverriddenThemes';
import { AppLinkTheme } from '../types';
import AppLink from './AppLink';

const meta = {
  title: 'Shared/AppLink',
  component: AppLink,
  args: {
    to: '/',
    children: 'Read more',
  },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;

export const PrimaryInverted = {
  args: {
    theme: AppLinkTheme.PRIMARY_INVERTED,
  },
} satisfies Story;

export const PrimaryDark = withOverriddenThemes({})() satisfies Story;

export const Secondary = {
  args: {
    theme: AppLinkTheme.SECONDARY,
  },
} satisfies Story;

export const SecondaryDark = withOverriddenThemes<Story>({
  args: {
    theme: AppLinkTheme.SECONDARY,
  },
})() satisfies Story;

export const Warning = {
  args: {
    theme: AppLinkTheme.WARNING,
  },
} satisfies Story;

export const WarningDark = withOverriddenThemes<Story>({
  args: {
    theme: AppLinkTheme.WARNING,
  },
})() satisfies Story;
