import { AppRoutes, RouterPaths } from 'shared/config/routerConfig';
import { SidebarItemType } from '../types/SidebarItemType';

import ProfilePageIcon from 'shared/assets/icons/profile.svg';
import AboutPageIcon from 'shared/assets/icons/about.svg';
import HomePageIcon from 'shared/assets/icons/home.svg';

const SidebarMenuItems: Array<SidebarItemType> = [
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
  {
    id: AppRoutes.PROFILE,
    to: RouterPaths[AppRoutes.PROFILE],
    title: 'Profile',
    titleKey: 'menu.profile',
    icon: ProfilePageIcon,
  },
];

export default SidebarMenuItems;
