import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { AppLink, AppLinkTheme } from '~/shared/ui/AppLink';
import { HStack } from '~/shared/ui/Stack';
import classNames from '~/shared/lib/classNames';
import { SidebarItemType } from '../../model/types/SidebarItemType';
import * as cls from './SidebarItem.module.scss';

type SidebarItemProps = {
  item: SidebarItemType;
  isCollapsed: boolean;
} & PropsWithClassName;

const SidebarItem = memo((props: SidebarItemProps) => {
  const { item, isCollapsed } = props;
  const { title, titleKey, to, icon: Icon } = item;

  const { t } = useTranslation();

  return (
    <HStack justify="start" fullW className={classNames('', { [cls.collapsed]: isCollapsed })}>
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
    </HStack>
  );
});

export default SidebarItem;
