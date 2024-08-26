import type { Meta, StoryObj } from '@storybook/react';

import withOverriddenThemes from 'shared/config/storybook/helpers/withOverriddenThemes';
import { MockPostDetailsData } from 'entities/Post/mock/MockPostDetailsData';
import { PostsViewType } from 'entities/Post/model/types/Post';
import PostListItem from './PostListItem';

const meta = {
  title: 'Entities/Blog/PostListItem',
  component: PostListItem,
  args: {
    post: MockPostDetailsData,
    isLoading: false,
    viewType: PostsViewType.FULL,
  },
} satisfies Meta<typeof PostListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FullItem = {} satisfies Story;

export const FullItemDark = withOverriddenThemes<Story>({})() satisfies Story;

export const ShortItem = {
  args: {
    viewType: PostsViewType.SHORT,
  },
} satisfies Story;

export const ShortItemDark = withOverriddenThemes<Story>({
  args: {
    viewType: PostsViewType.SHORT,
  },
})() satisfies Story;

export const FullItemLoading = {
  args: {
    isLoading: true,
    viewType: PostsViewType.FULL,
  },
} satisfies Story;

export const FullItemLoadingDark = withOverriddenThemes<Story>({
  args: {
    isLoading: true,
    viewType: PostsViewType.FULL,
  },
})() satisfies Story;

export const ShortItemLoading = {
  args: {
    isLoading: true,
    viewType: PostsViewType.SHORT,
  },
} satisfies Story;

export const ShortItemLoadingDark = withOverriddenThemes<Story>({
  args: {
    isLoading: true,
    viewType: PostsViewType.SHORT,
  },
})() satisfies Story;
