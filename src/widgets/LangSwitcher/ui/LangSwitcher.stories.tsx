import withOverriddenThemes from '~/shared/config/storybook/helpers/withOverriddenThemes';
import { Meta, StoryObj } from '~/shared/lib/storybook/types';
import LangSwitcher from './LangSwitcher';

const meta = {
  title: 'Widgets/LangSwitcher',
  component: LangSwitcher,
} satisfies Meta<typeof LangSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;

export const Dark = withOverriddenThemes({})() satisfies Story;
