import { HTMLAttributeAnchorTarget, memo, useEffect, useRef } from 'react';
import { Virtuoso, VirtuosoGrid, VirtuosoGridHandle } from 'react-virtuoso';

import classNames from '~/shared/lib/classNames';

import { Post, PostViewKey, PostViewMap } from '../../../../model/types/Post';
import PostListItem from '../../PostListItem/PostListItem';
import PostsSkeletons from '../PostsSkeletons';
import cls from '../PostsList.module.scss';
import NoPostsBanner from './NoPostsBanner';

type VPostsListProps = {
  posts?: Array<Post>;
  isLoading?: boolean;
  viewType?: PostViewKey;
  target?: HTMLAttributeAnchorTarget | undefined;
  scrollIndex?: number;
  onLoadNextPart?: () => void;
  handleScrollIndexClick?: (index: number) => void;
} & PropsWithClassName &
  PropsWithDataTestId;

export const VirtPostsList = memo((props: VPostsListProps) => {
  const { viewType = PostViewMap.SHORT, scrollIndex = 0 } = props;
  const { className, posts = [], isLoading, target } = props;
  const { onLoadNextPart, handleScrollIndexClick, 'data-testid': dataTestId } = props;

  const virtuosoGridRef = useRef<VirtuosoGridHandle>(null);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (viewType === PostViewMap.SHORT) {
      timeoutId = setTimeout(() => {
        if (virtuosoGridRef.current) {
          virtuosoGridRef.current.scrollToIndex(scrollIndex);
        }
      }, 100);
    }

    return () => clearTimeout(timeoutId);
  }, [scrollIndex, viewType]);

  const VirtListPost = (index: number, post: Post) => {
    const onItemLinkClick = handleScrollIndexClick
      ? () => handleScrollIndexClick(index)
      : undefined;

    const isLast = index === posts.length - 1;

    return (
      <PostListItem
        key={post.id}
        className={classNames(cls['list-item'], { [cls['last-item']]: isLast })}
        post={post}
        viewType={viewType}
        target={target}
        onItemLinkClick={onItemLinkClick}
      />
    );
  };

  const Footer = memo(() => {
    if (isLoading) {
      return <PostsSkeletons className={cls['list-item']} viewType={viewType} />;
    }

    return null;
  });

  if (!isLoading && !posts.length) {
    return <NoPostsBanner />;
  }

  return (
    <div
      className={classNames(cls[viewType], {}, [className])}
      style={{ height: '100%' }}
      data-testid={dataTestId}
    >
      {viewType === PostViewMap.FULL ? (
        <Virtuoso
          // for use window scroll (filter block scroll with posts)
          // useWindowScroll={useWindowScroll}
          style={{ width: '100%' }}
          data={posts}
          itemContent={VirtListPost}
          endReached={onLoadNextPart}
          initialTopMostItemIndex={scrollIndex}
          components={{
            Footer,
          }}
        />
      ) : (
        <VirtuosoGrid
          // for use window scroll (filter block scroll with posts)
          // useWindowScroll={useWindowScroll}
          ref={virtuosoGridRef}
          style={{ width: '100%' }}
          totalCount={posts.length}
          // TODO: Add skeletons for grid template
          // components={{ ScrollSeekPlaceholder }}
          // scrollSeekConfiguration={{ enter..., exit... }}
          endReached={onLoadNextPart}
          data={posts}
          itemContent={VirtListPost}
          listClassName={cls['posts-list']}
        />
      )}
    </div>
  );
});

export default VirtPostsList;
