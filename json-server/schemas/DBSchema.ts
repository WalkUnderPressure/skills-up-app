import CommentSchema from './CommentSchema';
import PostSchema from './PostSchema';
import UserSchema from './UserSchema';

type DBSchema = {
  posts: Array<PostSchema>;
  comments: Array<CommentSchema>;
  users: Array<UserSchema>;
};

export default DBSchema;