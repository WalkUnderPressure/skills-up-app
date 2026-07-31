import { Meta, StoryObj } from '~/shared/lib/storybook/types';

import withOverriddenThemes from '~/shared/config/storybook/helpers/withOverriddenThemes';
import StoreDecorator from '~/shared/config/storybook/decorators/StoreDecorator';
import { ThemesMap } from '~/app/providers/ThemeProvider';
import PostDetails from '.';
import { getMockPostRequest } from '~/pages/PostPage/mock/MockPostRequest';

const POST_ID = '1';

const meta = {
  title: 'Entities/Blog/PostDetails',
  component: PostDetails,
  args: {
    postId: POST_ID,
  },
  decorators: [StoreDecorator({})],
  parameters: {
    ...getMockPostRequest(POST_ID),
  },
} satisfies Meta<typeof PostDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;

export const DefaultDark = withOverriddenThemes<Story>({})() satisfies Story;

export const DefaultLime = withOverriddenThemes<Story>({})(ThemesMap.Lime) satisfies Story;

export const DefaultLoading = {
  args: {
    postId: '',
  },
  decorators: [StoreDecorator({ postDetails: { isLoading: true } })],
} satisfies Story;

export const DefaultError = {
  args: {
    postId: '',
  },
  decorators: [StoreDecorator({ postDetails: { error: 'NOT_FOUND' } })],
} satisfies Story;
