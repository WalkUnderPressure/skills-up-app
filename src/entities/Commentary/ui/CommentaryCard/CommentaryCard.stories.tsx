import withOverriddenThemes from '~/shared/config/storybook/helpers/withOverriddenThemes';
import MockCommentaries from '~/entities/Commentary/mock/MockCommentaries';
import { Meta, StoryObj } from '~/shared/lib/storybook/types';
import CommentaryCard from './CommentaryCard';

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
