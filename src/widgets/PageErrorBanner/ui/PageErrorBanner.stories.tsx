import type { Meta, StoryObj } from '@storybook/react';

import PageErrorBanner from './PageErrorBanner';

const meta = {
  title: 'Widgets/PageErrorBanner',
  component: PageErrorBanner,
} satisfies Meta<typeof PageErrorBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
