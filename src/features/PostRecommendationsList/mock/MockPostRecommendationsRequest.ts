import { getOverriddenRequest } from '~/shared/config/storybook/helpers/withOverriddenRequest';
import { MockPostsListData } from '~/entities/Post/mock/MockPostsListData';
import { Post, postsApiRoutes } from '~/entities/Post';

const getMockPostRecommendationsRequest = (postsLimit = 4) => {
  return getOverriddenRequest<Array<Post>>({
    url: postsApiRoutes.filter({
      _limit: postsLimit,
    }),
    response: MockPostsListData.slice(0, 4),
  });
};

export { getMockPostRecommendationsRequest };
