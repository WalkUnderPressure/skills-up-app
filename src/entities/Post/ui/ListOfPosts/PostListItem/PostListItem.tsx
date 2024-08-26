import { memo } from 'react';

import ShortPostListItem from '../PostListItem/ShortPostListItem/ShortPostListItem';
import FullPostListItem from '../PostListItem/FullPostListItem/FullPostListItem';
import { Post, PostsViewType } from '../../../model/types/Post';

type PostListItemProps = {
  className?: string;
  post?: Post;
  isLoading?: boolean;
  viewType?: PostsViewType;
};

const PostListItem = memo((props: PostListItemProps) => {
  const { post, isLoading = false, viewType = PostsViewType.SHORT } = props;

  if (viewType === PostsViewType.SHORT) {
    return <ShortPostListItem post={post} isLoading={isLoading} />;
  } else {
    return <FullPostListItem post={post} isLoading={isLoading} />;
  }
});

export default PostListItem;
