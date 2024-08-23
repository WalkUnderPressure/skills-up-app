import { StoreStateSchema } from 'app/providers/StoreProvider';

const getPostCommentariesIsLoading = (state: StoreStateSchema) => {
  return state?.postCommentaries?.isLoading || false;
};

export { getPostCommentariesIsLoading };
