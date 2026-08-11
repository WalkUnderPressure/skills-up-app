import { Meta, StoryObj } from '~/shared/lib/storybook/types';

import { fn } from '@storybook/test';

import Button from './Button';

const meta = {
  title: 'Shared/Redesigned/Button',
  component: Button,
  args: {
    children: 'Read more',
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;

export const DefaultDisabled = {
  args: {
    disabled: true,
  },
} satisfies Story;

export const Clear = {
  args: {
    variant: 'clear',
  },
} satisfies Story;

export const Outline = {
  args: {
    variant: 'outline',
  },
} satisfies Story;

export const Fill = {
  args: {
    variant: 'fill',
  },
} satisfies Story;
