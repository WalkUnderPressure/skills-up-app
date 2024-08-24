import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import classNames from 'shared/lib/classNames';
import { SidebarItemType } from '../../model/types/SidebarItemType';
import * as cls from './SidebarItem.module.scss';

type SidebarItemProps = {
  className?: string;
  item: SidebarItemType;
  isCollapsed: boolean;
};

const SidebarItem = memo((props: SidebarItemProps) => {
  const { item, isCollapsed } = props;
  const { title, titleKey, to, icon: Icon } = item;

  const { t } = useTranslation();

  return (
    <div className={classNames(cls['menu-item-li'], { [cls.collapsed]: isCollapsed })}>
      <AppLink
        className={classNames(cls['menu-item'])}
        theme={AppLinkTheme.PRIMARY_INVERTED}
        to={to}
      >
        <span className={classNames(cls['menu-item-icon'])}>
          <Icon />
        </span>

        <span className={classNames(cls['menu-item-label'])}>
          {t(titleKey, { defaultValue: title })}
        </span>
      </AppLink>
    </div>
  );
});

export default SidebarItem;
