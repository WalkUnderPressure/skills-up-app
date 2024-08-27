import { useCallback, useEffect } from 'react';

import DynamicReducerProvider, { ReducersMap } from 'shared/lib/components/DynamicReducerProvider';
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider';
import { getBlogPostsIsLoading, getBlogPostViewType } from '../model/selectors/blogPageSelectors';
import { blogPageActions, blogPageReducer, getBlogPosts } from '../model/slice/blogPageSlice';
import fetchBlogPosts from '../model/services/fetchBlogPosts/fetchBlogPosts';
import { BlogViewTypeSwitcher } from 'features/BlogViewTypeSwitcher';
import { PostsList, PostViewKey } from 'entities/Post';
import classNames from 'shared/lib/classNames';
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

  useEffect(() => {
    dispatch(blogPageActions.initState());
    dispatch(fetchBlogPosts());
  }, [dispatch]);

  const changeViewType = useCallback(
    (nextViewType: PostViewKey) => {
      dispatch(blogPageActions.setViewType(nextViewType));
    },
    [dispatch],
  );

  return (
    <DynamicReducerProvider reducers={reducers}>
      <div className={classNames(cls['blog-page'], {}, [className])}>
        <BlogViewTypeSwitcher viewType={postViewType} onChangeView={changeViewType} />

        <PostsList posts={posts} isLoading={postsIsLoading} viewType={postViewType} />
      </div>
    </DynamicReducerProvider>
  );
};

export default BlogPage;
