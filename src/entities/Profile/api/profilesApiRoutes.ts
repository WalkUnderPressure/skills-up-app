export const profilesApiRoutes = {
  base: '/profiles/',
  byUserId: (userId: string) => `${profilesApiRoutes.base}${userId}`,
};
