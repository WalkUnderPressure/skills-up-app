import { useState } from 'react';

import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Button } from 'shared/ui/Button';
import classNames from 'shared/lib/classNames';
import ArrowRightLine from 'shared/assets/icons/arrow-right-line.svg';
import * as cls from './Sidebar.module.scss';

type SidebarProps = {
  className?: string;
  dataTestId?: string;
};

const Sidebar = (props: SidebarProps) => {
  const { className, dataTestId } = props;

  const [isCollapsed, setIsCollapsed] = useState(false);

  const switchCollapsed = () => {
    setIsCollapsed((prevCollapsed) => !prevCollapsed);
  };

  return (
    <div
      data-testid={dataTestId || Sidebar.dataTestId}
      className={classNames(cls.sidebar, { [cls.collapsed]: isCollapsed }, [className])}
    >
      <Button onClick={switchCollapsed} data-testid={Sidebar.switcherDataTestId}>
        <ArrowRightLine />
      </Button>

      <div className={cls.switchers}>
        <ThemeSwitcher />

        <LangSwitcher />
      </div>
    </div>
  );
};

Sidebar.dataTestId = 'Sidebar';
Sidebar.switcherDataTestId = 'SidebarSwitcherBtn';

export default Sidebar;
