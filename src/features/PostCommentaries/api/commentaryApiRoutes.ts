export const commentaryApiRoutes = {
  base: '/comments/',
  byPostId: (postId: string) => `${commentaryApiRoutes.base}?postId=${postId}`,
};
