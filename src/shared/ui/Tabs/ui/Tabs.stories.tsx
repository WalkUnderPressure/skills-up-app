import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import withOverriddenThemes from 'shared/config/storybook/helpers/withOverriddenThemes';
import Tabs from './Tabs';

const meta = {
  title: 'Shared/Tabs',
  component: Tabs,
  args: {
    tabs: [
      {
        value: 'tab_1',
        content: 'Some tab one',
      },
      {
        value: 'tab_2',
        content: 'Second tab',
      },
      {
        value: 'tab_3',
        content: 'Selected tab',
      },
    ],
    value: 'tab_3',
    onTabClick: action('onTabClick'),
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;

export const DefaultDark = withOverriddenThemes<Story>({})() satisfies Story;
