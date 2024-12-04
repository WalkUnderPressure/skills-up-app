/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';

import withOverriddenThemes from '~/shared/config/storybook/helpers/withOverriddenThemes';
import Dropdown, { DropdownItem } from '.';
import { Button, ButtonRounded, ButtonTheme } from '~/shared/ui/Button';

const fn = (index: number | string) => () => console.log(`click on: ${index}`);

const ITEMS: Array<DropdownItem> = [
  {
    id: 1,
    content: 'one',
    onClick: fn(1),
  },
  {
    id: 2,
    content: 'two',
    disabled: true,
    onClick: fn(2),
  },
  {
    id: 3,
    content: 'three',
    onClick: fn(3),
  },
];

const meta = {
  title: 'Shared/Popups/Dropdown',
  component: Dropdown,
  args: {
    trigger: (
      <Button theme={ButtonTheme.BG_INVERTED} rounded={ButtonRounded.M}>
        Open
      </Button>
    ),
    items: ITEMS,
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light = {} satisfies Story;

export const Dark = withOverriddenThemes({})() satisfies Story;
