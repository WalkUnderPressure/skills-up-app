import type { Meta, StoryObj } from '@storybook/react';

import { getOverriddenRequest } from '~/shared/config/storybook/helpers/withOverriddenRequest';
import withOverriddenThemes from '~/shared/config/storybook/helpers/withOverriddenThemes';
import ComponentBackground from '~/shared/config/storybook/ui/ComponentBackground';
import StoreDecorator from '~/shared/config/storybook/decorators/StoreDecorator';
import MockNotifications from '~/entities/Notification/mock';
import NotificationCenter from '.';

const meta = {
  title: 'Features/NotificationCenter',
  component: NotificationCenter,
  args: {},
  decorators: [StoreDecorator({})],
  render: () => {
    return (
      <ComponentBackground style={{ marginBottom: 'auto' }}>
        <NotificationCenter />
      </ComponentBackground>
    );
  },
  parameters: {
    ...getOverriddenRequest({
      method: 'GET',
      // like here: useNotifications
      url: '/notifications/?_limit=10',
      response: MockNotifications,
    }),
  },
} satisfies Meta<typeof NotificationCenter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light = {} satisfies Story;

export const Dark = withOverriddenThemes({})() satisfies Story;
