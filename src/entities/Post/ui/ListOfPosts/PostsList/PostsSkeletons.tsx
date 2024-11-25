import { PostViewKey, PostViewMap } from '../../../model/types/Post';
import PostListItem from '../PostListItem/PostListItem';

const DEFAULT_POST_SHORT_SKELETONS = 12;
const DEFAULT_POST_FULL_SKELETONS = 4;

type PostsSkeletonsProps = {
  viewType: PostViewKey;
  className?: string;
};

const PostsSkeletons = (props: PostsSkeletonsProps) => {
  const { viewType = PostViewMap.SHORT, className = '' } = props;

  const itemsLoadingCount =
    viewType === PostViewMap.FULL ? DEFAULT_POST_FULL_SKELETONS : DEFAULT_POST_SHORT_SKELETONS;

  const loadPosts = new Array(itemsLoadingCount).fill(0);

  return (
    <>
      {loadPosts.map((_, index) => (
        <PostListItem
          key={`${viewType}_${index}`}
          isLoading={true}
          viewType={viewType}
          className={className}
        />
      ))}
    </>
  );
};

export default PostsSkeletons;
