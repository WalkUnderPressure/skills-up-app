import { HTMLAttributeAnchorTarget, memo } from 'react';

import ShortPostListItem from '../PostListItem/ShortPostListItem/ShortPostListItem';
import FullPostListItem from '../PostListItem/FullPostListItem/FullPostListItem';
import { Post, PostViewKey, PostViewMap } from '../../../model/types/Post';

type PostListItemProps = {
  className?: string;
  post?: Post;
  isLoading?: boolean;
  viewType?: PostViewKey;
  target?: HTMLAttributeAnchorTarget | undefined;
};

const PostListItem = memo((props: PostListItemProps) => {
  const { post, isLoading = false, viewType = PostViewMap.SHORT, target } = props;

  if (viewType === PostViewMap.SHORT) {
    return <ShortPostListItem post={post} isLoading={isLoading} target={target} />;
  } else {
    return <FullPostListItem post={post} isLoading={isLoading} target={target} />;
  }
});

export default PostListItem;
