import { Meta, StoryObj } from '~/shared/lib/storybook/types';

import withOverriddenThemes from '~/shared/config/storybook/helpers/withOverriddenThemes';
import StoreDecorator from '~/shared/config/storybook/decorators/StoreDecorator';
import HomePage from './HomePage';

const meta = {
  title: 'Pages/HomePage',
  component: HomePage,
  decorators: [StoreDecorator()],
} satisfies Meta<typeof HomePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;

export const DefaultDark = withOverriddenThemes({})() satisfies Story;
