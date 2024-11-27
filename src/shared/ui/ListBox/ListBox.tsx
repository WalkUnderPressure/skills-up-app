import { Fragment, ReactNode } from 'react';
import {
  Listbox as HListBox,
  ListboxOption as HListboxOption,
  ListboxOptions as HListboxOptions,
  ListboxButton as HListboxButton,
} from '@headlessui/react';

import { Button, ButtonRounded } from 'shared/ui/Button';
import classNames from 'shared/lib/classNames';
import { VStack } from 'shared/ui/Stack';

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
  value?: ListBoxItem;
  defaultValue?: ListBoxItem;
  onChange: (value: ListBoxItem) => void;
  readonly?: boolean;
  direction?: DropdownDirection;
  label: string;
};

const mapDirectionClass: Record<DropdownDirection, string> = {
  bottom: cls['options-bottom'],
  top: cls['options-top'],
};

const ListBox = (props: ListBoxProps) => {
  const { defaultValue, onChange, readonly } = props;
  const { direction = 'bottom', label } = props;
  const { className, items = [], value } = props;

  const optionsClasses = [mapDirectionClass[direction]];
  const selectedItem = (value ?? defaultValue)?.content;

  return (
    <VStack gap="4">
      {label && <span>{label}</span>}

      <HListBox
        disabled={readonly}
        as="div"
        className={classNames(cls['list-box'], {}, [className])}
        value={value}
        onChange={onChange}
      >
        <HListboxButton disabled={readonly} as={Fragment}>
          <Button rounded={ButtonRounded.M} disabled={readonly} className={cls['trigger-btn']}>
            {selectedItem ? selectedItem : '...'}
          </Button>
        </HListboxButton>

        <HListboxOptions as="ul" className={classNames(cls.options, {}, optionsClasses)}>
          {items.map((item) => (
            <HListboxOption key={item.value} value={item} disabled={item.disabled} as={Fragment}>
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
    </VStack>
  );
};

export default ListBox;
