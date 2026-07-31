export const postRatingApiRoutes = {
  base: '/post-rating/',
  byPostId: (postId?: string) => `${postRatingApiRoutes.base}${postId ?? ''}`,
};
