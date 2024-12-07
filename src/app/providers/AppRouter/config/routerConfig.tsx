import {
  AppRoutes,
  getRouteAbout,
  getRouteAdminPanel,
  getRouteBlog,
  getRouteForbidden,
  getRouteHome,
  getRouteNotFound,
  getRoutePost,
  getRoutePostCreate,
  getRoutePostEdit,
  getRouteProfile,
} from '~/shared/constants/appRoutes';
import { AdminPanelPage } from '~/pages/AdminPanelPage';
import { ForbiddenPage } from '~/pages/ForbiddenPage';
import { PostEditPage } from '~/pages/PostEditPage';
import { NotFoundPage } from '~/pages/NotFoundPage';
import { ProfilePage } from '~/pages/ProfilePage';
import { AboutPage } from '~/pages/AboutPage';
import { HomePage } from '~/pages/HomePage';
import { BlogPage } from '~/pages/BlogPage';
import { PostPage } from '~/pages/PostPage';
import { AppRouteProps } from '../types/router';

export const routerConfig: Record<AppRoutes, AppRouteProps> = {
  [AppRoutes.HOME]: {
    path: getRouteHome(),
    element: <HomePage />,
  },
  [AppRoutes.ABOUT]: {
    path: getRouteAbout(),
    element: <AboutPage />,
  },
  [AppRoutes.PROFILE]: {
    path: getRouteProfile(':id'),
    element: <ProfilePage />,
    authOnly: true,
  },
  [AppRoutes.BLOG]: {
    path: getRouteBlog(),
    element: <BlogPage />,
    authOnly: true,
  },
  [AppRoutes.POST]: {
    path: getRoutePost(':id'),
    element: <PostPage />,
    authOnly: true,
  },
  [AppRoutes.POST_CREATE]: {
    path: getRoutePostCreate(),
    element: <PostEditPage />,
    authOnly: true,
  },
  [AppRoutes.POST_EDIT]: {
    path: getRoutePostEdit(':id'),
    element: <PostEditPage />,
    authOnly: true,
  },
  [AppRoutes.ADMIN_PANEL]: {
    path: getRouteAdminPanel(),
    element: <AdminPanelPage />,
    authOnly: true,
    roles: ['ADMIN'],
  },

  // when page is forbidden
  [AppRoutes.FORBIDDEN]: {
    path: getRouteForbidden(),
    element: <ForbiddenPage />,
  },

  // when no route is suitable
  [AppRoutes.NOT_FOUND]: {
    path: getRouteNotFound(),
    element: <NotFoundPage />,
  },
};
