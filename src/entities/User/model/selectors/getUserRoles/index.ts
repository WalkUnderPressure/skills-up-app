import { createSelector } from '@reduxjs/toolkit';

import { buildAppSelector } from '~/shared/lib/store';

export const [useUserRoles, getUserRoles] = buildAppSelector(
  (state) => state.user?.authData?.roles || [],
);
export const [useIsUserAdmin, getIsUserAdmin] = buildAppSelector(
  createSelector(getUserRoles, (roles) => Boolean(roles.includes('ADMIN'))),
);
