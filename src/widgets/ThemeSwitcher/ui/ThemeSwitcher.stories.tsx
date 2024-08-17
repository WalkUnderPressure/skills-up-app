import type { Meta, StoryObj } from '@storybook/react';

import AppThemeProviderDecorator from 'shared/config/storybook/decorators/AppThemeProviderDecorator';
import withOverriddenThemes from 'shared/config/storybook/helpers/withOverriddenThemes';
import ThemeSwitcher from './ThemeSwitcher';

const meta = {
  title: 'Widgets/ThemeSwitcher',
  component: ThemeSwitcher,
  decorators: AppThemeProviderDecorator,
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;

export const Dark = withOverriddenThemes({})() satisfies Story;
