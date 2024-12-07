import type { Meta, StoryObj } from '@storybook/react';

import withOverriddenThemes from '~/shared/config/storybook/helpers/withOverriddenThemes';
import PostSortSelector from '.';

const meta = {
  title: 'Features/PostSortSelector',
  component: PostSortSelector,
  args: {
    sortField: 'title',
    sortOrder: 'asc',
  },
} satisfies Meta<typeof PostSortSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light = {} satisfies Story;

export const Dark = withOverriddenThemes({})() satisfies Story;
