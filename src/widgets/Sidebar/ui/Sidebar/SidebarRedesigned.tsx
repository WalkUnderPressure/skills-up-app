import { memo } from 'react';

import SidebarItem from '~/widgets/Sidebar/ui/SidebarItem/SidebarItem';
import { VStack } from '~/shared/ui/Stack';
import classNames from '~/shared/lib/classNames';
import { useSidebarMenuItems } from '../../model/selectors/getSidebarMenuItems';
import cls from './Sidebar.module.scss';

type SidebarRedesignedProps = PropsWithClassName;

const SidebarRedesigned = memo((props: SidebarRedesignedProps) => {
  const { className } = props;

  const sidebarItems = useSidebarMenuItems();

  return (
    <VStack
      as="aside"
      justify="between"
      className={classNames(cls['sidebar-redesigned'], {}, [className])}
    >
      {/* <Button
        theme={ButtonTheme.BG_INVERTED}
        size={ButtonSize.XL}
        isSquare={true}
        onClick={switchCollapsed}
        className={cls['toggle-btn']}
        data-testid={switcherDataTestId}
      >
        <ArrowRightLine width={24} height={24} className={cls['toggle-btn-icon']} />
      </Button> */}

      <VStack
        role="navigation"
        justify="center"
        align="start"
        gap="16"
        className={classNames(cls.menu)}
      >
        {sidebarItems.map((menuItem) => {
          const { id } = menuItem;

          return <SidebarItem key={id} item={menuItem} isCollapsed={false} />;
        })}
      </VStack>

      {/* <HStack fullW justify="center" align="center" gap="16" className={cls.switchers}>
        <LangSwitcher short={isCollapsed} />

        <ThemeSwitcher />
      </HStack> */}
    </VStack>
  );
});

export default SidebarRedesigned;
