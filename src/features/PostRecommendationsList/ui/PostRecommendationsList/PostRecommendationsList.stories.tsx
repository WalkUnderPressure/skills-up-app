import type { Meta, StoryObj } from '@storybook/react';

import withOverriddenThemes from 'shared/config/storybook/helpers/withOverriddenThemes';
import PostRecommendationsList from '.';

const meta = {
  title: 'Features/PostRecommendationsList',
  component: PostRecommendationsList,
  args: {},
} satisfies Meta<typeof PostRecommendationsList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light = {} satisfies Story;

export const Dark = withOverriddenThemes({})() satisfies Story;
