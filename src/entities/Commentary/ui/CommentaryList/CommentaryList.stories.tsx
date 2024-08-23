import type { Meta, StoryObj } from '@storybook/react';

import withOverriddenThemes from 'shared/config/storybook/helpers/withOverriddenThemes';
import CommentaryList from './CommentaryList';

const meta = {
  title: 'Shared/CommentaryList',
  component: CommentaryList,
} satisfies Meta<typeof CommentaryList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;

export const DefaultDark = withOverriddenThemes<Story>({})() satisfies Story;
