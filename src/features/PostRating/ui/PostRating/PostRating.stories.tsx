import { Meta, StoryObj } from '~/shared/lib/storybook/types';

import StoreDecorator from '~/shared/config/storybook/decorators/StoreDecorator';
import { getMockPostRatingRequest } from '~/features/PostRating/mock';
import PostRating from '.';

const POST_ID = '2';

const MockPostRatingReq = getMockPostRatingRequest(POST_ID, 4);

const meta = {
  title: 'Features/PostRating',
  component: PostRating,
  args: {
    postId: POST_ID,
  },
  decorators: [StoreDecorator({})],
  parameters: {
    ...MockPostRatingReq,
  },
} satisfies Meta<typeof PostRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light = {} satisfies Story;

// export const Dark = withOverriddenThemes({})() satisfies Story;

// export const WithRating = {} satisfies Story;

// export const NoRating = {
//   parameters: {
//     ...getMockPostRatingRequest(POST_ID, 0),
//   },
// } satisfies Story;
