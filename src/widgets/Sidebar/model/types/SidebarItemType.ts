import { AppRoutes } from 'shared/config/routerConfig';

export type SidebarItemType = {
  id: AppRoutes;
  to: string;
  title: string;
  titleKey: string;
  icon: SvgIconType;
};
