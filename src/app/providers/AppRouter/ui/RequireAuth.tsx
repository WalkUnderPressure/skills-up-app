import { memo, PropsWithChildren } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { AppRoutes, RouterPaths } from 'shared/config/routerConfig';
import { useIsAuthorized } from 'entities/User';

const DEFAULT_REDIRECT = RouterPaths[AppRoutes.HOME];

type RequireAuthProps = {
  to?: string;
} & PropsWithChildren;

const RequireAuth = memo((props: RequireAuthProps) => {
  const { children, to } = props;

  const location = useLocation();

  const { isAuthorized } = useIsAuthorized();

  if (!isAuthorized) {
    return <Navigate to={to ?? DEFAULT_REDIRECT} state={{ from: location }} replace />;
  }

  return children;
});

export default RequireAuth;
