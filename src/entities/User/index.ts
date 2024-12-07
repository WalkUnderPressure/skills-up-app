import { UserStateSchema, User, UserRoles } from './model/types/UserStateSchema';
import { getUserRoles, getIsUserAdmin } from './model/selectors/getUserRoles';
import getUserIsInitialized from './model/selectors/getUserIsInitialized';
import { userActions, userReducer } from './model/slices/userSlice';
import getUserAuthData from './model/selectors/getUserAuthData';
import getUserId from './model/selectors/getUserId';

export {
  userActions,
  userReducer,
  getUserAuthData,
  getUserId,
  getUserRoles,
  getIsUserAdmin,
  getUserIsInitialized,
};
export type { UserStateSchema, User, UserRoles };
