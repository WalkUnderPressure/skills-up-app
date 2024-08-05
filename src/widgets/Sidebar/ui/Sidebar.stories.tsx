import type { Meta, StoryObj } from '@storybook/react';

import StoryThemeDecorator from 'shared/config/storybook/decorators/StoryThemeDecorator';
import withOverriddenThemes from 'shared/config/storybook/helpers/withOverriddenThemes';
import Sidebar from './Sidebar';

const meta = {
  title: 'Widgets/Sidebar',
  component: Sidebar,
  decorators: StoryThemeDecorator,
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = withOverriddenThemes({})();
