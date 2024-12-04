import type { Meta, StoryObj } from '@storybook/react';

import withOverriddenThemes from '~/shared/config/storybook/helpers/withOverriddenThemes';
import CommentaryCard from './CommentaryCard';
import MockCommentaries from '~/entities/Commentary/mock/MockCommentaries';

const meta = {
  title: 'Entities/Commentary/CommentaryCard',
  component: CommentaryCard,
  args: {
    commentary: MockCommentaries[0],
  },
} satisfies Meta<typeof CommentaryCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;

export const DefaultDark = withOverriddenThemes<Story>({})() satisfies Story;
