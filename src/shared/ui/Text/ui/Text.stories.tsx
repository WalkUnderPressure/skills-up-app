import type { Meta, StoryObj } from '@storybook/react';

import withOverriddenThemes from 'shared/config/storybook/helpers/withOverriddenThemes';
import { TextTheme } from '../types';
import Text from './Text';

const DEFAULT_TITLE = 'New lorem post title';
const DEFAULT_TEXT =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus mollitia sapiente adipisci nisi consectetur asperiores dignissimos? Modi consectetur, quam, sequi accusantium, repellat quidem sed dolorem sit similique ad veritatis excepturi?';

const meta = {
  title: 'Shared/Text',
  component: Text,
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultWithTitleAndText: Story = {
  args: {
    title: DEFAULT_TITLE,
    text: DEFAULT_TEXT,
  },
};

export const ErrorWithTitleAndText: Story = {
  args: {
    title: DEFAULT_TITLE,
    text: DEFAULT_TEXT,
    theme: TextTheme.ERROR,
  },
};

export const DefaultOnlyTitle: Story = {
  args: {
    title: DEFAULT_TITLE,
  },
};

export const DefaultOnlyText: Story = {
  args: {
    text: DEFAULT_TEXT,
  },
};

export const DefaultWithTitleAndTextDark: Story = withOverriddenThemes<Story>({
  args: {
    title: DEFAULT_TITLE,
    text: DEFAULT_TEXT,
  },
})();

export const ErrorWithTitleAndTextDark: Story = withOverriddenThemes<Story>({
  args: {
    title: DEFAULT_TITLE,
    text: DEFAULT_TEXT,
    theme: TextTheme.ERROR,
  },
})();

export const DefaultOnlyTitleDark: Story = withOverriddenThemes<Story>({
  args: {
    title: DEFAULT_TITLE,
  },
})();

export const DefaultOnlyTextDark: Story = withOverriddenThemes<Story>({
  args: {
    text: DEFAULT_TEXT,
  },
})();
