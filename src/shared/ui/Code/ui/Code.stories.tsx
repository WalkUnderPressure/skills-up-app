import type { Meta, StoryObj } from '@storybook/react';

import withOverriddenThemes from '~/shared/config/storybook/helpers/withOverriddenThemes';
import Code from './Code';

const meta = {
  title: 'Shared/Code',
  component: Code,
  args: {
    text:
      'export default meta;\n' +
      'type Story = StoryObj<typeof meta>;\n' +
      '\n' +
      'export const Default = {} satisfies Story;\n' +
      '\n' +
      'export const DefaultDark = withOverriddenThemes<Story>({\n' +
      '  args: {\n' +
      "    className: '',\n" +
      '  },\n' +
      '})() satisfies Story;\n',
  },
} satisfies Meta<typeof Code>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;

export const DefaultDark = withOverriddenThemes<Story>({})() satisfies Story;
