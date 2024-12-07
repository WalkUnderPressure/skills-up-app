import type { Meta, StoryObj } from '@storybook/react';

import withOverriddenThemes from '~/shared/config/storybook/helpers/withOverriddenThemes';
import PostTagsTabs from '.';

const meta = {
  title: 'Features/PostTagsTabs',
  component: PostTagsTabs,
  args: {
    value: 'ALL',
    onChangeTab: () => {},
  },
} satisfies Meta<typeof PostTagsTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light = {} satisfies Story;

export const Dark = withOverriddenThemes({})() satisfies Story;
