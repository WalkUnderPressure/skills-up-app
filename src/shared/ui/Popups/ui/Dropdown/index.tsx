import { Fragment, ReactNode } from 'react';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';

import classNames from '~/shared/lib/classNames';
import { AppLink } from '~/shared/ui/AppLink';
import { mapDirectionToClass } from '../../styles/mapDirectionToClass';
import { PopupDirection } from '../../types';
import * as cls from './Dropdown.module.scss';
import * as popupCls from '../../styles/popup.module.scss';

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
  items: DropdownItem[];
  direction?: PopupDirection;
  trigger: ReactNode;
} & PropsWithClassName;

const Dropdown = (props: DropdownProps) => {
  const { className, trigger, items, direction = 'bottom-right' } = props;

  const menuClasses = [mapDirectionToClass[direction], popupCls['popup-content']];

  return (
    <Menu as="div" className={classNames('', {}, [className, popupCls['popup-box']])}>
      <MenuButton className={cls.btn} as="div">
        {trigger}
      </MenuButton>

      <MenuItems className={classNames(cls.menu, {}, menuClasses)}>
        {items.map((item) => {
          const { id, href, disabled, onClick, content: itemContent } = item;

          const itemClassName = ({ focus, disabled }: { focus: boolean; disabled: boolean }) =>
            classNames(cls.item, {
              [cls.focus]: focus,
              [cls.disabled]: disabled,
            });

          if (href) {
            return (
              <MenuItem key={id} as={AppLink} to={href} disabled={disabled}>
                {({ focus, disabled }: ItemRenderPropArg) => (
                  <span className={itemClassName({ focus, disabled })}>{itemContent}</span>
                )}
              </MenuItem>
            );
          }

          return (
            <MenuItem key={id} as={Fragment} disabled={disabled}>
              {({ focus, disabled }: ItemRenderPropArg) => (
                <button
                  type="button"
                  disabled={disabled}
                  onClick={onClick}
                  className={itemClassName({ focus, disabled })}
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
