import type { Meta, StoryObj } from '@storybook/react';

import withOverriddenThemes from '~/shared/config/storybook/helpers/withOverriddenThemes';
import { MockPostsListData } from '~/entities/Post/mock/MockPostsListData';
import { PostViewMap } from '~/entities/Post/model/types/Post';
import PostsList, { PostsListProps } from './PostsList';
import { VStack } from '~/shared/ui/Stack';

const ItemLoadingRender = (props: PostsListProps) => {
  const TITLE = 'Scroll down to see loaders';

  return (
    <VStack fullW gap="32">
      <h1>{TITLE}</h1>
      <PostsList {...props} />
    </VStack>
  );
};

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
  render: ItemLoadingRender,
} satisfies Story;

export const FullItemLoadingDark = withOverriddenThemes<Story>({
  args: {
    isLoading: true,
    viewType: PostViewMap.FULL,
  },
  render: ItemLoadingRender,
})() satisfies Story;

export const ShortItemLoading = {
  args: {
    isLoading: true,
    viewType: PostViewMap.SHORT,
  },
  render: ItemLoadingRender,
} satisfies Story;

export const ShortItemLoadingDark = withOverriddenThemes<Story>({
  args: {
    isLoading: true,
    viewType: PostViewMap.SHORT,
  },
  render: ItemLoadingRender,
})() satisfies Story;
