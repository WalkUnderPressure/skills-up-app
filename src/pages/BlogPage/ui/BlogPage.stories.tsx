import type { Meta, StoryObj } from '@storybook/react';

import withOverriddenThemes from 'shared/config/storybook/helpers/withOverriddenThemes';
import BlogPage from './BlogPage';

const meta = {
  title: 'Pages/BlogPage',
  component: BlogPage,
} satisfies Meta<typeof BlogPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;

export const DefaultDark = withOverriddenThemes<Story>({})() satisfies Story;
