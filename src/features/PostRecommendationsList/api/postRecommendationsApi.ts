import rtkApi from 'shared/api/rtkApi';

const RECOMMENDATIONS_COUNT = 4;

const postRecommendationsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getPostRecommendations: build.query({
      query: () => ({
        url: '/posts',
        params: {
          _limit: RECOMMENDATIONS_COUNT,
        },
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetPostRecommendationsQuery } = postRecommendationsApi;
