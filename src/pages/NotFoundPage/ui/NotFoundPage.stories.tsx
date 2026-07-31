import { Meta, StoryObj } from '~/shared/lib/storybook/types';

import withOverriddenThemes from '~/shared/config/storybook/helpers/withOverriddenThemes';
import StoreDecorator from '~/shared/config/storybook/decorators/StoreDecorator';
import NotFoundPage from './NotFoundPage';

const meta = {
  title: 'Pages/NotFoundPage',
  component: NotFoundPage,
  decorators: [StoreDecorator()],
} satisfies Meta<typeof NotFoundPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;

export const DefaultDark = withOverriddenThemes({})() satisfies Story;
