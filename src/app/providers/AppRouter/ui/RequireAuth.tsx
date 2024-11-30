import { memo, PropsWithChildren, useMemo } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { AppRoutes, RouterPaths } from 'shared/config/routerConfig';
import useIsAuthorized from 'shared/lib/hooks/useIsAuthorized';
import { useAppSelector } from 'app/providers/StoreProvider';
import { getUserRoles, UserRoles } from 'entities/User';

const DEFAULT_REDIRECT = RouterPaths[AppRoutes.HOME];

type RequireAuthProps = {
  to?: string;
  roles?: Array<UserRoles>;
} & PropsWithChildren;

const RequireAuth = memo((props: RequireAuthProps) => {
  const { children, to, roles } = props;

  const location = useLocation();

  const { isAuthorized } = useIsAuthorized();
  const userRoles = useAppSelector(getUserRoles);

  const isRouteAvailable = useMemo(() => {
    let isAvailable = true;

    if (roles?.length) {
      isAvailable = roles.some((routeRole) => userRoles.includes(routeRole));
    }

    return isAvailable;
  }, [roles, userRoles]);

  if (!isAuthorized) {
    return <Navigate to={to ?? DEFAULT_REDIRECT} state={{ from: location }} replace />;
  }

  if (!isRouteAvailable) {
    return (
      <Navigate to={to ?? RouterPaths[AppRoutes.FORBIDDEN]} state={{ from: location }} replace />
    );
  }

  return children;
});

export default RequireAuth;
