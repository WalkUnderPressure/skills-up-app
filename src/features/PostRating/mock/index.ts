import { getOverriddenRequest } from '~/shared/config/storybook/helpers/withOverriddenRequest';
import { Rating } from '~/entities/Rating';
import { postRatingApiRoutes } from '~/features/PostRating/api/postRatingApiRoutes';

const getMockPostRatingRequest = (postId = '1', postRating = 2) => {
  return getOverriddenRequest<Rating>({
    url: postRatingApiRoutes.byPostId(postId),
    response: {
      rating: postRating,
      feedback: '',
    },
  });
};

export { getMockPostRatingRequest };
