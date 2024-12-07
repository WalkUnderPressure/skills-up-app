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

export const getRouteHome = () => '/';
export const getRouteAbout = () => '/about';
export const getRouteProfile = (id: string) => `/profile/${id}`;
export const getRouteBlog = () => '/blog';
export const getRoutePost = (id: string) => `/posts/${id}`;
export const getRoutePostCreate = () => '/posts/create';
export const getRoutePostEdit = (id: string) => `/posts/${id}/edit`;
export const getRouteAdminPanel = () => '/admin-panel';
// when page is forbidden
export const getRouteForbidden = () => '/forbidden';
// when no route is suitable
export const getRouteNotFound = () => '*';
