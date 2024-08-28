import { memo } from 'react';

import { Post, PostViewKey, PostViewMap } from '../../../model/types/Post';
import PostListItem from '../PostListItem/PostListItem';
import classNames from 'shared/lib/classNames';
import * as cls from './PostsList.module.scss';

const DEFAULT_POST_SHORT_SKELETONS = 12;
const DEFAULT_POST_FULL_SKELETONS = 4;

type PostsListProps = {
  className?: string;
  posts?: Array<Post>;
  isLoading?: boolean;
  viewType?: PostViewKey;
};

const PostsList = memo((props: PostsListProps) => {
  const { className, posts, isLoading = false, viewType = PostViewMap.SHORT } = props;

  const itemsLoadingCount =
    viewType === PostViewMap.FULL ? DEFAULT_POST_FULL_SKELETONS : DEFAULT_POST_SHORT_SKELETONS;
  const loadPosts = new Array(itemsLoadingCount).fill(0);

  return (
    <div className={classNames(cls['posts-list'], {}, [className])}>
      {Boolean(posts?.length) &&
        posts?.map((post) => <PostListItem key={post.id} post={post} viewType={viewType} />)}

      {isLoading && (
        <>
          {loadPosts.map((_, index) => (
            <PostListItem key={index} isLoading={isLoading} viewType={viewType} />
          ))}
        </>
      )}
    </div>
  );
});

export default PostsList;
