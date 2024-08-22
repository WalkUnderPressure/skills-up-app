import type { Meta, StoryObj } from '@storybook/react';

import withOverriddenThemes from 'shared/config/storybook/helpers/withOverriddenThemes';
import Skeleton, { SkeletonThemes } from './Skeleton';

const meta = {
  title: 'Shared/Skeleton',
  component: Skeleton,
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;

export const DefaultDark = withOverriddenThemes<Story>({})() satisfies Story;

export const Circle = {
  args: {
    theme: SkeletonThemes.CIRCLE,
  },
} satisfies Story;

export const CircleDark = withOverriddenThemes<Story>({
  args: {
    theme: SkeletonThemes.CIRCLE,
  },
})() satisfies Story;
