import { RouteProps } from 'react-router-dom';

import { UserRoles } from '~/entities/User';

export type AppRouteProps = {
  authOnly?: boolean;
  roles?: Array<UserRoles>;
} & RouteProps;
