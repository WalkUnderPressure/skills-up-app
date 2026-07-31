import { Meta, StoryObj } from '~/shared/lib/storybook/types';

import withOverriddenThemes from '~/shared/config/storybook/helpers/withOverriddenThemes';
import { getMockPostCommentariesRequest } from '~/features/PostCommentaries/mock';
import PostCommentaries from '.';

const meta = {
  title: 'Features/PostCommentaries',
  component: PostCommentaries,
  args: {},
  parameters: {
    ...getMockPostCommentariesRequest,
  },
} satisfies Meta<typeof PostCommentaries>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light = {} satisfies Story;

export const Dark = withOverriddenThemes({})() satisfies Story;
