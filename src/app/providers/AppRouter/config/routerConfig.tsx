import { AppRoutes, RouterPaths } from '~/shared/constants/appRoutes';
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

const routerConfig: Record<AppRoutes, AppRouteProps> = {
  [AppRoutes.HOME]: {
    path: RouterPaths[AppRoutes.HOME],
    element: <HomePage />,
  },
  [AppRoutes.ABOUT]: {
    path: RouterPaths[AppRoutes.ABOUT],
    element: <AboutPage />,
  },
  [AppRoutes.PROFILE]: {
    path: `${RouterPaths[AppRoutes.PROFILE]}:id`,
    element: <ProfilePage />,
    authOnly: true,
  },
  [AppRoutes.BLOG]: {
    path: RouterPaths[AppRoutes.BLOG],
    element: <BlogPage />,
    authOnly: true,
  },
  [AppRoutes.POST]: {
    path: `${RouterPaths[AppRoutes.POST]}:id`,
    element: <PostPage />,
    authOnly: true,
  },
  [AppRoutes.POST_CREATE]: {
    path: RouterPaths[AppRoutes.POST_CREATE],
    element: <PostEditPage />,
    authOnly: true,
  },
  [AppRoutes.POST_EDIT]: {
    path: RouterPaths[AppRoutes.POST_EDIT],
    element: <PostEditPage />,
    authOnly: true,
  },
  [AppRoutes.ADMIN_PANEL]: {
    path: RouterPaths[AppRoutes.ADMIN_PANEL],
    element: <AdminPanelPage />,
    authOnly: true,
    roles: ['ADMIN'],
  },

  // when page is forbidden
  [AppRoutes.FORBIDDEN]: {
    path: RouterPaths[AppRoutes.FORBIDDEN],
    element: <ForbiddenPage />,
  },

  // when no route is suitable
  [AppRoutes.NOT_FOUND]: {
    path: RouterPaths[AppRoutes.NOT_FOUND],
    element: <NotFoundPage />,
  },
};

export { routerConfig };
