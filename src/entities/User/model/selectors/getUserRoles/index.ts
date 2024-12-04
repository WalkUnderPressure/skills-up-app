import { createSelector } from '@reduxjs/toolkit';

import { StoreStateSchema } from '~/app/providers/StoreProvider';
import { UserRoles } from '../../types/UserStateSchema';

const getUserRoles = (state: StoreStateSchema) => state.user?.authData?.roles || [];

const getIsUserAdmin = createSelector(getUserRoles, (roles) =>
  Boolean(roles.includes(UserRoles.ADMIN)),
);

export { getUserRoles, getIsUserAdmin };
