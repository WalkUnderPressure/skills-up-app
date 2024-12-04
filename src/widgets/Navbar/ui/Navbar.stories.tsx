import type { Meta, StoryObj } from '@storybook/react';

import StoreDecorator from '~/shared/config/storybook/decorators/StoreDecorator';
import Navbar from './Navbar';

const meta = {
  title: 'Widgets/Navbar',
  component: Navbar,
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Authorized = {
  decorators: StoreDecorator({ user: { authData: { id: '1', username: 'moderator' } } }),
} satisfies Story;

export const NotAuthorized = {
  decorators: StoreDecorator({
    user: { authData: null },
    'sign-in_username': { username: 'admin', password: '12345' },
  }),
} satisfies Story;
