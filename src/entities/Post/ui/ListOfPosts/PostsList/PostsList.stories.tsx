import type { Meta, StoryObj } from '@storybook/react';

import withOverriddenThemes from 'shared/config/storybook/helpers/withOverriddenThemes';
import { MockPostsListData } from 'entities/Post/mock/MockPostsListData';
import { PostViewMap } from 'entities/Post/model/types/Post';
import PostsList from './PostsList';

const meta = {
  title: 'Entities/Blog/PostsList',
  component: PostsList,
  args: {
    posts: MockPostsListData,
    isLoading: false,
    viewType: PostViewMap.FULL,
  },
} satisfies Meta<typeof PostsList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FullItem = {} satisfies Story;

export const FullItemDark = withOverriddenThemes<Story>({})() satisfies Story;

export const ShortItem = {
  args: {
    viewType: PostViewMap.SHORT,
  },
} satisfies Story;

export const ShortItemDark = withOverriddenThemes<Story>({
  args: {
    viewType: PostViewMap.SHORT,
  },
})() satisfies Story;

export const FullItemLoading = {
  args: {
    isLoading: true,
    viewType: PostViewMap.FULL,
  },
} satisfies Story;

export const FullItemLoadingDark = withOverriddenThemes<Story>({
  args: {
    isLoading: true,
    viewType: PostViewMap.FULL,
  },
})() satisfies Story;

export const ShortItemLoading = {
  args: {
    isLoading: true,
    viewType: PostViewMap.SHORT,
  },
} satisfies Story;

export const ShortItemLoadingDark = withOverriddenThemes<Story>({
  args: {
    isLoading: true,
    viewType: PostViewMap.SHORT,
  },
})() satisfies Story;
