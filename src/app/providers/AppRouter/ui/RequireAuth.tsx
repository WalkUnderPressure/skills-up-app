import { memo, PropsWithChildren, useMemo } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { getRouteForbidden, getRouteHome } from '~/shared/constants/appRoutes';
import useIsAuthorized from '~/shared/lib/hooks/useIsAuthorized';
import { useUserRoles, UserRoles } from '~/entities/User';

const DEFAULT_REDIRECT = getRouteHome();
const FORBIDDEN_REDIRECT = getRouteForbidden();

type RequireAuthProps = {
  to?: string;
  roles?: Array<UserRoles>;
} & PropsWithChildren;

const RequireAuth = memo((props: RequireAuthProps) => {
  const { children, to, roles } = props;

  const location = useLocation();

  const { isAuthorized } = useIsAuthorized();
  const userRoles = useUserRoles();

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
    return <Navigate to={to ?? FORBIDDEN_REDIRECT} state={{ from: location }} replace />;
  }

  return children;
});

export default RequireAuth;
