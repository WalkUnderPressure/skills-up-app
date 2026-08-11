import { Meta, StoryObj } from '~/shared/lib/storybook/types';

import withOverriddenThemes from '~/shared/config/storybook/helpers/withOverriddenThemes';
import AppLink from './AppLink';

const meta = {
  title: 'Shared/Redesigned/AppLink',
  component: AppLink,
  args: {
    to: '/',
    children: 'Read more',
  },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary = {} satisfies Story;

export const PrimaryDark = withOverriddenThemes({})() satisfies Story;

export const Secondary = {
  args: {
    variant: 'secondary',
  },
} satisfies Story;

export const SecondaryDark = withOverriddenThemes<Story>({
  args: {
    variant: 'secondary',
  },
})() satisfies Story;

export const Warning = {
  args: {
    variant: 'warning',
  },
} satisfies Story;

export const WarningDark = withOverriddenThemes<Story>({
  args: {
    variant: 'warning',
  },
})() satisfies Story;
