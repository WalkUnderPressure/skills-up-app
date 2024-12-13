import { buildAppSelector } from '~/shared/lib/store';
import { Post } from '../types/Post';

export const [usePostDetails, getPostDetails] = buildAppSelector((state): Nullable<Post> => {
  return state.postDetails?.data;
});

export const [usePostIsLoading, getPostIsLoading] = buildAppSelector((state): boolean => {
  return state.postDetails?.isLoading || false;
});

export const [usePostError, getPostError] = buildAppSelector((state) => {
  return state.postDetails?.error;
});
