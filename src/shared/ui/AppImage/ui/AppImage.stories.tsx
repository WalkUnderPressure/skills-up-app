/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';

import AppImage from '.';

const meta = {
  title: 'Shared/AppImage',
  component: AppImage,
  args: {
    src: '',
    Fallback: <div>Some image fallback</div>,
    ErrorFallback: <div>Some image error fallback</div>,
  },
} satisfies Meta<typeof AppImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;
