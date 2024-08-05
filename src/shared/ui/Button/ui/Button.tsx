import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

import classNames from 'shared/lib/classNames';
import { ButtonTheme, ButtonSize } from '../types';
import * as cls from './Button.module.scss';

type ButtonProps = {
  className?: string;
  theme?: ButtonTheme;
  size?: ButtonSize;
  isSquare?: boolean;
} & PropsWithChildren &
  ButtonHTMLAttributes<HTMLButtonElement>;

const Button = (props: ButtonProps) => {
  const { className, theme = '', size = '', isSquare, children, ...restProps } = props;

  const addClasses = [className, cls[theme], cls[size]];
  const modClasses = { [cls.square]: isSquare };

  return (
    <button {...restProps} className={classNames(cls.button, modClasses, addClasses)}>
      {children}
    </button>
  );
};

export default Button;
