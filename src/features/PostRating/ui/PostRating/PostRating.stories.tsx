import type { Meta, StoryObj } from '@storybook/react';

import withOverriddenThemes from '~/shared/config/storybook/helpers/withOverriddenThemes';
import PostRating from '.';

const meta = {
  title: 'Features/PostRating',
  component: PostRating,
  args: {},
} satisfies Meta<typeof PostRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light = {} satisfies Story;

export const Dark = withOverriddenThemes({})() satisfies Story;
