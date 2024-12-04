import { StoreStateSchema } from '~/app/providers/StoreProvider';

const getPostRecommendationsIsLoading = (state: StoreStateSchema) => {
  return state.postPage?.postRecommendations?.isLoading || false;
};

export { getPostRecommendationsIsLoading };
