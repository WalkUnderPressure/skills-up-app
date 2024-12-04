import type { Meta, StoryObj } from '@storybook/react';

import AppThemeProviderDecorator from '~/shared/config/storybook/decorators/AppThemeProviderDecorator';
import withOverriddenThemes from '~/shared/config/storybook/helpers/withOverriddenThemes';
import StoreDecorator from '~/shared/config/storybook/decorators/StoreDecorator';
import Sidebar from './Sidebar';

const meta = {
  title: 'Widgets/Sidebar',
  component: Sidebar,
  decorators: [AppThemeProviderDecorator, StoreDecorator()],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightNotAuthorized = {} satisfies Story;

export const LightAuthorized = {
  decorators: StoreDecorator({
    user: { authData: { id: '1', username: 'user' } },
  }),
} satisfies Story;

export const DarkNotAuthorized = withOverriddenThemes({})() satisfies Story;

export const DarkAuthorized = withOverriddenThemes({
  decorators: StoreDecorator({
    user: { authData: { id: '1', username: 'user' } },
  }),
})() satisfies Story;
