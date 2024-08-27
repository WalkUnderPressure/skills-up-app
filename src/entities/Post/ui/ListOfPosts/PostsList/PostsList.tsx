import { memo } from 'react';

import { Post, PostViewKey, PostViewMap } from '../../../model/types/Post';
import PostListItem from '../PostListItem/PostListItem';
import classNames from 'shared/lib/classNames';
import * as cls from './PostsList.module.scss';

type PostsListProps = {
  className?: string;
  posts?: Array<Post>;
  isLoading?: boolean;
  viewType?: PostViewKey;
};

const PostsList = memo((props: PostsListProps) => {
  const { className, posts, isLoading = false, viewType = PostViewMap.SHORT } = props;

  if (isLoading) {
    const itemsLoadingCount = viewType === PostViewMap.FULL ? 3 : 15;
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
