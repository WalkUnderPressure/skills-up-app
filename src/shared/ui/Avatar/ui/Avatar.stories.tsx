import type { Meta, StoryObj } from '@storybook/react';

import withOverriddenThemes from '~/shared/config/storybook/helpers/withOverriddenThemes';
import Avatar, { AvatarSize } from './Avatar';

import RomeImg from '~/shared/assets/images/rome.jpg';

const meta = {
  title: 'Shared/Avatar',
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
    size: AvatarSize.XS,
  },
} satisfies Story;

export const SizeS = {
  args: {
    size: AvatarSize.S,
  },
} satisfies Story;

export const SizeM = {
  args: {
    size: AvatarSize.M,
  },
} satisfies Story;

export const SizeL = {
  args: {
    size: AvatarSize.L,
  },
} satisfies Story;

export const SizeXL = {
  args: {
    size: AvatarSize.XL,
  },
} satisfies Story;
