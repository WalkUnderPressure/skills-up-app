import { Meta, StoryObj } from '~/shared/lib/storybook/types';

import withOverriddenThemes from '~/shared/config/storybook/helpers/withOverriddenThemes';
import Avatar from './Avatar';

import RomeImg from '~/shared/assets/images/rome.jpg';

const meta = {
  title: 'Shared/Deprecated/Avatar',
  component: Avatar,
  args: {
    src: RomeImg,
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;

export const DefaultDark = withOverriddenThemes<Story>({})() satisfies Story;

export const SizeXS = {
  args: {
    size: 'xs',
  },
} satisfies Story;

export const SizeS = {
  args: {
    size: 's',
  },
} satisfies Story;

export const SizeM = {
  args: {
    size: 'm',
  },
} satisfies Story;

export const SizeL = {
  args: {
    size: 'l',
  },
} satisfies Story;

export const SizeXL = {
  args: {
    size: 'xl',
  },
} satisfies Story;
