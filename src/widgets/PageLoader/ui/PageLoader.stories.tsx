import withOverriddenThemes from '~/shared/config/storybook/helpers/withOverriddenThemes';
import { Meta, StoryObj } from '~/shared/lib/storybook/types';
import PageLoader from './PageLoader';

const meta = {
  title: 'Widgets/PageLoader',
  component: PageLoader,
} satisfies Meta<typeof PageLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;

export const Dark = withOverriddenThemes({})() satisfies Story;
