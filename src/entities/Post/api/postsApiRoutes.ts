import { buildUrlWithQueryParams } from '~/entities/SearchAndFiltering/api';
import { PostSearchAndFiltering } from '../model/types/Post';

export const postsApiRoutes = {
  base: '/posts/',
  filter: (params: PostSearchAndFiltering) => {
    return buildUrlWithQueryParams(postsApiRoutes.base, params);
  },
  byPostId: (postId: string) => `${postsApiRoutes.base}${postId}`,
};
