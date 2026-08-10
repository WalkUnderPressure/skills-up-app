import { forwardRef, PropsWithChildren } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import classNames from '~/shared/lib/classNames';
import { AppLinkTheme } from '../types';
import cls from './AppLink.module.scss';

type AppLinkProps = {
  theme?: AppLinkTheme;
} & LinkProps &
  PropsWithChildren &
  PropsWithClassName;

/**
 * Use new UI elements from 'shared/ui/redesigned' folder
 * @deprecated
 */
const AppLink = forwardRef<HTMLAnchorElement, AppLinkProps>((props, ref) => {
  const { className, children, theme = AppLinkTheme.PRIMARY, ...restLinkProps } = props;

  return (
    <Link
      {...restLinkProps}
      ref={ref}
      className={classNames(cls['app-link'], {}, [className, cls[theme]])}
    >
      {children}
    </Link>
  );
});

export default AppLink;
