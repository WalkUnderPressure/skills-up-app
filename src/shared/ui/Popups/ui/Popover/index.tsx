import { Fragment, memo, PropsWithChildren, ReactNode } from 'react';
import {
  Popover as HPopover,
  PopoverButton as HPopoverButton,
  PopoverPanel as HPopoverPanel,
} from '@headlessui/react';

import classNames from 'shared/lib/classNames';
import { mapDirectionToClass } from '../../styles/mapDirectionToClass';
import { PopupDirection } from '../../types';
import * as popupCls from '../../styles/popup.module.scss';

export type PopoverProps = {
  trigger: ReactNode;
  direction?: PopupDirection;
} & PropsWithChildren &
  PropsWithClassName;

const Popover = memo((props: PopoverProps) => {
  const { trigger, children, className, direction = 'bottom-right' } = props;

  const menuClasses = [mapDirectionToClass[direction]];

  return (
    <HPopover className={classNames('', {}, [className, popupCls['popup-box']])}>
      <HPopoverButton as={Fragment}>{trigger}</HPopoverButton>

      <HPopoverPanel className={classNames(popupCls['popup-content'], {}, menuClasses)}>
        {children}
      </HPopoverPanel>
    </HPopover>
  );
});

export default Popover;
