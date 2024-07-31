import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

import classNames from 'shared/lib/classNames';
import { ButtonTheme } from '../types';
import * as cls from './Button.module.scss';

type ButtonProps = {
  className?: string;
  theme?: ButtonTheme;
} & PropsWithChildren &
  ButtonHTMLAttributes<HTMLButtonElement>;

const Button = (props: ButtonProps) => {
  const { className, theme = ButtonTheme.CLEAR, children, ...restProps } = props;

  return (
    <button {...restProps} className={classNames(cls.Button, {}, [className, cls[theme]])}>
      {children}
    </button>
  );
};

export default Button;
