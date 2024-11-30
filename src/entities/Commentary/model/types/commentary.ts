import { Profile } from 'entities/Profile';

type Commentary = {
  id: string;
  text?: string;
  profile: Profile;
  postId?: string;
  userId?: string;
};

export type { Commentary };
