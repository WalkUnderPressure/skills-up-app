import type { Meta, StoryObj } from '@storybook/react';

import Input from './Input';

const meta = {
  title: 'Shared/Input',
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SimpleInput: Story = {};

export const SimpleInputWithValue: Story = {
  args: {
    value: 'admin',
  },
};

export const SimpleInputWithValueFocused: Story = {
  args: {
    value: 'admin',
    autoFocus: true,
  },
};

export const SimpleInputFocused: Story = {
  args: {
    autoFocus: true,
  },
};

export const SimpleInputError: Story = {
  args: {
    errorMessage: 'Invalid username',
  },
};

export const SimpleInputErrorFocused: Story = {
  args: {
    autoFocus: true,
    errorMessage: 'Invalid username',
  },
};

export const InputWithLabel: Story = {
  args: {
    label: 'Username',
  },
};

export const InputWithLabelWithValue: Story = {
  args: {
    label: 'Username',
    value: 'admin',
  },
};

export const InputWithLabelWithValueFocused: Story = {
  args: {
    label: 'Username',
    value: 'admin',
    autoFocus: true,
  },
};

export const InputWithLabelFocused: Story = {
  args: {
    label: 'Username',
    autoFocus: true,
  },
};

export const InputWithLabelError: Story = {
  args: {
    label: 'Username',
    errorMessage: 'Invalid username',
  },
};

export const InputWithLabelErrorFocused: Story = {
  args: {
    label: 'Username',
    errorMessage: 'Invalid username',
    autoFocus: true,
  },
};
