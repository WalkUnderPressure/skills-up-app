import { forwardRef, PropsWithChildren } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import classNames from '~/shared/lib/classNames';
import { AppLinkVariant } from '../types';
import cls from './AppLink.module.scss';

type AppLinkProps = {
  variant?: AppLinkVariant;
} & LinkProps &
  PropsWithChildren &
  PropsWithClassName;

const AppLink = forwardRef<HTMLAnchorElement, AppLinkProps>((props, ref) => {
  const { className, children, variant = 'primary', ...restLinkProps } = props;

  return (
    <Link
      {...restLinkProps}
      ref={ref}
      className={classNames(cls['app-link'], {}, [className, cls[variant]])}
    >
      {children}
    </Link>
  );
});

export default AppLink;
