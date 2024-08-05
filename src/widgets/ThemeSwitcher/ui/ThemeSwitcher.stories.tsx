import type { Meta, StoryObj } from '@storybook/react';

import StoryThemeDecorator from 'shared/config/storybook/decorators/StoryThemeDecorator';
import withOverriddenThemes from 'shared/config/storybook/helpers/withOverriddenThemes';
import ThemeSwitcher from './ThemeSwitcher';

const meta = {
  title: 'Widgets/ThemeSwitcher',
  component: ThemeSwitcher,
  decorators: StoryThemeDecorator,
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Dark: Story = withOverriddenThemes({})();
