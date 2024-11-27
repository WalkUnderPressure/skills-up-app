import { Fragment, ReactNode } from 'react';
import {
  Listbox as HListBox,
  ListboxOption as HListboxOption,
  ListboxOptions as HListboxOptions,
  ListboxButton as HListboxButton,
  Label as HListboxLabel,
} from '@headlessui/react';

import { Button, ButtonRounded } from 'shared/ui/Button';
import classNames from 'shared/lib/classNames';

import DoubleArrow from 'shared/assets/icons/double-arrow.svg';

import * as cls from './ListBox.module.scss';

export type ListBoxItem<T = string> = {
  value: T;
  content: ReactNode;
  disabled?: boolean;
};

// TODO: Use https://floating-ui.com/ for positioning
type DropdownDirection = 'top' | 'bottom';

export type ListBoxProps<T = string> = {
  items?: Array<ListBoxItem<T>>;
  className?: string;
  value?: T;
  defaultValue?: T;
  onChange?: (value: T) => void;
  disabled?: boolean;
  readOnly?: boolean;
  direction?: DropdownDirection;
  label?: string;
};

const mapDirectionClass: Record<DropdownDirection, string> = {
  bottom: cls['options-bottom'],
  top: cls['options-top'],
};

const ListBox = <T extends string = string>(props: ListBoxProps<T>) => {
  const { defaultValue, onChange, disabled, readOnly } = props;
  const { direction = 'bottom', label } = props;
  const { className, items = [], value } = props;

  const optionsClasses = [mapDirectionClass[direction]];
  const selectedValue = value ?? defaultValue;
  const isDisabled = disabled || readOnly;

  const valueToShow = items.find(({ value: itemValue }) => itemValue === selectedValue);

  return (
    <HListBox
      disabled={isDisabled}
      as="div"
      className={classNames(cls['list-box'], {}, [className])}
      value={value}
      onChange={onChange}
    >
      {label && <HListboxLabel className={classNames(cls.label)}>{label}</HListboxLabel>}

      <HListboxButton disabled={isDisabled} as={Fragment}>
        <Button rounded={ButtonRounded.M} disabled={isDisabled} className={cls['trigger-btn']}>
          {valueToShow?.content ?? '...'}

          <DoubleArrow />
        </Button>
      </HListboxButton>

      <HListboxOptions as="ul" className={classNames(cls.options, {}, optionsClasses)}>
        {items.map((item) => (
          <HListboxOption
            key={item.value}
            value={item.value}
            disabled={item.disabled}
            as={Fragment}
          >
            {({ focus, selected }) => (
              <li
                className={classNames(cls.item, {
                  [cls.focus]: focus,
                  [cls.disabled]: item.disabled,
                  [cls.selected]: !focus && selected,
                })}
              >
                {item.content}
              </li>
            )}
          </HListboxOption>
        ))}
      </HListboxOptions>
    </HListBox>
  );
};

export default ListBox;
