import type { Meta, StoryObj } from '@storybook/react';

import withOverriddenThemes from 'shared/config/storybook/helpers/withOverriddenThemes';
// { AdminPanelPageProps }
import AdminPanelPage from '.';

const meta = {
  title: 'Pages/AdminPanelPage',
  component: AdminPanelPage,
  args: {},
} satisfies Meta<typeof AdminPanelPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light = {} satisfies Story;

export const Dark = withOverriddenThemes({})() satisfies Story;
