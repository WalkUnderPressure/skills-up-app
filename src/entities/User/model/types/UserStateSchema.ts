type User = {
  id: string;
  username: string;
};

type UserStateSchema = { authData?: Nullable<User> };

export { UserStateSchema, User };
