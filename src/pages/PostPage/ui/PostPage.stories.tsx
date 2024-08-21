import type { Meta, StoryObj } from '@storybook/react';

import withOverriddenThemes from 'shared/config/storybook/helpers/withOverriddenThemes';
import PostPage from './PostPage';

const meta = {
  title: 'Pages/PostPage',
  component: PostPage,
} satisfies Meta<typeof PostPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;

export const DefaultDark = withOverriddenThemes<Story>({})() satisfies Story;
