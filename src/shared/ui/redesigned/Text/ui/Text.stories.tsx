import withOverriddenThemes from '~/shared/config/storybook/helpers/withOverriddenThemes';
import { Meta, StoryObj } from '~/shared/lib/storybook/types';
import Text from './Text';

const DEFAULT_TITLE = 'New lorem post title';
const DEFAULT_TEXT =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus mollitia sapiente adipisci nisi consectetur asperiores dignissimos? Modi consectetur, quam, sequi accusantium, repellat quidem sed dolorem sit similique ad veritatis excepturi?';

const meta = {
  title: 'Shared/Deprecated/Text',
  component: Text,
  args: {
    title: DEFAULT_TITLE,
    text: DEFAULT_TEXT,
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultWithTitleAndText = {} satisfies Story;

export const DefaultTextP = {
  args: {
    title: '',
    asText: 'p',
  },
} satisfies Story;

export const DefaultTextSpan = {
  args: {
    title: '',
    asText: 'span',
  },
} satisfies Story;

export const DefaultTitleH1 = {
  args: {
    text: '',
    asTitle: 'h1',
  },
} satisfies Story;

export const DefaultTitleH2 = {
  args: {
    text: '',
    asTitle: 'h2',
  },
} satisfies Story;

export const DefaultTitleH3 = {
  args: {
    text: '',
    asTitle: 'h3',
  },
} satisfies Story;

export const ErrorWithTitleAndText = {
  args: {
    variant: 'error',
  },
} satisfies Story;

export const DefaultOnlyTitle = {
  args: {
    text: '',
    title: DEFAULT_TITLE,
  },
} satisfies Story;

export const DefaultOnlyText = {
  args: {
    title: '',
    text: DEFAULT_TEXT,
  },
} satisfies Story;

export const DefaultWithTitleAndTextDark = withOverriddenThemes<Story>({})() satisfies Story;

export const ErrorWithTitleAndTextDark = withOverriddenThemes<Story>({
  args: {
    variant: 'error',
  },
})() satisfies Story;

export const DefaultOnlyTitleDark = withOverriddenThemes<Story>({
  args: {
    text: '',
    title: DEFAULT_TITLE,
  },
})() satisfies Story;

export const DefaultOnlyTextDark = withOverriddenThemes<Story>({
  args: {
    title: '',
    text: DEFAULT_TEXT,
  },
})() satisfies Story;
