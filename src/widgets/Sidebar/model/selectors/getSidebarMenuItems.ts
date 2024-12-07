import { createSelector } from '@reduxjs/toolkit';

import {
  AppRoutes,
  getRouteAbout,
  getRouteBlog,
  getRouteHome,
  getRouteProfile,
} from '~/shared/constants/appRoutes';
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
      to: getRouteHome(),
      title: 'Home',
      titleKey: 'menu.home',
      icon: HomePageIcon,
    },
    {
      id: AppRoutes.ABOUT,
      to: getRouteAbout(),
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
        to: getRouteProfile(userId),
        title: 'Profile',
        titleKey: 'menu.profile',
        icon: ProfilePageIcon,
      });
    }

    menuItems.push({
      id: AppRoutes.BLOG,
      to: getRouteBlog(),
      title: 'Blog',
      titleKey: 'menu.blog',
      icon: BlogPageIcon,
    });
  }

  return menuItems;
});

export default getSidebarMenuItems;
