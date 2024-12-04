import type { Meta, StoryObj } from '@storybook/react';

import withOverriddenThemes from '~/shared/config/storybook/helpers/withOverriddenThemes';
import StoreDecorator from '~/shared/config/storybook/decorators/StoreDecorator';
import { MockPostsListData } from '~/entities/Post/mock/MockPostsListData';
import { blogPostsAdapter } from '../../model/slices/blogPageSlice';
import BlogPage from './BlogPage';

const POSTS = blogPostsAdapter.setAll({ entities: {}, ids: [] }, MockPostsListData);

const meta = {
  title: 'Pages/BlogPage',
  component: BlogPage,
  decorators: [
    StoreDecorator({
      blogPage: {
        ...POSTS,
      },
    }),
  ],
} satisfies Meta<typeof BlogPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;

export const DefaultDark = withOverriddenThemes<Story>({})() satisfies Story;
