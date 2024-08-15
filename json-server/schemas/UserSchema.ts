import { User } from 'entities/User';

type UserSchema = { password: string } & User;

export default UserSchema;
