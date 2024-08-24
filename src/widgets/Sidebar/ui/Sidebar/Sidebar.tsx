import { memo, useCallback, useState } from 'react';

import SidebarItem from 'widgets/Sidebar/ui/SidebarItem/SidebarItem';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button';
import { useAppSelector } from 'app/providers/StoreProvider';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import classNames from 'shared/lib/classNames';
import { SidebarDataTestIdProps } from './Sidebar.test-ids';
import getSidebarMenuItems from '../../model/selectors/getSidebarMenuItems';
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

  const sidebarItems = useAppSelector(getSidebarMenuItems);

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
