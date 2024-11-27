import { ElementType, Fragment, ReactNode } from 'react';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';

import { DropdownDirection } from 'shared/types/ui';
import classNames from 'shared/lib/classNames';
import { AppLink } from '../AppLink';

import * as cls from './Dropdown.module.scss';

// type from @headlessui/react/dist/components/menu/menu.d.ts
type ItemRenderPropArg = {
  focus: boolean;
  disabled: boolean;
  close: () => void;
};

export type DropdownItem = {
  id: string | number;
  disabled?: boolean;
  content?: ReactNode;
  onClick?: () => void;
  href?: string;
};

export type DropdownProps = {
  className?: string;
  items: DropdownItem[];
  direction?: DropdownDirection;
  trigger: ReactNode;
};

const mapDirectionClass: Record<DropdownDirection, string> = {
  'bottom-left': cls['bottom-left'],
  'bottom-right': cls['bottom-right'],
  'top-right': cls['top-right'],
  'top-left': cls['top-left'],
};

const Dropdown = (props: DropdownProps) => {
  const { className, trigger, items, direction = 'bottom-right' } = props;

  const menuClasses = [mapDirectionClass[direction]];

  return (
    <Menu as="div" className={classNames(cls.dropdown, {}, [className])}>
      <MenuButton className={cls.btn} as="div">
        {trigger}
      </MenuButton>

      <MenuItems className={classNames(cls.menu, {}, menuClasses)}>
        {items.map((item) => {
          const { id, href, disabled, onClick, content: itemContent } = item;

          let asElement: ElementType = Fragment;
          let elementProps = {};

          if (href) {
            asElement = AppLink;
            elementProps = { to: href };
          }

          return (
            <MenuItem key={id} as={asElement} {...elementProps} disabled={disabled}>
              {({ focus, disabled }: ItemRenderPropArg) => (
                <button
                  type="button"
                  disabled={disabled}
                  onClick={onClick}
                  className={classNames(cls.item, { [cls.focus]: focus, [cls.disabled]: disabled })}
                >
                  {itemContent}
                </button>
              )}
            </MenuItem>
          );
        })}
      </MenuItems>
    </Menu>
  );
};

export default Dropdown;
