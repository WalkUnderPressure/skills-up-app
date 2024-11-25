import { HTMLAttributeAnchorTarget, memo } from 'react';

import ShortPostListItem from '../PostListItem/ShortPostListItem/ShortPostListItem';
import FullPostListItem from '../PostListItem/FullPostListItem/FullPostListItem';
import { Post, PostViewKey, PostViewMap } from '../../../model/types/Post';

export type CommonPostListItemProps = {
  className?: string;
  post?: Post;
  isLoading?: boolean;
  target?: HTMLAttributeAnchorTarget | undefined;
  onItemLinkClick?: () => void;
};

type PostListItemProps = {
  viewType?: PostViewKey;
} & CommonPostListItemProps;

const PostListItem = memo((props: PostListItemProps) => {
  const { isLoading = false, viewType = PostViewMap.SHORT } = props;
  const { post, target, className, onItemLinkClick } = props;

  if (viewType === PostViewMap.SHORT) {
    return (
      <ShortPostListItem
        className={className}
        post={post}
        isLoading={isLoading}
        target={target}
        onItemLinkClick={onItemLinkClick}
      />
    );
  } else {
    return (
      <FullPostListItem
        className={className}
        post={post}
        isLoading={isLoading}
        target={target}
        onItemLinkClick={onItemLinkClick}
      />
    );
  }
});

export default PostListItem;
