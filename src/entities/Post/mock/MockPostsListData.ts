import { MockProfileWithAvatar } from 'entities/Profile/mock/MockProfileData';
import { MockPostDetailsData } from './MockPostDetailsData';
import { Post } from '../model/types/Post';

const COUNT_OF_MOCK_POSTS = 16;

const MockPostsListData: Array<Post> = new Array(COUNT_OF_MOCK_POSTS).fill(0).map(
  (_, index): Post => ({
    ...MockPostDetailsData,
    id: String(index + 1),
    profile: MockProfileWithAvatar,
  }),
);

export { MockPostsListData };
