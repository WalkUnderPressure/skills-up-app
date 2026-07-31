import { postsApiRoutes } from '~/entities/Post/api/postsApiRoutes';
import rtkApi from '~/shared/api/rtkApi';
import { Post } from '~/entities/Post';

const RECOMMENDATIONS_COUNT = 4;

const postRecommendationsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getPostRecommendations: build.query<Array<Post>, unknown>({
      query: () => ({
        url: postsApiRoutes.filter({
          _limit: RECOMMENDATIONS_COUNT,
        }),
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetPostRecommendationsQuery: usePostRecommendations } = postRecommendationsApi;
