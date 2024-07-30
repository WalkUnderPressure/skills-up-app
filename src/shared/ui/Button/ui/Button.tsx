import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

import classNames from 'shared/lib/classNames';
import * as cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
}

type ButtonProps = {
    className?: string,
    theme?: ButtonTheme,
} & PropsWithChildren & ButtonHTMLAttributes<HTMLButtonElement>

function Button(props: ButtonProps) {
    const { className, theme = ButtonTheme.CLEAR, children, ...restProps } = props

    return (
        <button
            {...restProps}
            className={classNames(cls.Button, {}, [className, cls[theme]])}
        >
            {children}
        </button>
    )
}

export default Button
