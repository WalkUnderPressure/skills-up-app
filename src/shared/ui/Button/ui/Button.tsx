import { ButtonHTMLAttributes, forwardRef, PropsWithChildren } from 'react';

import classNames from '~/shared/lib/classNames';
import { ButtonTheme, ButtonSize, ButtonRounded } from '../types';
import cls from './Button.module.scss';

type ButtonProps = {
  theme?: ButtonTheme;
  size?: ButtonSize;
  isSquare?: boolean;
  rounded?: ButtonRounded;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  PropsWithChildren &
  PropsWithChildren;

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
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
    <button {...restProps} className={classNames(cls.button, modClasses, addClasses)} ref={ref}>
      {children}
    </button>
  );
});

export default Button;
