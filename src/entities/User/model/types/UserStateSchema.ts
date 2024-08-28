import IInitialized from 'shared/types/IInitialized';

type User = {
  id: string;
  username: string;
};

type UserStateSchema = {
  authData?: Nullable<User>;
} & IInitialized;

export { UserStateSchema, User };
