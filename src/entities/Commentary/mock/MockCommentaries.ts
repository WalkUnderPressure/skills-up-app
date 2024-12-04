import { MockProfileWithAvatar, MockProfileData } from '~/entities/Profile/mock/MockProfileData';
import { Profile } from '~/entities/Profile';

const MockCommentaries = [
  {
    id: '1',
    text: 'Cool post about modern JS',
    postId: '1',
    userId: '1',
    profileId: '1',
    profile: {
      ...MockProfileWithAvatar,
      userId: MockProfileWithAvatar.id,
    },
  },
  {
    id: '2',
    text: 'Great job! Thanks!',
    postId: '1',
    userId: '2',
    profileId: '2',
    profile: {
      ...MockProfileData,
      username: 'martha_dean',
      userId: MockProfileWithAvatar.id,
    } as Profile,
  },
];

export default MockCommentaries;
