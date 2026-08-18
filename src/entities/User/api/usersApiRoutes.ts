export const usersApiRoutes = {
  base: '/users/',
  byId: (userId: string) => `${usersApiRoutes.base}${userId}`,
};
