import { buildAppSelector } from '~/shared/lib/store';

export const [usePostRecommendationsIsLoading, getPostRecommendationsIsLoading] = buildAppSelector(
  (state) => {
    return state.postPage?.postRecommendations?.isLoading || false;
  },
);
