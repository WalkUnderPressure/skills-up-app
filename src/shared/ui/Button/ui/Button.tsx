import { ButtonHTMLAttributes, memo, PropsWithChildren } from 'react';

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

const Button = memo((props: ButtonProps) => {
  const {
    className,
    rounded = ButtonRounded.NONE,
    theme = '',
    size = '',
    isSquare,
    children,
    ...restProps
  } = props;

  const addClasses = [className, cls[theme], cls[size]];
  const modClasses = {
    [cls.square]: isSquare,
    [cls[rounded]]: rounded,
    [cls.disabled]: props.disabled,
  };

  return (
    <button {...restProps} className={classNames(cls.button, modClasses, addClasses)}>
      {children}
    </button>
  );
});

export default Button;
