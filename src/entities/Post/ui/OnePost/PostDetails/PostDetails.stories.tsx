import type { Meta, StoryObj } from '@storybook/react';

import withOverriddenThemes from '~/shared/config/storybook/helpers/withOverriddenThemes';
import StoreDecorator from '~/shared/config/storybook/decorators/StoreDecorator';
import { MockPostDetailsData } from '~/entities/Post/mock/MockPostDetailsData';
import { ThemesMap } from '~/app/providers/ThemeProvider';
import PostDetails from '.';

const meta = {
  title: 'Entities/Blog/PostDetails',
  component: PostDetails,
  args: {
    postId: MockPostDetailsData.id,
  },
  decorators: [StoreDecorator({ postDetails: { data: MockPostDetailsData } })],
} satisfies Meta<typeof PostDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;

export const DefaultDark = withOverriddenThemes<Story>({})() satisfies Story;

export const DefaultLime = withOverriddenThemes<Story>({})(ThemesMap.Lime) satisfies Story;

export const DefaultLoading = {
  decorators: [StoreDecorator({ postDetails: { isLoading: true } })],
} satisfies Story;

export const DefaultError = {
  decorators: [StoreDecorator({ postDetails: { error: 'NOT_FOUND' } })],
} satisfies Story;
