/* eslint-disable i18next/no-literal-string */
import withOverriddenThemes from '~/shared/config/storybook/helpers/withOverriddenThemes';
import ComponentBackground from '~/shared/config/storybook/ui/ComponentBackground';
import StoreDecorator from '~/shared/config/storybook/decorators/StoreDecorator';
import { Meta, StoryObj } from '~/shared/lib/storybook/types';
import AccountMenu, { AccountMenuProps } from '.';

const meta = {
  title: 'Features/AccountMenu',
  component: AccountMenu,
  args: {},
  decorators: [
    StoreDecorator({ user: { authData: { id: '1', username: 'Admin', roles: ['ADMIN'] } } }),
  ],
  render: (props: AccountMenuProps) => {
    return (
      <ComponentBackground>
        <h1>Click for open</h1>

        <AccountMenu {...props} />
      </ComponentBackground>
    );
  },
} satisfies Meta<typeof AccountMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light = {} satisfies Story;

export const Dark = withOverriddenThemes({})() satisfies Story;
