export enum AppRoutes {
  HOME = 'home',
  ABOUT = 'about',
  PROFILE = 'profile',
  BLOG = 'blog',
  POST = 'post',
  POST_CREATE = 'post_create',
  POST_EDIT = 'post_edit',
  ADMIN_PANEL = 'admin_panel',

  // when page is forbidden
  FORBIDDEN = 'forbidden',

  // when no route is suitable
  NOT_FOUND = 'not_found',
}

export const RouterPaths: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE]: '/profile/', // :id
  [AppRoutes.BLOG]: '/blog',
  [AppRoutes.POST]: '/posts/', // :id
  [AppRoutes.POST_CREATE]: '/posts/create',
  [AppRoutes.POST_EDIT]: '/posts/:id/edit',
  [AppRoutes.ADMIN_PANEL]: '/admin-panel',

  // when page is forbidden
  [AppRoutes.FORBIDDEN]: '/forbidden',

  // when no route is suitable
  [AppRoutes.NOT_FOUND]: '*',
};
