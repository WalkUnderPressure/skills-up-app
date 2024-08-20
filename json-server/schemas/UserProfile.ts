import { Profile } from 'entities/Profile';

type UserProfileSchema = { user_id: string } & Profile;

export default UserProfileSchema;
