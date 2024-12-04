import type { Meta, StoryObj } from '@storybook/react';

import withOverriddenThemes from '~/shared/config/storybook/helpers/withOverriddenThemes';
import Select, { SelectTheme, SelectOption } from './Select';

const SELECT_OPTIONS: Array<SelectOption> = [
  { label: 'North', value: 'n' },
  { label: 'South', value: 's' },
  { label: 'East', value: 'e' },
  { label: 'West', value: 'w' },
];

const meta = {
  title: 'Shared/Select',
  component: Select,
  args: {
    options: SELECT_OPTIONS,
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;

export const DefaultDisabled = {
  args: {
    disabled: true,
  },
} satisfies Story;

export const DefaultDark = withOverriddenThemes<Story>({})() satisfies Story;

export const DefaultDarkDisabled = withOverriddenThemes<Story>({
  args: {
    disabled: true,
  },
})() satisfies Story;

export const DefaultInverted = {
  args: {
    theme: SelectTheme.INVERTED,
  },
} satisfies Story;

export const DefaultDarkInverted = withOverriddenThemes<Story>({
  args: {
    theme: SelectTheme.INVERTED,
  },
})() satisfies Story;
