import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { AppLink as AppLinkDeprecated, AppLinkTheme } from '~/shared/ui/deprecated/AppLink';
import { HStack } from '~/shared/ui/redesigned/Stack';
import classNames from '~/shared/lib/classNames';
import { SidebarItemType } from '../../model/types/SidebarItemType';
import cls from './SidebarItem.module.scss';
import { ToggleFeatures, useToggleFeatures } from '~/entities/FeatureFlags';
import { AppLink } from '~/shared/ui/redesigned/AppLink';

type SidebarItemProps = {
  item: SidebarItemType;
  isCollapsed: boolean;
} & PropsWithClassName;

const SidebarItem = memo((props: SidebarItemProps) => {
  const { item, isCollapsed } = props;
  const { title, titleKey, to, icon: Icon } = item;

  const { t } = useTranslation();

  const LinkContent = (
    <>
      <span className={classNames(cls['menu-item-icon'])}>
        <Icon />
      </span>

      {!isCollapsed && (
        <span className={classNames(cls['menu-item-label'])}>
          {t(titleKey, { defaultValue: title })}
        </span>
      )}
    </>
  );

  const menuItemCls = useToggleFeatures({
    feature: 'redesign',
    on: () => cls.redesigned,
    off: () => '',
  });

  return (
    <HStack justify="start" fullW className={classNames('', { [cls.collapsed]: isCollapsed })}>
      <ToggleFeatures
        feature="redesign"
        on={
          <AppLink
            className={classNames(cls['menu-item'], {}, [menuItemCls])}
            to={to}
            variant="secondary"
          >
            {LinkContent}
          </AppLink>
        }
        off={
          <AppLinkDeprecated
            className={classNames(cls['menu-item'], {}, [menuItemCls])}
            theme={AppLinkTheme.PRIMARY_INVERTED}
            to={to}
          >
            {LinkContent}
          </AppLinkDeprecated>
        }
      />
    </HStack>
  );
});

export default SidebarItem;
