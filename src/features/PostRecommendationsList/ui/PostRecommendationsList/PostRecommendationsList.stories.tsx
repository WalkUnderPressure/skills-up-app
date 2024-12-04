import type { Meta, StoryObj } from '@storybook/react';

import withOverriddenThemes from '~/shared/config/storybook/helpers/withOverriddenThemes';
import StoreDecorator from '~/shared/config/storybook/decorators/StoreDecorator';
import MockPostRecommendationsRequest from '../../mock/MockPostRecommendationsRequest';
import PostRecommendationsList from '.';

const meta = {
  title: 'Features/PostRecommendationsList',
  component: PostRecommendationsList,
  args: {},
  decorators: [StoreDecorator({})],
  parameters: {
    ...MockPostRecommendationsRequest,
  },
} satisfies Meta<typeof PostRecommendationsList>;

export default meta;
type Story = StoryObj<typeof meta>;

// Example of use withOverriddenRequest:
// export const Light = withOverriddenRequest<Story, Array<Post>>({})(
//   MockPostRecommendationsRequest.mockData[0],
// ) satisfies Story;

export const Light = {} satisfies Story;

export const Dark = withOverriddenThemes({})() satisfies Story;
