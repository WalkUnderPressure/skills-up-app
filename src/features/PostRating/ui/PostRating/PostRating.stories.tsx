import type { Meta, StoryObj } from '@storybook/react';

import { withOverriddenRequest } from '~/shared/config/storybook/helpers/withOverriddenRequest';
import withOverriddenThemes from '~/shared/config/storybook/helpers/withOverriddenThemes';
import StoreDecorator from '~/shared/config/storybook/decorators/StoreDecorator';
import { Rating } from '~/entities/Rating';

import PostRating from '.';

const POST_ID = '1';

const meta = {
  title: 'Features/PostRating',
  component: PostRating,
  args: {
    postId: POST_ID,
  },
  decorators: [StoreDecorator()],
} satisfies Meta<typeof PostRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light = {} satisfies Story;

export const Dark = withOverriddenThemes({})() satisfies Story;

export const WithRating = withOverriddenRequest<Story, Rating>({})({
  method: 'GET',
  url: `/post-rating/${POST_ID}`,
  status: 200,
  response: {
    rating: 4,
    feedback: '',
  },
}) satisfies Story;

export const NoRating = withOverriddenRequest<Story, Rating>({})({
  method: 'GET',
  url: `/post-rating/${POST_ID}`,
  response: {
    rating: 0,
    feedback: '',
  },
}) satisfies Story;
