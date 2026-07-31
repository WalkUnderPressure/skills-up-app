import { getOverriddenRequest } from '~/shared/config/storybook/helpers/withOverriddenRequest';
import { MockProfileWithAvatar } from '~/entities/Profile/mock/MockProfileData';
import { commentaryApiRoutes } from '../api/commentaryApiRoutes';
import { Commentary } from '~/entities/Commentary';

const getMockPostCommentariesRequest = (postId = '1') => {
  return getOverriddenRequest<Array<Commentary>>({
    url: commentaryApiRoutes.byPostId(postId),
    response: [
      {
        id: '1',
        postId: '1',
        userId: '1',
        text: 'Some cool comment',
        profile: MockProfileWithAvatar,
      },
    ],
  });
};

export { getMockPostCommentariesRequest };
