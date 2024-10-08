import { RouteProps } from 'react-router-dom';

import { PostEditPage } from 'pages/PostEditPage';
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
  POST_CREATE = 'post_create',
  POST_EDIT = 'post_edit',

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

  // when no route is suitable
  [AppRoutes.NOT_FOUND]: {
    path: RouterPaths[AppRoutes.NOT_FOUND],
    element: <NotFoundPage />,
  },
};
