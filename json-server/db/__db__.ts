import { getProfiles, ProfileSchema } from './profiles';
import { getComments, CommentSchema } from './comments';
import { getPosts, PostSchema } from './posts';
import { getUsers, UserSchema } from './users';

type DBSchema = {
  users: Array<UserSchema>;
  profiles: Array<ProfileSchema>;
  posts: Array<PostSchema>;
  comments: Array<CommentSchema>;
};

function getDB(): DBSchema {
  const data = {
    ...getUsers(),
    ...getProfiles(),
    ...getPosts(),
    ...getComments(),
  };

  return data;
}

export default getDB;
