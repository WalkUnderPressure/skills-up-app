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

export const DefaultWithTitleAndText = {
  args: {
    title: DEFAULT_TITLE,
    text: DEFAULT_TEXT,
  },
} satisfies Story;

export const ErrorWithTitleAndText = {
  args: {
    title: DEFAULT_TITLE,
    text: DEFAULT_TEXT,
    theme: TextTheme.ERROR,
  },
} satisfies Story;

export const DefaultOnlyTitle = {
  args: {
    title: DEFAULT_TITLE,
  },
} satisfies Story;

export const DefaultOnlyText = {
  args: {
    text: DEFAULT_TEXT,
  },
} satisfies Story;

export const DefaultWithTitleAndTextDark = withOverriddenThemes<Story>({
  args: {
    title: DEFAULT_TITLE,
    text: DEFAULT_TEXT,
  },
})() satisfies Story;

export const ErrorWithTitleAndTextDark = withOverriddenThemes<Story>({
  args: {
    title: DEFAULT_TITLE,
    text: DEFAULT_TEXT,
    theme: TextTheme.ERROR,
  },
})() satisfies Story;

export const DefaultOnlyTitleDark = withOverriddenThemes<Story>({
  args: {
    title: DEFAULT_TITLE,
  },
})() satisfies Story;

export const DefaultOnlyTextDark = withOverriddenThemes<Story>({
  args: {
    text: DEFAULT_TEXT,
  },
})() satisfies Story;
