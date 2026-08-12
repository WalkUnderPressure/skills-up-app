import { Meta, StoryObj } from '~/shared/lib/storybook/types';

import withOverriddenThemes from '~/shared/config/storybook/helpers/withOverriddenThemes';
import Skeleton from './Skeleton';

const meta = {
  title: 'Shared/Deprecated/Skeleton',
  component: Skeleton,
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;

export const DefaultDark = withOverriddenThemes<Story>({})() satisfies Story;

export const Circle = {
  args: {
    variant: 'circle',
  },
} satisfies Story;

export const CircleDark = withOverriddenThemes<Story>({
  args: {
    variant: 'circle',
  },
})() satisfies Story;
