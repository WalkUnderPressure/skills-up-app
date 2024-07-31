import { useCallback, useState } from 'react';

import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Button } from 'shared/ui/Button';
import classNames from 'shared/lib/classNames';
import ArrowRightLine from 'shared/assets/icons/arrow-right-line.svg';
import * as cls from './Sidebar.module.scss';

type SidebarProps = {
  className?: string;
};

const Sidebar = (props: SidebarProps) => {
  const { className } = props;

  const [isCollapsed, setIsCollapsed] = useState(false);

  const switchCollapsed = useCallback(() => {
    setIsCollapsed((prevCollapsed) => !prevCollapsed);
  }, []);

  return (
    <div className={classNames(cls.sidebar, { [cls.collapsed]: isCollapsed }, [className])}>
      <Button onClick={switchCollapsed}>
        <ArrowRightLine />
      </Button>

      <div className={cls.switchers}>
        <ThemeSwitcher />

        <LangSwitcher />
      </div>
    </div>
  );
};

export default Sidebar;
