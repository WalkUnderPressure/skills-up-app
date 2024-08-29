import PostRecommendationsSchema from './PostRecommendationsSchema';
import PostCommentarySchema from './PostCommentarySchema';

type PostPageSchema = {
  postCommentaries: PostCommentarySchema;
  postRecommendations: PostRecommendationsSchema;
};

export default PostPageSchema;
