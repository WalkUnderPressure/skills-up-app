import { StoreStateSchema } from '~/app/providers/StoreProvider';
import { Post } from '../types/Post';

const getPostDetails = (state: StoreStateSchema): Nullable<Post> => {
  return state.postDetails?.data;
};

const getPostIsLoading = (state: StoreStateSchema): boolean => {
  return state.postDetails?.isLoading || false;
};

const getPostError = (state: StoreStateSchema) => {
  return state.postDetails?.error;
};

export { getPostDetails, getPostIsLoading, getPostError };
