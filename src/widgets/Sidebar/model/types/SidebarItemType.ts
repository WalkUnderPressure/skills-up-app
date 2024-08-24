import { FunctionComponent, SVGProps } from 'react';

import { AppRoutes } from 'shared/config/routerConfig';

export type SidebarItemType = {
  id: AppRoutes;
  to: string;
  title: string;
  titleKey: string;
  icon: FunctionComponent<
    SVGProps<SVGSVGElement> & {
      title?: string;
    }
  >;
};
