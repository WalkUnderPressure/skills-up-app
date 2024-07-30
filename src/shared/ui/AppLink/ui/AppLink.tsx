import { PropsWithChildren } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import classNames from 'shared/lib/classNames';
import * as cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

type AppLinkProps = {
    className?: string,
    theme?: AppLinkTheme,
} & LinkProps & PropsWithChildren

function AppLink(props: AppLinkProps) {
    const { className, children, theme = AppLinkTheme.PRIMARY, ...restLinkProps } = props

    return (
        <Link {...restLinkProps} className={classNames(cls.AppLink, {}, [className, cls[theme]])}>
            {children}
        </Link>
    )
}

export default AppLink
