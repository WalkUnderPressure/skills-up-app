import type { Meta, StoryObj } from '@storybook/react';

import withOverriddenThemes from 'shared/config/storybook/helpers/withOverriddenThemes';
import StoreDecorator from 'shared/config/storybook/decorators/StoreDecorator';
import AddCommentaryForm from './AddCommentaryForm';

const meta = {
  title: 'Features/AddCommentaryForm',
  component: AddCommentaryForm,
  args: {
    onSendCommentary: () => {},
  },
  decorators: [
    StoreDecorator({
      addCommentaryForm: {
        text: 'Comment text',
      },
    }),
  ],
} satisfies Meta<typeof AddCommentaryForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;

export const DefaultDark = withOverriddenThemes<Story>({
  args: {
    className: '',
  },
})() satisfies Story;
