import { useCallback } from 'react';

import { useAppDispatch, useAppSelector } from '~/app/providers/StoreProvider';
import { getScrollIndex, scrollKeeperActions } from '~/features/ScrollKeeper';
import { VirtPostsList } from '~/entities/Post';
import fetchNextBlogPostsPage from '../../model/services/fetchNextBlogPostsPage/fetchNextBlogPostsPage';
import { getBlogPosts } from '../../model/slices/blogPageSlice';
import {
  getBlogPostsIsLoading,
  getBlogPostViewType,
} from '../../model/selectors/blogPageSelectors';

const BlogInfiniteList = () => {
  const dispatch = useAppDispatch();

  const postsIsLoading = useAppSelector(getBlogPostsIsLoading);
  const postViewType = useAppSelector(getBlogPostViewType);
  const posts = useAppSelector(getBlogPosts.selectAll);
  const scrollIndex = useAppSelector(getScrollIndex);

  const handleScrollIndexClick = useCallback(
    (index: number) => {
      dispatch(scrollKeeperActions.setScrollIndex(index));
    },
    [dispatch],
  );

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextBlogPostsPage());
  }, [dispatch]);

  return (
    <VirtPostsList
      posts={posts}
      isLoading={postsIsLoading}
      viewType={postViewType}
      onLoadNextPart={onLoadNextPart}
      scrollIndex={scrollIndex}
      handleScrollIndexClick={handleScrollIndexClick}
    />
  );
};

export default BlogInfiniteList;
