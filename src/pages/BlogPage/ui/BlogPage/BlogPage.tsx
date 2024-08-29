import { useCallback, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import DynamicReducerProvider, { ReducersMap } from 'shared/lib/components/DynamicReducerProvider';
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider';
import {
  getBlogPostsIsLoading,
  getBlogPostViewType,
} from '../../model/selectors/blogPageSelectors';
import { blogPageReducer, getBlogPosts } from '../../model/slice/blogPageSlice';
import fetchNextBlogPostsPage from '../../model/services/fetchNextBlogPostsPage/fetchNextBlogPostsPage';
import initBlogPageState from '../../model/services/initBlogPageState/initBlogPageState';
import BlogPageFilters from '../BlogPageFilters/BlogPageFilters';
import { PostsList } from 'entities/Post';
import classNames from 'shared/lib/classNames';
import { Page } from 'widgets/Page';
import * as cls from './BlogPage.module.scss';

const reducers: ReducersMap = {
  blogPage: blogPageReducer,
};

export type BlogPageProps = {
  className?: string;
};

const BlogPage = (props: BlogPageProps) => {
  const { className } = props;

  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();

  const postsIsLoading = useAppSelector(getBlogPostsIsLoading);
  const postViewType = useAppSelector(getBlogPostViewType);
  const posts = useAppSelector(getBlogPosts.selectAll);

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextBlogPostsPage());
  }, [dispatch]);

  useEffect(() => {
    dispatch(initBlogPageState(searchParams));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <DynamicReducerProvider reducers={reducers} removeAfterUnmount={false}>
      <Page onScrollEnd={onLoadNextPart} className={classNames(cls['blog-page'], {}, [className])}>
        <BlogPageFilters />

        <PostsList posts={posts} isLoading={postsIsLoading} viewType={postViewType} />
      </Page>
    </DynamicReducerProvider>
  );
};

export default BlogPage;
