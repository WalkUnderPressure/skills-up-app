import { createSelector } from '@reduxjs/toolkit';

import { StoreStateSchema } from '~/app/providers/StoreProvider';

const getUserRoles = (state: StoreStateSchema) => state.user?.authData?.roles || [];

const getIsUserAdmin = createSelector(getUserRoles, (roles) => Boolean(roles.includes('ADMIN')));

export { getUserRoles, getIsUserAdmin };
