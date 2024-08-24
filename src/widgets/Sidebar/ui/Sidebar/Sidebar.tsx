import { memo, useCallback, useMemo, useState } from 'react';

import SidebarItem from 'widgets/Sidebar/ui/SidebarItem/SidebarItem';
import { AppRoutes, RouterPaths } from 'shared/config/routerConfig';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button';
import { useAppSelector } from 'app/providers/StoreProvider';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { getUserId, useIsAuthorized } from 'entities/User';
import classNames from 'shared/lib/classNames';
import { SidebarDataTestIdProps } from './Sidebar.test-ids';
import SidebarMenuItems from '../model/menuItems';
import * as cls from './Sidebar.module.scss';

import ArrowRightLine from 'shared/assets/icons/arrow-right-line.svg';

type SidebarProps = {
  className?: string;
} & Partial<SidebarDataTestIdProps>;

const Sidebar = memo((props: SidebarProps) => {
  const { className, sidebarDataTestId, switcherDataTestId } = props;

  const [isCollapsed, setIsCollapsed] = useState(false);

  const switchCollapsed = useCallback(() => {
    setIsCollapsed((prevCollapsed) => !prevCollapsed);
  }, []);

  const { isAuthorized } = useIsAuthorized();

  const userId = useAppSelector(getUserId);

  const sidebarItems = useMemo(
    () =>
      SidebarMenuItems.filter(({ authOnly }) => (authOnly ? isAuthorized : true)).map((item) => {
        if (item.id === AppRoutes.PROFILE) {
          item.to = `${RouterPaths[AppRoutes.PROFILE]}${userId}`;
        }

        return item;
      }),
    [isAuthorized, userId],
  );

  return (
    <div
      data-testid={sidebarDataTestId}
      className={classNames(cls.sidebar, { [cls.collapsed]: isCollapsed }, [className])}
    >
      <Button
        theme={ButtonTheme.BG_INVERTED}
        size={ButtonSize.XL}
        isSquare={true}
        onClick={switchCollapsed}
        className={cls['toggle-btn']}
        data-testid={switcherDataTestId}
      >
        <ArrowRightLine width={24} height={24} className={cls['toggle-btn-icon']} />
      </Button>

      <ul className={classNames(cls.menu)}>
        {sidebarItems.map((menuItem) => {
          const { id } = menuItem;

          return <SidebarItem key={id} item={menuItem} isCollapsed={isCollapsed} />;
        })}
      </ul>

      <div className={cls.switchers}>
        <LangSwitcher short={isCollapsed} />

        <ThemeSwitcher />
      </div>
    </div>
  );
});

export default Sidebar;
