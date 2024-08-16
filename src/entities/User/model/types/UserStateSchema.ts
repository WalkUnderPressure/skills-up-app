type User = {
  id: number;
  username: string;
};

type UserStateSchema = { authData?: Nullable<User> };

export { UserStateSchema, User };
