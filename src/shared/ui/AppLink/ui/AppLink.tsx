import { PropsWithChildren } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import classNames from 'shared/lib/classNames';
import * as cls from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  WARNING = 'warning',
}

type AppLinkProps = {
  className?: string;
  theme?: AppLinkTheme;
} & LinkProps &
  PropsWithChildren;

const AppLink = (props: AppLinkProps) => {
  const { className, children, theme = AppLinkTheme.PRIMARY, ...restLinkProps } = props;

  return (
    <Link {...restLinkProps} className={classNames(cls['app-link'], {}, [className, cls[theme]])}>
      {children}
    </Link>
  );
};

export default AppLink;
