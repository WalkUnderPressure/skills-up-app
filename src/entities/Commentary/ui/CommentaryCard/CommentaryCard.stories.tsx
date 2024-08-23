import type { Meta, StoryObj } from '@storybook/react';

import withOverriddenThemes from 'shared/config/storybook/helpers/withOverriddenThemes';
import CommentaryCard from './CommentaryCard';

const meta = {
  title: 'Shared/CommentaryCard',
  component: CommentaryCard,
} satisfies Meta<typeof CommentaryCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;

export const DefaultDark = withOverriddenThemes<Story>({})() satisfies Story;
