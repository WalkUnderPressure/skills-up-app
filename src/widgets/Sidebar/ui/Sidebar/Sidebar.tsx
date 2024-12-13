import { memo, useCallback, useState } from 'react';

import SidebarItem from '~/widgets/Sidebar/ui/SidebarItem/SidebarItem';
import { Button, ButtonSize, ButtonTheme } from '~/shared/ui/Button';
import { ThemeSwitcher } from '~/widgets/ThemeSwitcher';
import { LangSwitcher } from '~/widgets/LangSwitcher';
import { HStack, VStack } from '~/shared/ui/Stack';
import classNames from '~/shared/lib/classNames';
import { SidebarDataTestIdProps } from './Sidebar.test-ids';
import { useSidebarMenuItems } from '../../model/selectors/getSidebarMenuItems';
import cls from './Sidebar.module.scss';

import ArrowRightLine from '~/shared/assets/icons/arrow-right-line.svg';

type SidebarProps = SidebarDataTestIdProps & PropsWithClassName;

const Sidebar = memo((props: SidebarProps) => {
  const { className, sidebarDataTestId, switcherDataTestId } = props;

  const [isCollapsed, setIsCollapsed] = useState(false);

  const switchCollapsed = useCallback(() => {
    setIsCollapsed((prevCollapsed) => !prevCollapsed);
  }, []);

  const sidebarItems = useSidebarMenuItems();

  return (
    <VStack
      as="aside"
      justify="between"
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

      <VStack
        role="navigation"
        justify="center"
        align="start"
        gap="16"
        className={classNames(cls.menu)}
      >
        {sidebarItems.map((menuItem) => {
          const { id } = menuItem;

          return <SidebarItem key={id} item={menuItem} isCollapsed={isCollapsed} />;
        })}
      </VStack>

      <HStack fullW justify="center" align="center" gap="16" className={cls.switchers}>
        <LangSwitcher short={isCollapsed} />

        <ThemeSwitcher />
      </HStack>
    </VStack>
  );
});

export default Sidebar;
