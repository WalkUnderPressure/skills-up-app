import { memo } from 'react';

import classNames from 'shared/lib/classNames';
import * as cls from './PostsList.module.scss';
import PostListItem from '../PostListItem/PostListItem';
import { Post, PostsViewType } from '../../../model/types/Post';

type PostsListProps = {
  className?: string;
  posts?: Array<Post>;
  isLoading?: boolean;
  viewType?: PostsViewType;
};

const PostsList = memo((props: PostsListProps) => {
  const { className, posts, isLoading = false, viewType = PostsViewType.SHORT } = props;

  if (isLoading) {
    const itemsLoadingCount = viewType === PostsViewType.FULL ? 3 : 15;
    const loadPosts = new Array(itemsLoadingCount).fill(0);

    return (
      <div className={classNames(cls['posts-list'], {}, [className])}>
        {loadPosts.map((_, index) => (
          <PostListItem key={index} isLoading={isLoading} viewType={viewType} />
        ))}
      </div>
    );
  }

  return (
    <div className={classNames(cls['posts-list'], {}, [className])}>
      {Boolean(posts?.length) &&
        posts?.map((post) => (
          <PostListItem key={post.id} post={post} isLoading={isLoading} viewType={viewType} />
        ))}
    </div>
  );
});

export default PostsList;
