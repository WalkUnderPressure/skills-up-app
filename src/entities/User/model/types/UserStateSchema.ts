import IInitialized from '~/shared/types/IInitialized';

// TODO: Need add system like here: https://github.com/WebDevSimplified/permission-system/tree/main
type UserRoles = 'GUEST' | 'USER' | 'ADMIN';

type User = {
  id: string;
  username: string;
  roles?: Array<UserRoles>;
};

type UserStateSchema = {
  authData?: Nullable<User>;
} & IInitialized;

export type { UserStateSchema, User, UserRoles };
