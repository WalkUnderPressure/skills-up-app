import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { AppRoutes, RouterPaths } from 'shared/config/routerConfig';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button';
import { AppLinkTheme } from 'shared/ui/AppLink/ui/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import classNames from 'shared/lib/classNames';
import { AppLink } from 'shared/ui/AppLink';
import * as cls from './Sidebar.module.scss';

import ArrowRightLine from 'shared/assets/icons/arrow-right-line.svg';
import AboutPageIcon from 'shared/assets/icons/about.svg';
import HomePageIcon from 'shared/assets/icons/home.svg';

const SidebarMenuItems = [
  {
    id: AppRoutes.HOME,
    to: RouterPaths[AppRoutes.HOME],
    title: 'Home',
    titleKey: 'navbar.home',
    icon: HomePageIcon,
  },
  {
    id: AppRoutes.ABOUT,
    to: RouterPaths[AppRoutes.ABOUT],
    title: 'About',
    titleKey: 'navbar.about',
    icon: AboutPageIcon,
  },
];

type SidebarProps = {
  className?: string;
  dataTestId?: string;
};

const Sidebar = (props: SidebarProps) => {
  const { className, dataTestId } = props;

  const { t } = useTranslation();

  const [isCollapsed, setIsCollapsed] = useState(false);

  const switchCollapsed = () => {
    setIsCollapsed((prevCollapsed) => !prevCollapsed);
  };

  return (
    <div
      data-testid={dataTestId || Sidebar.dataTestId}
      className={classNames(cls.sidebar, { [cls.collapsed]: isCollapsed }, [className])}
    >
      <Button
        theme={ButtonTheme.BG_INVERTED}
        size={ButtonSize.XL}
        isSquare={true}
        onClick={switchCollapsed}
        className={cls['toggle-btn']}
        data-testid={Sidebar.switcherDataTestId}
      >
        <ArrowRightLine className={cls['toggle-btn-icon']} />
      </Button>

      <ul className={classNames(cls.menu)}>
        {SidebarMenuItems.map((menuItem) => {
          const { id, to, icon: Icon, title, titleKey } = menuItem;

          return (
            <li key={id} className={classNames(cls['menu-item-li'])}>
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
            </li>
          );
        })}
      </ul>

      <div className={cls.switchers}>
        <LangSwitcher short={isCollapsed} />

        <ThemeSwitcher />
      </div>
    </div>
  );
};

Sidebar.dataTestId = 'Sidebar';
Sidebar.switcherDataTestId = 'SidebarSwitcherBtn';

export default Sidebar;
