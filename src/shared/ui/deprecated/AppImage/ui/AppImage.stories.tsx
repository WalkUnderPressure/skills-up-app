/* eslint-disable i18next/no-literal-string */
import { Meta, StoryObj } from '~/shared/lib/storybook/types';

import AppImage from '.';

const meta = {
  title: 'Shared/Deprecated/AppImage',
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

export const ImageWithSrc = {
  args: {
    src: '/mock/science.avif',
  },
} satisfies Story;
