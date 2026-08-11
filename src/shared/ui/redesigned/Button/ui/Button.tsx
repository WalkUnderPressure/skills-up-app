import { ButtonHTMLAttributes, forwardRef, PropsWithChildren } from 'react';

import classNames from '~/shared/lib/classNames';
import { ButtonVariant } from '../types';
import cls from './Button.module.scss';

type ButtonProps = {
  variant?: ButtonVariant;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  PropsWithChildren &
  PropsWithDataTestId;

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { className, variant = 'clear', children, ...restProps } = props;

  const addClasses = [className, cls[variant]];
  const modClasses = {
    [cls.disabled]: props.disabled,
  };

  return (
    <button {...restProps} className={classNames(cls.button, modClasses, addClasses)} ref={ref}>
      {children}
    </button>
  );
});

export default Button;
