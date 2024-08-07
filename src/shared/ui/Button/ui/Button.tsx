import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

import classNames from 'shared/lib/classNames';
import { ButtonTheme, ButtonSize, ButtonRounded } from '../types';
import * as cls from './Button.module.scss';

type ButtonProps = {
  className?: string;
  theme?: ButtonTheme;
  size?: ButtonSize;
  isSquare?: boolean;
  rounded?: ButtonRounded;
} & PropsWithChildren &
  ButtonHTMLAttributes<HTMLButtonElement>;

const Button = (props: ButtonProps) => {
  const { className, theme = '', size = '', isSquare, rounded, children, ...restProps } = props;

  const modClasses = { [cls.square]: isSquare, [cls[rounded]]: rounded };
  const addClasses = [className, cls[theme], cls[size]];

  return (
    <button {...restProps} className={classNames(cls.button, modClasses, addClasses)}>
      {children}
    </button>
  );
};

export default Button;
