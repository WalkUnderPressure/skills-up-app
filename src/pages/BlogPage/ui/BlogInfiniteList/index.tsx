import { useCallback } from 'react';

import { useScrollIndex, useScrollKeeperActions } from '~/features/ScrollKeeper';
import { VirtPostsList } from '~/entities/Post';
import { useFetchNextBlogPostsPage } from '../../model/services/fetchNextBlogPostsPage/fetchNextBlogPostsPage';
import { useBlogPostsSelectAll } from '../../model/slices/blogPageSlice';
import {
  useBlogPostsIsLoading,
  useBlogPostViewType,
} from '../../model/selectors/blogPageSelectors';

const BlogInfiniteList = () => {
  const postsIsLoading = useBlogPostsIsLoading();
  const postViewType = useBlogPostViewType();
  const posts = useBlogPostsSelectAll();

  const scrollIndex = useScrollIndex();

  const fetchNextBlogPostsPage = useFetchNextBlogPostsPage();
  const { setScrollIndex } = useScrollKeeperActions();

  const handleScrollIndexClick = useCallback(
    (index: number) => {
      setScrollIndex(index);
    },
    [setScrollIndex],
  );

  const onLoadNextPart = useCallback(() => {
    fetchNextBlogPostsPage();
  }, [fetchNextBlogPostsPage]);

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
