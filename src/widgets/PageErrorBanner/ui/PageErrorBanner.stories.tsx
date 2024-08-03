import type { Meta, StoryObj } from '@storybook/react';

import PageErrorBanner from './PageErrorBanner';

const meta = {
  title: 'Widgets/PageErrorBanner',
  component: PageErrorBanner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PageErrorBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
