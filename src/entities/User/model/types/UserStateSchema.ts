import IInitialized from '~/shared/types/IInitialized';

// TODO: Need add system like here: https://github.com/WebDevSimplified/permission-system/tree/main
enum UserRoles {
  GUEST = 'GUEST',
  USER = 'USER',
  ADMIN = 'ADMIN',
}

type User = {
  id: string;
  username: string;
  roles?: Array<UserRoles>;
};

type UserStateSchema = {
  authData?: Nullable<User>;
} & IInitialized;

export { UserRoles };
export type { UserStateSchema, User };
