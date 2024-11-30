import type { Meta, StoryObj } from '@storybook/react';

import withOverriddenThemes from 'shared/config/storybook/helpers/withOverriddenThemes';
// { ForbiddenPageProps }
import ForbiddenPage from '.';

const meta = {
  title: 'Pages/ForbiddenPage',
  component: ForbiddenPage,
  args: {},
} satisfies Meta<typeof ForbiddenPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light = {} satisfies Story;

export const Dark = withOverriddenThemes({})() satisfies Story;
