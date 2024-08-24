import { RouteProps } from 'react-router-dom';

import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
import { AboutPage } from 'pages/AboutPage';
import { HomePage } from 'pages/HomePage';
import { BlogPage } from 'pages/BlogPage';
import { PostPage } from 'pages/PostPage';

export type AppRouteProps = {
  authOnly?: boolean;
} & RouteProps;

export enum AppRoutes {
  HOME = 'home',
  ABOUT = 'about',
  PROFILE = 'profile',
  BLOG = 'blog',
  POST = 'post',

  // when no route is suitable
  NOT_FOUND = 'not_found',
}

export const RouterPaths: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE]: '/profile/', // :id
  [AppRoutes.BLOG]: '/blog',
  [AppRoutes.POST]: '/posts/', // :id

  // when no route is suitable
  [AppRoutes.NOT_FOUND]: '*',
};

export const routerConfig: Record<AppRoutes, AppRouteProps> = {
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

  // when no route is suitable
  [AppRoutes.NOT_FOUND]: {
    path: RouterPaths[AppRoutes.NOT_FOUND],
    element: <NotFoundPage />,
  },
};
