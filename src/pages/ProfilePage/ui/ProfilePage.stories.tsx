import type { Meta, StoryObj } from '@storybook/react';

import withOverriddenThemes from 'shared/config/storybook/helpers/withOverriddenThemes';
import StoreDecorator from 'shared/config/storybook/decorators/StoreDecorator';
import ProfilePage from './ProfilePage';

const meta = {
  title: 'Pages/ProfilePage',
  component: ProfilePage,
  decorators: [StoreDecorator()],
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;

export const DefaultDark = withOverriddenThemes({})() satisfies Story;
