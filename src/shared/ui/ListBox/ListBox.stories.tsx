import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import withOverriddenThemes from 'shared/config/storybook/helpers/withOverriddenThemes';
import ListBox, { ListBoxProps, ListBoxItem } from '.';

const ITEMS: Array<ListBoxItem> = [
  {
    value: 'v_one',
    content: 'one',
  },
  {
    value: 'v_two',
    content: 'two',
    disabled: true,
  },
  {
    value: 'v_three',
    content: 'three',
  },
];

const RenderListBox = (props: ListBoxProps) => {
  const [value, setValue] = useState(props.value ?? props.defaultValue);

  return <ListBox {...props} value={value} onChange={setValue} />;
};

const meta = {
  title: 'Shared/ListBox',
  component: ListBox,
  args: {
    label: 'Select item',
    defaultValue: ITEMS[2].value,
    items: ITEMS,
  },
  render: RenderListBox,
} satisfies Meta<typeof ListBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light = {} satisfies Story;

export const Dark = withOverriddenThemes({})() satisfies Story;
