type User = {
  id: string;
  username: string;
};

type UserStateSchema = {
  authData?: Nullable<User>;
  isInitialized?: boolean;
};

export { UserStateSchema, User };
