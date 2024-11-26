import { ReactNode } from 'react';

import classNames, { Mods } from 'shared/lib/classNames';
import * as cls from './Flex.module.scss';

export type FlexJustify = 'start' | 'center' | 'end' | 'between';
export type FlexAlign = 'start' | 'center' | 'end';
export type FlexDirection = 'row' | 'column';
export type FlexGap = '4' | '8' | '16' | '24' | '32' | '48';

const justifyClasses: Record<FlexJustify, string> = {
  start: cls['justify-start'],
  center: cls['justify-center'],
  end: cls['justify-end'],
  between: cls['justify-between'],
};

const alignClasses: Record<FlexAlign, string> = {
  start: cls['align-start'],
  center: cls['align-center'],
  end: cls['align-end'],
};

const directionClasses: Record<FlexDirection, string> = {
  row: cls['direction-row'],
  column: cls['direction-column'],
};

const gapClasses: Record<FlexGap, string> = {
  4: cls.gap4,
  8: cls.gap8,
  16: cls.gap16,
  24: cls.gap24,
  32: cls.gap32,
  48: cls.gap48,
};

export interface FlexProps {
  className?: string;
  children: ReactNode;
  justify?: FlexJustify;
  align?: FlexAlign;
  direction: FlexDirection;
  gap?: FlexGap;
  fullW?: boolean;
}

const Flex = (props: FlexProps) => {
  const { justify = 'start', align = 'center', direction = 'row' } = props;
  const { className, children, gap, fullW } = props;

  const classes = [
    className,
    justifyClasses[justify],
    alignClasses[align],
    directionClasses[direction],
    gap && gapClasses[gap],
  ];

  const mods: Mods = {
    [cls.full]: fullW,
  };

  return <div className={classNames(cls.flex, mods, classes)}>{children}</div>;
};

export default Flex;