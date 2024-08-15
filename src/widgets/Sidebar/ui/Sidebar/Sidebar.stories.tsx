import type { Meta, StoryObj } from '@storybook/react';

import AppThemeProviderDecorator from 'shared/config/storybook/decorators/AppThemeProviderDecorator';
import withOverriddenThemes from 'shared/config/storybook/helpers/withOverriddenThemes';
import Sidebar from './Sidebar';

const meta = {
  title: 'Widgets/Sidebar',
  component: Sidebar,
  decorators: AppThemeProviderDecorator,
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = withOverriddenThemes({})();
