import { useSearchParams } from 'react-router-dom';

import DynamicReducerProvider, {
  ReducersMap,
} from '~/shared/lib/components/DynamicReducerProvider';
import useInitialEffect from '~/shared/lib/hooks/useInitialEffect';
import { useAppDispatch } from '~/app/providers/StoreProvider';
import { blogPageReducer } from '../../model/slices/blogPageSlice';
import initBlogPageState from '../../model/services/initBlogPageState/initBlogPageState';
import BlogPageFilters from '../BlogPageFilters/BlogPageFilters';
import BlogInfiniteList from '../BlogInfiniteList';
import classNames from '~/shared/lib/classNames';
import { Page } from '~/widgets/Page';
import cls from './BlogPage.module.scss';

const reducers: ReducersMap = {
  blogPage: blogPageReducer,
};

export type BlogPageProps = PropsWithClassName;

const BlogPage = (props: BlogPageProps) => {
  const { className } = props;

  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();

  useInitialEffect(() => {
    dispatch(initBlogPageState(searchParams));
    // IMPORTANT Don't change deps array
  }, [dispatch]);

  return (
    <DynamicReducerProvider reducers={reducers} removeAfterUnmount={false}>
      <Page className={classNames(cls['blog-page'], {}, [className])}>
        <BlogPageFilters />

        <BlogInfiniteList />
      </Page>
    </DynamicReducerProvider>
  );
};

export default BlogPage;
