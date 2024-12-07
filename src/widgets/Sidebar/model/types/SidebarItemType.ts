import { AppRoutes } from '~/shared/constants/appRoutes';

export type SidebarItemType = {
  id: AppRoutes;
  to: string;
  title: string;
  titleKey: string;
  icon: SvgIconType;
};
