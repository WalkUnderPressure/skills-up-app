import type { Meta, StoryObj } from '@storybook/react';

import Input from './Input';

const meta = {
  title: 'Shared/Input',
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SimpleInput = {} satisfies Story;

export const SimpleInputWithValue = {
  args: {
    value: 'admin',
  },
} satisfies Story;

export const SimpleInputWithValueFocused = {
  args: {
    value: 'admin',
    autoFocus: true,
  },
} satisfies Story;

export const SimpleInputFocused = {
  args: {
    autoFocus: true,
  },
} satisfies Story;

export const SimpleInputError = {
  args: {
    errorMessage: 'Invalid username',
  },
} satisfies Story;

export const SimpleInputErrorFocused = {
  args: {
    autoFocus: true,
    errorMessage: 'Invalid username',
  },
} satisfies Story;

export const InputWithLabel = {
  args: {
    label: 'Username',
  },
} satisfies Story;

export const InputWithLabelWithValue = {
  args: {
    label: 'Username',
    value: 'admin',
  },
} satisfies Story;

export const InputWithLabelWithValueFocused = {
  args: {
    label: 'Username',
    value: 'admin',
    autoFocus: true,
  },
} satisfies Story;

export const InputWithLabelFocused = {
  args: {
    label: 'Username',
    autoFocus: true,
  },
} satisfies Story;

export const InputWithLabelError = {
  args: {
    label: 'Username',
    errorMessage: 'Invalid username',
  },
} satisfies Story;

export const InputWithLabelErrorFocused = {
  args: {
    label: 'Username',
    errorMessage: 'Invalid username',
    autoFocus: true,
  },
} satisfies Story;
