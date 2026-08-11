import { memo, useCallback, useState } from 'react';

import SidebarItem from '~/widgets/Sidebar/ui/SidebarItem/SidebarItem';
import { HStack, VStack } from '~/shared/ui/redesigned/Stack';
import classNames from '~/shared/lib/classNames';
import { useSidebarMenuItems } from '../../model/selectors/getSidebarMenuItems';
import cls from './SidebarRedesigned.module.scss';
import { LangSwitcher } from '~/widgets/LangSwitcher';
import { ThemeSwitcher } from '~/widgets/ThemeSwitcher';
import { Button } from '~/shared/ui/redesigned/Button';
import { SidebarDataTestIdProps } from '../../constants';
import ArrowRightLine from '~/shared/assets/icons/arrow-right-line.svg';

type SidebarRedesignedProps = SidebarDataTestIdProps & PropsWithClassName;

const SidebarRedesigned = memo((props: SidebarRedesignedProps) => {
  const { className, switcherDataTestId } = props;

  const [isCollapsed, setIsCollapsed] = useState(false);

  const switchCollapsed = useCallback(() => {
    setIsCollapsed((prevCollapsed) => !prevCollapsed);
  }, []);

  const sidebarItems = useSidebarMenuItems();

  return (
    <VStack
      as="aside"
      justify="between"
      className={classNames(
        cls['sidebar'],
        {
          [cls.collapsed]: isCollapsed,
        },
        [className],
      )}
    >
      <Button
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
        <LangSwitcher short={true} />

        <ThemeSwitcher />
      </HStack>
    </VStack>
  );
});

export default SidebarRedesigned;
