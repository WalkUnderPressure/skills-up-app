type User = {
  id: number;
  username: string;
};

type UserStateSchema = { authData?: User };

export { UserStateSchema, User };
