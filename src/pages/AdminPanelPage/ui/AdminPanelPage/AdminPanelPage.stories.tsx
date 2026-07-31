import { Meta, StoryObj } from '~/shared/lib/storybook/types';

import withOverriddenThemes from '~/shared/config/storybook/helpers/withOverriddenThemes';
import StoreDecorator from '~/shared/config/storybook/decorators/StoreDecorator';
import AdminPanelPage from '.';

const meta = {
  title: 'Pages/AdminPanelPage',
  component: AdminPanelPage,
  args: {},
  decorators: [StoreDecorator()],
} satisfies Meta<typeof AdminPanelPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light = {} satisfies Story;

export const Dark = withOverriddenThemes({})() satisfies Story;
