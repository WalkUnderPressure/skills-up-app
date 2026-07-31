import rtkApi from '~/shared/api/rtkApi';
import { Rating } from '~/entities/Rating';
import { postRatingApiRoutes } from '~/features/PostRating/api/postRatingApiRoutes';

type GetPostRatingParams = {
  postId?: string;
};

type SetPostRatingParams = {
  postId?: string;
  rating: number;
  feedback?: string;
};

const postRatingApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getPostRating: build.query<Rating, GetPostRatingParams>({
      query: ({ postId }) => ({
        url: postRatingApiRoutes.byPostId(postId),
      }),
    }),
    setPostRating: build.mutation<Rating, SetPostRatingParams>({
      query: ({ postId, rating, feedback }) => ({
        url: postRatingApiRoutes.byPostId(postId),
        method: 'POST',
        body: {
          rating,
          feedback,
        },
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetPostRatingQuery: usePostRating, useSetPostRatingMutation: useSetPostRating } =
  postRatingApi;
