import { getOverriddenRequest } from '~/shared/config/storybook/helpers/withOverriddenRequest';
import { MockPostsListData } from '~/entities/Post/mock/MockPostsListData';
import { postsApiRoutes } from '~/entities/Post/api/postsApiRoutes';
import { Post } from '~/entities/Post';

const getMockPostRequest = (postId = '1') => {
  return getOverriddenRequest<Post>({
    url: postsApiRoutes.byPostId(postId),
    response: {
      ...MockPostsListData[0],
      id: postId,
    },
  });
};

export { getMockPostRequest };
