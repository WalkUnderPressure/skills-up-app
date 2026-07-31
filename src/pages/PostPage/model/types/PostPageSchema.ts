import PostRecommendationsSchema from './PostRecommendationsSchema';
import { PostCommentariesSchema } from '~/features/PostCommentaries';

type PostPageSchema = {
  postCommentaries: PostCommentariesSchema;
  postRecommendations: PostRecommendationsSchema;
};

export default PostPageSchema;
