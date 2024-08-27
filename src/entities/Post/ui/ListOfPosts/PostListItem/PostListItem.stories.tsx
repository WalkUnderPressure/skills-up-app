import type { Meta, StoryObj } from '@storybook/react';

import withOverriddenThemes from 'shared/config/storybook/helpers/withOverriddenThemes';
import { MockPostDetailsData } from 'entities/Post/mock/MockPostDetailsData';
import { PostViewMap } from 'entities/Post/model/types/Post';
import PostListItem from './PostListItem';

const meta = {
  title: 'Entities/Blog/PostListItem',
  component: PostListItem,
  args: {
    post: MockPostDetailsData,
    isLoading: false,
    viewType: PostViewMap.FULL,
  },
} satisfies Meta<typeof PostListItem>;

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
