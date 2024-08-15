import { RouteProps } from 'react-router-dom';

import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
import { AboutPage } from 'pages/AboutPage';
import { HomePage } from 'pages/HomePage';

export enum AppRoutes {
  HOME = 'home',
  ABOUT = 'about',
  PROFILE = 'profile',

  // when no route is suitable
  NOT_FOUND = 'not_found',
}

export const RouterPaths: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE]: '/profile',

  // when no route is suitable
  [AppRoutes.NOT_FOUND]: '*',
};

export const routerConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.HOME]: {
    path: RouterPaths[AppRoutes.HOME],
    element: <HomePage />,
  },
  [AppRoutes.ABOUT]: {
    path: RouterPaths[AppRoutes.ABOUT],
    element: <AboutPage />,
  },
  [AppRoutes.PROFILE]: {
    path: RouterPaths[AppRoutes.PROFILE],
    element: <ProfilePage />,
  },

  // when no route is suitable
  [AppRoutes.NOT_FOUND]: {
    path: RouterPaths[AppRoutes.NOT_FOUND],
    element: <NotFoundPage />,
  },
};
