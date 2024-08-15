import { memo, PropsWithChildren } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import classNames from 'shared/lib/classNames';
import { AppLinkTheme } from '../types';
import * as cls from './AppLink.module.scss';

type AppLinkProps = {
  className?: string;
  theme?: AppLinkTheme;
} & LinkProps &
  PropsWithChildren;

const AppLink = memo((props: AppLinkProps) => {
  const { className, children, theme = AppLinkTheme.PRIMARY, ...restLinkProps } = props;

  return (
    <Link {...restLinkProps} className={classNames(cls['app-link'], {}, [className, cls[theme]])}>
      {children}
    </Link>
  );
});

export default AppLink;
