import type { Meta, StoryObj } from '@storybook/react';

import withOverriddenThemes from 'shared/config/storybook/helpers/withOverriddenThemes';
import CommentaryList from './CommentaryList';
import MockCommentaries from 'entities/Commentary/mock/MockCommentaries';

const meta = {
  title: 'Entities/Commentary/CommentaryList',
  component: CommentaryList,
  args: {
    commentaries: MockCommentaries,
  },
} satisfies Meta<typeof CommentaryList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;

export const DefaultDark = withOverriddenThemes<Story>({})() satisfies Story;

export const DefaultWithTitle = {
  args: {
    title: 'Another title for this block',
  },
} satisfies Story;

export const DefaultIsLoading = {
  args: {
    isLoading: true,
  },
} satisfies Story;

export const DefaultIsLoadingDark = withOverriddenThemes<Story>({
  args: {
    isLoading: true,
  },
})() satisfies Story;
