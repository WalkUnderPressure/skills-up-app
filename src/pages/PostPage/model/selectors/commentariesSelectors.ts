import { StoreStateSchema } from 'app/providers/StoreProvider';

const getPostCommentariesIsLoading = (state: StoreStateSchema) => {
  return state?.postPage?.postCommentaries?.isLoading || false;
};

export { getPostCommentariesIsLoading };
