/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';

import withOverriddenThemes from '~/shared/config/storybook/helpers/withOverriddenThemes';
import Popover from '.';
import { Button, ButtonRounded, ButtonTheme } from '~/shared/ui/Button';

const meta = {
  title: 'Shared/Popups/Popover',
  component: Popover,
  args: {
    trigger: (
      <Button theme={ButtonTheme.BG_INVERTED} rounded={ButtonRounded.M}>
        Open
      </Button>
    ),
    children: <span>Some content</span>,
  },
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light = {} satisfies Story;

export const Dark = withOverriddenThemes({})() satisfies Story;
