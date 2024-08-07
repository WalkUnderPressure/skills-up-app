type User = {
  id: number;
  username: string;
};

type UserStateSchema = { userAuthData?: User };

export { UserStateSchema, User };
