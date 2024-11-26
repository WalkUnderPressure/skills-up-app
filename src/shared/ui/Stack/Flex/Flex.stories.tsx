/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';

import Flex from '.';

const meta = {
  title: 'Shared/Flex',
  component: Flex,
  args: {
    direction: 'row',
    children: (
      <>
        <div>[Block]</div>
        <div>[Block]</div>
        <div>[Block]</div>
        <div>[Block]</div>
      </>
    ),
  },
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Row = {} satisfies Story;

export const RowGap4 = {
  args: {
    gap: '4',
  },
} satisfies Story;

export const RowGap8 = {
  args: {
    gap: '8',
  },
} satisfies Story;

export const RowGap16 = {
  args: {
    gap: '16',
  },
} satisfies Story;

export const RowGap24 = {
  args: {
    gap: '24',
  },
} satisfies Story;

export const RowGap32 = {
  args: {
    gap: '32',
  },
} satisfies Story;

export const RowGap48 = {
  args: {
    gap: '48',
  },
} satisfies Story;

export const Column = {
  args: {
    direction: 'column',
  },
} satisfies Story;

export const ColumnGap16 = {
  args: {
    gap: '16',
    direction: 'column',
  },
} satisfies Story;

export const ColumnAlignEnd = {
  args: {
    gap: '32',
    direction: 'column',
    align: 'end',
  },
} satisfies Story;
