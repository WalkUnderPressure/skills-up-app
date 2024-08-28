import { useCallback, useEffect } from 'react';

import DynamicReducerProvider, { ReducersMap } from 'shared/lib/components/DynamicReducerProvider';
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider';
import { getBlogPostsIsLoading, getBlogPostViewType } from '../model/selectors/blogPageSelectors';
import { blogPageActions, blogPageReducer, getBlogPosts } from '../model/slice/blogPageSlice';
import fetchNextBlogPostsPage from '../model/services/fetchNextBlogPostsPage/fetchNextBlogPostsPage';
import initBlogPageState from '../model/services/initBlogPageState/initBlogPageState';
import { BlogViewTypeSwitcher } from 'features/BlogViewTypeSwitcher';
import { PostsList, PostViewKey } from 'entities/Post';
import classNames from 'shared/lib/classNames';
import { Page } from 'shared/ui/Page';
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

  const postsIsLoading = useAppSelector(getBlogPostsIsLoading);
  const postViewType = useAppSelector(getBlogPostViewType);
  const posts = useAppSelector(getBlogPosts.selectAll);

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextBlogPostsPage());
  }, [dispatch]);

  useEffect(() => {
    dispatch(initBlogPageState());
  }, [dispatch]);

  const changeViewType = useCallback(
    (nextViewType: PostViewKey) => {
      dispatch(blogPageActions.setViewType(nextViewType));
    },
    [dispatch],
  );

  return (
    <DynamicReducerProvider reducers={reducers} removeAfterUnmount={false}>
      <Page onScrollEnd={onLoadNextPart} className={classNames(cls['blog-page'], {}, [className])}>
        <BlogViewTypeSwitcher viewType={postViewType} onChangeView={changeViewType} />

        <PostsList posts={posts} isLoading={postsIsLoading} viewType={postViewType} />
      </Page>
    </DynamicReducerProvider>
  );
};

export default BlogPage;
