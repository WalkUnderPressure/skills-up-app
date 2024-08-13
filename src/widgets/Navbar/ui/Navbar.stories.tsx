import type { Meta, StoryObj } from '@storybook/react';

import StoreDecorator from 'shared/config/storybook/decorators/StoreDecorator';
import Navbar from './Navbar';

const meta = {
  title: 'Widgets/Navbar',
  component: Navbar,
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Authorized: Story = {
  decorators: StoreDecorator({ user: { authData: { id: 1, username: 'moderator' } } }),
};

export const NotAuthorized: Story = {
  decorators: StoreDecorator({
    user: { authData: null },
    'sign-in_username': { username: 'admin', password: '12345' },
  }),
};
