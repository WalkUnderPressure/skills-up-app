import type { Meta, StoryObj } from '@storybook/react';

import MockPostRecommendationsRequest from '~/features/PostRecommendationsList/mock/MockPostRecommendationsRequest';
import withOverriddenThemes from '~/shared/config/storybook/helpers/withOverriddenThemes';
import { MockPostDetailsData } from '~/entities/Post/mock/MockPostDetailsData';
import StoreDecorator from '~/shared/config/storybook/decorators/StoreDecorator';
import PostPage from './PostPage';

// TODO: Add tests for selectors, slice, service
const meta = {
  title: 'Pages/PostPage',
  component: PostPage,
  decorators: [StoreDecorator({ postDetails: { data: MockPostDetailsData } })],
  parameters: {
    ...MockPostRecommendationsRequest,
  },
} satisfies Meta<typeof PostPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;

export const DefaultDark = withOverriddenThemes<Story>({})() satisfies Story;
