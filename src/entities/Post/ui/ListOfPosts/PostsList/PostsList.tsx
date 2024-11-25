import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Post, PostViewKey, PostViewMap } from '../../../model/types/Post';
import PostListItem from '../PostListItem/PostListItem';
import classNames from 'shared/lib/classNames';
import * as cls from './PostsList.module.scss';
import PostsSkeletons from './PostsSkeletons';
import { Text, TextTheme } from 'shared/ui/Text';

type PostsListProps = {
  className?: string;
  posts?: Array<Post>;
  isLoading?: boolean;
  viewType?: PostViewKey;
  target?: HTMLAttributeAnchorTarget | undefined;
};

const PostsList = memo((props: PostsListProps) => {
  const { className, posts, isLoading = false, viewType = PostViewMap.SHORT, target } = props;

  const { t } = useTranslation('pages.blog');

  if (!isLoading && !posts?.length) {
    return (
      <Text
        title={t('empty', {
          defaultValue: 'No publications with the specified parameters were found',
        })}
        theme={TextTheme.WARN}
        className={classNames(cls.empty)}
      />
    );
  }

  return (
    <div className={classNames(cls['posts-list'], {}, [className])}>
      {Boolean(posts?.length) &&
        posts?.map((post) => (
          <PostListItem key={post.id} post={post} viewType={viewType} target={target} />
        ))}

      {isLoading && <PostsSkeletons viewType={viewType} />}
    </div>
  );
});

export default PostsList;
