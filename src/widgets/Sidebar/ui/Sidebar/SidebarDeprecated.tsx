import { memo, useCallback, useState } from 'react';

import { useSidebarMenuItems } from '../../model/selectors/getSidebarMenuItems';
import SidebarItem from '~/widgets/Sidebar/ui/SidebarItem/SidebarItem';
import { HStack, VStack } from '~/shared/ui/redesigned/Stack';
import { SidebarDataTestIdProps } from '../../constants';
import classNames from '~/shared/lib/classNames';
import cls from './SidebarDeprecated.module.scss';

import { Button, ButtonSize, ButtonTheme } from '~/shared/ui/deprecated/Button';
import { useToggleFeatures } from '~/entities/User';
import ArrowRightLine from '~/shared/assets/icons/arrow-right-line.svg';
import { LangSwitcher } from '~/widgets/LangSwitcher';
import { ThemeSwitcher } from '~/widgets/ThemeSwitcher';

type SidebarDeprecatedProps = SidebarDataTestIdProps & PropsWithClassName;

const SidebarDeprecated = memo((props: SidebarDeprecatedProps) => {
  const { className, sidebarDataTestId, switcherDataTestId } = props;

  const [isCollapsed, setIsCollapsed] = useState(false);

  const switchCollapsed = useCallback(() => {
    setIsCollapsed((prevCollapsed) => !prevCollapsed);
  }, []);

  const sidebarItems = useSidebarMenuItems();

  const sidebarCls = useToggleFeatures({
    feature: 'redesign',
    on: () => cls['sidebar-redesigned'],
    off: () => cls.sidebar,
  });

  return (
    <VStack
      as="aside"
      justify="between"
      data-testid={sidebarDataTestId}
      className={classNames(sidebarCls, { [cls.collapsed]: isCollapsed }, [className])}
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

export default SidebarDeprecated;
