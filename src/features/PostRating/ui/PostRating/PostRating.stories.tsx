import type { Meta, StoryObj } from '@storybook/react';

import withOverriddenThemes from '~/shared/config/storybook/helpers/withOverriddenThemes';
import StoreDecorator from '~/shared/config/storybook/decorators/StoreDecorator';
import { withOverriddenRequest } from '~/shared/config/storybook/helpers/withOverriddenRequest';
import { Rating } from '~/entities/Rating';
import PostRating from '.';

const meta = {
  title: 'Features/PostRating',
  component: PostRating,
  args: {},
  decorators: [StoreDecorator()],
} satisfies Meta<typeof PostRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light = {} satisfies Story;

export const Dark = withOverriddenThemes({})() satisfies Story;

const POST_ID = '1';

export const WithRating = withOverriddenRequest<Story, Rating>({
  args: {
    postId: POST_ID,
  },
})({
  method: 'GET',
  url: `/post-rating/${POST_ID}`,
  response: {
    rating: 5,
    feedback: '',
  },
}) satisfies Story;
