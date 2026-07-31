import { getMockPostRecommendationsRequest } from '~/features/PostRecommendationsList/mock/MockPostRecommendationsRequest';
import withOverriddenThemes from '~/shared/config/storybook/helpers/withOverriddenThemes';
import { getMockPostCommentariesRequest } from '~/features/PostCommentaries/mock';
import StoreDecorator from '~/shared/config/storybook/decorators/StoreDecorator';
import { getMockPostRequest } from '~/pages/PostPage/mock/MockPostRequest';
import { getMockPostRatingRequest } from '~/features/PostRating/mock';
import { Meta, StoryObj } from '~/shared/lib/storybook/types';
import { getRoutePost } from '~/shared/constants/appRoutes';
import PostPage from './PostPage';

const POST_ID = `1`;

const PostRecommendationsReq = getMockPostRecommendationsRequest().mockData[0];
const PostCommentsReq = getMockPostCommentariesRequest(POST_ID).mockData[0];
const PostRatingReq = getMockPostRatingRequest(POST_ID).mockData[0];
const PostReq = getMockPostRequest(POST_ID).mockData[0];

// TODO: Add tests for selectors, slice, service
const meta = {
  title: 'Pages/PostPage',
  component: PostPage,
  decorators: [StoreDecorator()],
  parameters: {
    mockData: [PostRecommendationsReq, PostCommentsReq, PostRatingReq, PostReq],
    routing: {
      path: getRoutePost(':id'),
      initialEntries: [getRoutePost(POST_ID)],
    },
  },
} satisfies Meta<typeof PostPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;

export const DefaultDark = withOverriddenThemes<Story>({})() satisfies Story;
