import { Profile } from 'entities/Profile';

type UserProfileSchema = { user_id: number } & Profile;

export default UserProfileSchema;
