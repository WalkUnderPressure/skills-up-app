import { createSelector } from '@reduxjs/toolkit';

import { AppRoutes, RouterPaths } from '~/shared/config/routerConfig';
import { getUserAuthData } from '~/entities/User';
import { SidebarItemType } from '../types/SidebarItemType';

import ProfilePageIcon from '~/shared/assets/icons/profile.svg';
import BlogPageIcon from '~/shared/assets/icons/article.svg';
import AboutPageIcon from '~/shared/assets/icons/about.svg';
import HomePageIcon from '~/shared/assets/icons/home.svg';

const getSidebarMenuItems = createSelector(getUserAuthData, (userAuthData) => {
  const menuItems: Array<SidebarItemType> = [
    {
      id: AppRoutes.HOME,
      to: RouterPaths[AppRoutes.HOME],
      title: 'Home',
      titleKey: 'menu.home',
      icon: HomePageIcon,
    },
    {
      id: AppRoutes.ABOUT,
      to: RouterPaths[AppRoutes.ABOUT],
      title: 'About',
      titleKey: 'menu.about',
      icon: AboutPageIcon,
    },
  ];

  const isAuthorized = userAuthData;

  if (isAuthorized) {
    const userId = userAuthData.id;

    if (userId) {
      menuItems.push({
        id: AppRoutes.PROFILE,
        to: `${RouterPaths[AppRoutes.PROFILE]}${userId}`,
        title: 'Profile',
        titleKey: 'menu.profile',
        icon: ProfilePageIcon,
      });
    }

    menuItems.push({
      id: AppRoutes.BLOG,
      to: RouterPaths[AppRoutes.BLOG],
      title: 'Blog',
      titleKey: 'menu.blog',
      icon: BlogPageIcon,
    });
  }

  return menuItems;
});

export default getSidebarMenuItems;
